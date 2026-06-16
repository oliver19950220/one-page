import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import GradientText from "../components/GradientText.jsx";
import SoftAurora from "../components/SoftAurora.jsx";
import TiltedCard from "../components/TiltedCard.jsx";
import "../components/BorderGlow.css";
import "./hero-soft-aurora-layer.css";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const DESKTOP_QUERY = "(min-width: 821px)";
const BELIEF_GLOW_GRADIENTS = {
  "--gradient-one": "radial-gradient(at 80% 55%, rgba(75, 161, 167, 0.88) 0px, transparent 50%)",
  "--gradient-two": "radial-gradient(at 69% 34%, rgba(240, 117, 108, 0.82) 0px, transparent 50%)",
  "--gradient-three": "radial-gradient(at 8% 6%, rgba(251, 250, 247, 0.56) 0px, transparent 50%)",
  "--gradient-four": "radial-gradient(at 41% 38%, rgba(75, 161, 167, 0.62) 0px, transparent 50%)",
  "--gradient-five": "radial-gradient(at 86% 85%, rgba(240, 117, 108, 0.5) 0px, transparent 50%)",
  "--gradient-six": "radial-gradient(at 82% 18%, rgba(251, 250, 247, 0.48) 0px, transparent 50%)",
  "--gradient-seven": "radial-gradient(at 51% 4%, rgba(75, 161, 167, 0.7) 0px, transparent 50%)",
  "--gradient-base": "linear-gradient(rgba(75, 161, 167, 0.72) 0 100%)",
};
const SIGNAL_GRADIENT_COLORS = ["#ff938b", "#fbfaf7", "#4ba1a7", "#f0756c"];
const VALUE_GRADIENT_COLORS = ["#111111", "#2f666a", "#f0756c", "#111111"];
const DARK_VALUE_GRADIENT_COLORS = ["#ffffff", "#a8dfe1", "#ff938b", "#ffffff"];

function splitAccentPhrase(text, patterns) {
  const normalizedText = text.toLocaleLowerCase();
  const match = patterns
    .map((pattern) => {
      const index = normalizedText.indexOf(pattern.toLocaleLowerCase());
      return index >= 0 ? { index, pattern } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.index - b.index || b.pattern.length - a.pattern.length)[0];

  if (!match) {
    return { before: text, accent: "", after: "" };
  }

  return {
    before: text.slice(0, match.index),
    accent: text.slice(match.index, match.index + match.pattern.length),
    after: text.slice(match.index + match.pattern.length),
  };
}

function SyncedGradientPhrase({ source, className, patterns, colors = SIGNAL_GRADIENT_COLORS, speed = 9.5 }) {
  const [text, setText] = useState(() => source.textContent?.trim() || "");

  useEffect(() => {
    const syncText = () => setText(source.textContent?.trim() || "");
    const observer = new MutationObserver(syncText);

    observer.observe(source, {
      childList: true,
      characterData: true,
      subtree: true,
    });

    syncText();
    return () => observer.disconnect();
  }, [source]);

  const phrase = splitAccentPhrase(text, patterns);

  return (
    <b className={`gradient-phrase ${className}`}>
      {phrase.before}
      {phrase.accent ? (
        <GradientText
          animationSpeed={speed}
          colors={colors}
          direction="horizontal"
          className={`gradient-phrase-accent ${className}`}
        >
          {phrase.accent}
        </GradientText>
      ) : null}
      {phrase.after}
    </b>
  );
}

function mountHeroSoftAurora() {
  const heroCard = document.querySelector(".hero-card");

  if (!heroCard || heroCard.querySelector("[data-hero-soft-aurora]")) {
    return;
  }

  heroCard.classList.add("hero-card-soft-aurora");

  if (window.matchMedia?.(REDUCED_MOTION_QUERY).matches) {
    return;
  }

  const layer = document.createElement("div");
  layer.className = "hero-soft-aurora-layer";
  layer.setAttribute("data-hero-soft-aurora", "");
  layer.setAttribute("aria-hidden", "true");
  heroCard.insertBefore(layer, heroCard.firstElementChild);

  createRoot(layer).render(
    <SoftAurora
      speed={0.44}
      scale={1.42}
      brightness={1.2}
      color1="#f0756c"
      color2="#4ba1a7"
      noiseFrequency={2.1}
      noiseAmplitude={0.82}
      bandHeight={0.46}
      bandSpread={1.16}
      octaveDecay={0.36}
      layerOffset={0.82}
      colorSpeed={0.42}
      enableMouseInteraction
      mouseInfluence={0.1}
    />
  );
}

function mountHeroTiltedCard() {
  if (!window.matchMedia?.(DESKTOP_QUERY).matches) {
    return;
  }

  const portraitOrbit = document.querySelector(".portrait-orbit");
  const portraitImage = portraitOrbit?.querySelector("img");

  if (!portraitOrbit || !portraitImage || portraitOrbit.querySelector("[data-hero-tilted-card]")) {
    return;
  }

  const tiltedRoot = document.createElement("div");
  tiltedRoot.className = "hero-tilted-card-root";
  tiltedRoot.setAttribute("data-hero-tilted-card", "");
  portraitOrbit.classList.add("is-tilted-card-ready");
  portraitOrbit.appendChild(tiltedRoot);

  createRoot(tiltedRoot).render(
    <TiltedCard
      imageSrc={portraitImage.getAttribute("src")}
      altText={portraitImage.getAttribute("alt") || "Oliver portrait"}
      containerHeight="100%"
      containerWidth="100%"
      imageHeight="100%"
      imageWidth="100%"
      scaleOnHover={1.035}
      rotateAmplitude={9}
      showMobileWarning={false}
      showTooltip={false}
    />
  );
}

function mountGradientPhrase(source, { className, patterns, colors, speed }) {
  if (!source || source.nextElementSibling?.hasAttribute("data-gradient-phrase")) {
    return;
  }

  const root = document.createElement(source.tagName.toLowerCase());
  root.className = `gradient-phrase-root ${className}`;
  root.setAttribute("data-gradient-phrase", "");
  root.setAttribute("aria-hidden", "true");

  source.classList.add("is-gradient-phrase-source");
  source.insertAdjacentElement("afterend", root);

  createRoot(root).render(
    <SyncedGradientPhrase
      source={source}
      className={className}
      patterns={patterns}
      colors={colors}
      speed={speed}
    />
  );
}

function mountGradientAccents() {
  if (window.matchMedia?.(REDUCED_MOTION_QUERY).matches) {
    return;
  }

  [
    {
      selector: "#method-title",
      className: "is-belief-title",
      patterns: ["真实用户", "real users"],
      colors: VALUE_GRADIENT_COLORS,
      speed: 10,
    },
    {
      selector: ".belief-tile-hero h3",
      className: "is-belief-hero-title",
      patterns: ["AI 产品", "AI products"],
      colors: DARK_VALUE_GRADIENT_COLORS,
      speed: 10,
    },
    {
      selector: '[data-i18n="methodTwoTitle"]',
      className: "is-belief-card-title",
      patterns: ["真实用户", "Real Users"],
      colors: VALUE_GRADIENT_COLORS,
      speed: 11,
    },
    {
      selector: '[data-i18n="methodThreeTitle"]',
      className: "is-belief-card-title",
      patterns: ["快验证", "Validate Fast"],
      colors: VALUE_GRADIENT_COLORS,
      speed: 11,
    },
  ].forEach((options) => mountGradientPhrase(document.querySelector(options.selector), options));
}

function setBeliefGlowColor(wrapper, hsl, intensity) {
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const suffixes = ["", "-60", "-50", "-40", "-30", "-20", "-10"];

  opacities.forEach((opacity, index) => {
    wrapper.style.setProperty(
      `--glow-color${suffixes[index]}`,
      `hsl(${hsl} / ${Math.min(opacity * intensity, 100)}%)`
    );
  });
}

function setBeliefGlowVars(wrapper, tile) {
  const isDark = tile.classList.contains("belief-tile-dark") || tile.classList.contains("belief-tile-hero");
  const isAccent = tile.classList.contains("belief-tile-accent");
  const hsl = isAccent ? "4deg 82% 68%" : isDark ? "184deg 38% 58%" : "184deg 38% 47%";

  wrapper.style.setProperty("--card-bg", isDark ? "#101312" : "rgba(251, 250, 247, 0.72)");
  wrapper.style.setProperty("--edge-sensitivity", "21");
  wrapper.style.setProperty("--border-radius", tile.classList.contains("belief-tile-hero") ? "28px" : "26px");
  wrapper.style.setProperty("--glow-padding", tile.classList.contains("belief-tile-education") ? "24px" : "30px");
  wrapper.style.setProperty("--cone-spread", "17");
  wrapper.style.setProperty("--fill-opacity", isDark ? "0.22" : "0.14");
  setBeliefGlowColor(wrapper, hsl, isDark ? 0.86 : 0.7);

  Object.entries(BELIEF_GLOW_GRADIENTS).forEach(([property, value]) => {
    wrapper.style.setProperty(property, value);
  });
}

function getBeliefGlowVariant(tile) {
  if (tile.classList.contains("belief-tile-hero")) return "is-hero";
  if (tile.classList.contains("belief-tile-wide")) return "is-wide";
  if (tile.classList.contains("belief-tile-accent")) return "is-accent";
  if (tile.classList.contains("belief-tile-ship")) return "is-ship";
  if (tile.classList.contains("belief-tile-dark")) return "is-dark";
  if (tile.classList.contains("belief-tile-education")) return "is-education";
  return "";
}

function updateBeliefGlowPointer(wrapper, event) {
  const rect = wrapper.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const dx = x - cx;
  const dy = y - cy;
  const kx = dx === 0 ? Infinity : cx / Math.abs(dx);
  const ky = dy === 0 ? Infinity : cy / Math.abs(dy);
  const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
  let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

  if (angle < 0) {
    angle += 360;
  }

  wrapper.style.setProperty("--edge-proximity", `${(edge * 100).toFixed(3)}`);
  wrapper.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
}

function mountBeliefBorderGlow() {
  if (!window.matchMedia?.(DESKTOP_QUERY).matches) {
    return;
  }

  const beliefBoard = document.querySelector("[data-grid-fourth-v2]");

  if (!beliefBoard || beliefBoard.classList.contains("is-border-glow-ready")) {
    return;
  }

  Array.from(beliefBoard.querySelectorAll(":scope > .belief-tile")).forEach((tile) => {
    const wrapper = document.createElement("div");
    const variant = getBeliefGlowVariant(tile);
    const edgeLight = document.createElement("span");
    const inner = document.createElement("div");

    wrapper.className = `border-glow-card belief-border-glow-card${variant ? ` ${variant}` : ""}`;
    edgeLight.className = "edge-light";
    inner.className = "border-glow-inner";
    setBeliefGlowVars(wrapper, tile);

    wrapper.addEventListener("pointermove", (event) => updateBeliefGlowPointer(wrapper, event));
    beliefBoard.insertBefore(wrapper, tile);
    wrapper.append(edgeLight, inner);
    inner.appendChild(tile);
  });

  beliefBoard.classList.add("is-border-glow-ready");
}

function mountHeroEnhancements() {
  mountHeroSoftAurora();
  mountHeroTiltedCard();
  mountBeliefBorderGlow();
  mountGradientAccents();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountHeroEnhancements, { once: true });
} else {
  mountHeroEnhancements();
}
