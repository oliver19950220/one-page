const navigationEntry = window.performance && window.performance.getEntriesByType
  ? window.performance.getEntriesByType("navigation")[0]
  : null;
const shouldResetScrollOnReload = navigationEntry && navigationEntry.type === "reload" && !window.location.hash;

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

if (shouldResetScrollOnReload) {
  window.scrollTo(0, 0);
  window.addEventListener("load", () => {
    window.requestAnimationFrame(() => window.scrollTo(0, 0));
  });
}

const translations = {
  zh: {
    navWork: "项目",
    navTimeline: "经历",
    navMethod: "价值观",
    navContact: "联系",
    heroEyebrow: "AI PRODUCT MANAGER / PRODUCT TO COMMERCIALIZATION",
    heroTitle: "把 AI<br>做成产品<br>跑通商业化",
    heroSubtitle: "高级 AI 产品经理。带过产品团队，做过商业化验证，也从创业现场走过 0-1。",
    heroTagOne: "产品 Owner",
    heroTagTwo: "商业化背景",
    heroTagThree: "创业经历",
    ctaChat: "预约交流",
    ctaCall: "拨打电话",
    ctaWechat: "添加微信",
    ctaResume: "查看简历",
    metricUsersValue: "Agent 0-1",
    metricLtvValue: "商业化验证",
    metricAdoptionValue: "Agent 效果重构",
    metricCostValue: "复杂工作流搭建",
    metricUsers: "代表成果 01",
    metricLtv: "代表成果 02",
    metricAdoption: "代表成果 03",
    metricCost: "代表成果 04",
    metricUsersNote: "将建站 Agent、数字员工、运营洞察从概念推进到 MVP / 上线。",
    metricLtvNote: "参与 Wegic 套餐、权益、支付触点设计，验证付费路径。",
    metricAdoptionNote: "基于模型能力提升，完成 Wegic 生成效果优化重构，提升建站结果质量与可控性。",
    metricCostNote: "在 Authing 搭建身份编排低代码工作流，将 KA 交付人力成本降低 30%。",
    capKicker: "CAPABILITIES",
    capTitle: "核心能力",
    capOneSignal: "DISCOVER",
    capOneTitle: "PMF 判断与场景定义",
    capOneBody: "能从模糊需求里拆出真实用户、核心场景和优先级，判断一个 AI 产品该先验证什么、先交付什么。",
    capOneProof: "用户研究 / 场景拆解 / Roadmap / PMF 判断",
    capTwoSignal: "AGENT",
    capTwoTitle: "Agent 体验设计优化",
    capTwoBody: "能把 AI 的生成、规划、反馈和编辑链路产品化，让用户从“试试看”走向“真的用”。",
    capTwoProof: "Agent Flow / Prompt Strategy / 体验评估 / 生成优化",
    capThreeSignal: "BUSINESS",
    capThreeTitle: "建立商业闭环",
    capThreeBody: "能把产品价值、套餐权益、支付触点和留存路径连起来，让 AI 产品具备清晰的付费理由。",
    capThreeProof: "Pricing / Payment / Entitlement / Retention",
    workKicker: "SELECTED WORK",
    workTitle: "代表项目",
    wegicTitle: "对话式 AI 建站 Agent",
    wegicRole: "产研一组 Owner，主导 Roadmap、生成体验、AI Form / Payment 等核心能力，验证从建站到付费的闭环。",
    chipPayment: "Payment / AI Form",
    chipWegicOne: "PH 日 / 周 / 月榜第一",
    chipWegicTwo: "冷启动 50W+ 注册",
    chipWegicThree: "LTV +206%",
    chipAuthingOne: "身份编排 0-1 上线",
    chipAuthingTwo: "KA 交付成本 -30%",
    chipAuthingThree: "员工 / 管理双端优化",
    chipBaiduOne: "AARRR 模型搭建",
    chipBaiduTwo: "社媒洞察数字员工 MVP",
    chipBaiduThree: "营销场景定义",
    viewProduct: "查看产品",
    discussCase: "聊这个案例",
    authingTitle: "身份自动化低代码编排平台",
    authingRole: "负责 IDaaS 产品线，主导低代码身份编排能力 0-1 搭建，并支撑头部 KA 客户交付。",
    baiduTitle: "AI 营销数字员工",
    baiduRole: "负责智能营销数字员工用增方向，搭建 AARRR 模型，推进社媒洞察等营销场景从定义到 MVP。",
    chipGrowth: "用增",
    workflosTitle: "从单点登录到 AI SaaS 搜索，探索企业软件管理的新入口",
    workflosRole: "联合创始人 / 产品，负责 SaaS 管理平台 0-1 核心功能设计与冷启，主导 SSO、应用访问权限控制等 MVP 能力。",
    timelineKicker: "EXPERIENCE",
    timelineTitle: "工作经历",
    timelineIntro: "",
    currentStatusLabel: "Advisory",
    currentStatusBody: "AI 产品顾问，初创出海团队",
    expConsultantTitle: "AI 产品顾问，知名初创出海团队",
    expConsultantBody: "当前兼职，提供 AI 产品方向咨询。",
    expBaiduTitle: "百度智能云，AI 产品经理（高级）",
    expBaiduBody: "负责智能营销数字员工的用户增长方向，搭建 AARRR 模型，并推进社媒洞察类数字员工从 One-pager 到 MVP。",
    expWegicTitle: "北京雪云锐创科技有限公司，Wegic / 即时设计，产研一组 Owner",
    expWegicBody: "负责产品策略、体验优化、用户研究与 Roadmap；推动 AI Form、Payment 等核心建站能力上线，并主导 Agent 生成策略优化和 0-1 商业化、裂变策略。",
    expWorkflosTitle: "Workflos.ai，联合创始人 / 产品",
    expWorkflosBody: "负责 SaaS 管理平台 0-1 核心功能设计与冷启，主导 SSO、应用访问权限控制等 MVP 能力，并用 14W+ SaaS 数据与 AI SaaS 搜索优化注册路径。",
    expAuthingTitle: "Authing，产品经理",
    expAuthingBody: "负责 IDaaS B2E 产品线，主导低代码身份编排平台 0-1 搭建，优化员工端与 IT 管理员端核心体验，并支撑多个头部 KA 客户交付。",
    methodKicker: "PRODUCT BELIEF",
    methodTitle: "产品价值观：保持好奇，也保持用户感",
    methodOne: "先问用户要完成什么，再决定 AI 应该做什么。",
    methodTwo: "把“感觉不对”拆成可以观察、可以验证的信号。",
    methodThree: "不迷恋 Demo，把产品推进到真实使用现场。",
    methodFour: "用真实结果校准判断，而不是靠自我感动。",
    aboutKicker: "ABOUT",
    aboutTitle: "把 AI 产品做得更少一点，也更有用一点",
    aboutBody: "成都人，英文名 Oliver。从 IDaaS、SaaS 到 AI Agent，一直在做 0-1 产品。我习惯先回到真实用户和真实任务，再把复杂问题拆成能上线、能验证的产品闭环。",
    educationTitle: "教育经历",
    contactKicker: "CONTACT",
    contactTitle: "联系 Oliver",
    contactBody: "聊 AI 产品、Agent 体验、商业化验证，或安排一次面试，可以直接联系我。",
    contactCallLine: "拨打电话 / 15198284173",
    contactWechatLine: "添加微信 / 扫码交流",
    contactEmailLine: "发送邮件 / 1619698312@qq.com",
    contactResumeLine: "查看简历 / PDF",
    contactPassLabel: "ACCESS CODE",
    contactPassBody: "扫码添加微信，备注“AI 产品交流”或“面试”。",
    emailLabel: "邮箱",
    phoneLabel: "电话",
    copyEmail: "复制",
    copyPhone: "复制",
    wechatLabel: "微信",
    wechatAction: "查看二维码",
    resumeLabel: "简历",
    resumeAction: "打开 PDF",
    wechatModalTitle: "添加微信",
    wechatModalBody: "扫码添加我，备注“AI 产品交流”或“面试”。",
    copied: "已复制"
  },
  en: {
    navWork: "Work",
    navTimeline: "Experience",
    navMethod: "Belief",
    navContact: "Contact",
    heroEyebrow: "AI PRODUCT MANAGER / PRODUCT TO COMMERCIALIZATION",
    heroTitle: "Build<br>AI Products<br>That Monetize",
    heroSubtitle: "Senior AI Product Manager with team ownership, commercialization validation, and 0-1 startup experience.",
    heroTagOne: "Product Owner",
    heroTagTwo: "Commercialization",
    heroTagThree: "Startup Builder",
    ctaChat: "Book a Call",
    ctaCall: "Call Me",
    ctaWechat: "WeChat",
    ctaResume: "View Resume",
    metricUsersValue: "Agent 0-1",
    metricLtvValue: "Monetization Validation",
    metricAdoptionValue: "Agent Rebuild",
    metricCostValue: "Workflow Build",
    metricUsers: "Selected Result 01",
    metricLtv: "Selected Result 02",
    metricAdoption: "Selected Result 03",
    metricCost: "Selected Result 04",
    metricUsersNote: "Moved website agents, digital employees, and operational insight products from concept toward MVP / launch.",
    metricLtvNote: "Worked on Wegic packages, entitlements, and payment touchpoints to validate paid paths.",
    metricAdoptionNote: "Rebuilt Wegic generation quality as model capability improved, making website output stronger and more controllable.",
    metricCostNote: "Built Authing low-code identity orchestration workflows and reduced KA delivery labor cost by 30%.",
    capKicker: "CAPABILITIES",
    capTitle: "Core Capabilities",
    capOneSignal: "DISCOVER",
    capOneTitle: "PMF Judgment & Scenario Definition",
    capOneBody: "Turn fuzzy needs into real users, core scenarios, and priorities, then decide what an AI product should validate and ship first.",
    capOneProof: "User Research / Scenario Mapping / Roadmap / PMF Judgment",
    capTwoSignal: "AGENT",
    capTwoTitle: "Agent Experience Design & Optimization",
    capTwoBody: "Productize AI generation, planning, feedback, and editing flows so users move from trying it to actually using it.",
    capTwoProof: "Agent Flow / Prompt Strategy / Experience Evaluation / Generation Optimization",
    capThreeSignal: "BUSINESS",
    capThreeTitle: "Build Business Loops",
    capThreeBody: "Connect product value, package benefits, payment moments, and retention paths so an AI product has a clear reason to pay.",
    capThreeProof: "Pricing / Payment / Entitlement / Retention",
    workKicker: "SELECTED WORK",
    workTitle: "Selected Work",
    wegicTitle: "Conversational AI website-building Agent",
    wegicRole: "Product & R&D Group Owner for roadmap, generation experience, AI Form / Payment, and the loop from website creation to paid value.",
    chipPayment: "Payment / AI Form",
    chipWegicOne: "PH daily / weekly / monthly #1",
    chipWegicTwo: "500K+ cold-start signups",
    chipWegicThree: "LTV +206%",
    chipAuthingOne: "0-1 identity orchestration",
    chipAuthingTwo: "KA delivery cost -30%",
    chipAuthingThree: "Employee / admin UX optimized",
    chipBaiduOne: "AARRR model built",
    chipBaiduTwo: "Social insight digital employee MVP",
    chipBaiduThree: "Marketing scenario definition",
    viewProduct: "View Product",
    discussCase: "Discuss Case",
    authingTitle: "Low-code identity automation platform",
    authingRole: "Owned IDaaS product work, led 0-1 low-code identity orchestration, and supported key account delivery.",
    baiduTitle: "AI marketing digital employees",
    baiduRole: "Owned growth work for intelligent marketing digital employees, built the AARRR model, and moved social insight scenarios from definition to MVP.",
    chipGrowth: "Growth",
    workflosTitle: "Exploring a new enterprise software management entry point through SSO and AI SaaS search",
    workflosRole: "Co-founder / Product, responsible for 0-1 core feature design and cold start of a SaaS management platform, including SSO and app access control.",
    timelineKicker: "EXPERIENCE",
    timelineTitle: "Experience",
    timelineIntro: "",
    currentStatusLabel: "Advisory",
    currentStatusBody: "AI Product Consultant, early-stage global startup team",
    expConsultantTitle: "AI Product Consultant, early-stage global startup team",
    expConsultantBody: "Part-time advisory role for AI product direction.",
    expBaiduTitle: "Baidu AI Cloud, Senior AI Product Manager",
    expBaiduBody: "Owned intelligent marketing digital employee growth: AARRR model and social media insight digital employee from one-pager toward MVP.",
    expWegicTitle: "Snow Cloud / Wegic & JsDesign, Product & R&D Group Owner",
    expWegicBody: "Owned strategy, experience optimization, user research, and roadmap; shipped AI Form, Payment, and other core capabilities; led Agent generation optimization and 0-1 commercialization/growth.",
    expWorkflosTitle: "Workflos.ai, Co-founder / Product",
    expWorkflosBody: "Led 0-1 core feature design and cold start for a SaaS management platform, including SSO and app access control; used 140K+ SaaS data and AI SaaS search to improve registration flow.",
    expAuthingTitle: "Authing, Product Manager",
    expAuthingBody: "Owned IDaaS B2E product work, led 0-1 low-code identity orchestration, improved employee and IT admin journeys, and supported multiple KA deliveries.",
    methodKicker: "PRODUCT BELIEF",
    methodTitle: "Product belief: stay curious, stay close to users",
    methodOne: "Ask what users need to finish before deciding what AI should do.",
    methodTwo: "Turn vague friction into observable and testable signals.",
    methodThree: "Do not stop at demos; move products into real usage.",
    methodFour: "Calibrate judgment with real outcomes, not self-conviction.",
    aboutKicker: "ABOUT",
    aboutTitle: "Make AI products a little simpler, and a lot more useful",
    aboutBody: "Chengdu-based, known as Oliver. Across IDaaS, SaaS, and AI Agents, I have worked on 0-1 products. I tend to start from real users and real jobs, then turn complex problems into product loops that can ship and be validated.",
    educationTitle: "Education",
    contactKicker: "CONTACT",
    contactTitle: "Contact Oliver",
    contactBody: "For AI products, agent experience, commercialization validation, or senior PM interviews, contact me directly.",
    contactCallLine: "Call Oliver / 15198284173",
    contactWechatLine: "Add WeChat / scan to talk",
    contactEmailLine: "Send email / 1619698312@qq.com",
    contactResumeLine: "View resume / PDF",
    contactPassLabel: "ACCESS CODE",
    contactPassBody: "Scan to add me on WeChat. Mention AI product chat or interview.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    copyEmail: "Copy",
    copyPhone: "Copy",
    wechatLabel: "WeChat",
    wechatAction: "Show QR",
    resumeLabel: "Resume",
    resumeAction: "Open PDF",
    wechatModalTitle: "WeChat",
    wechatModalBody: "Scan to add me. Mention AI product chat or interview.",
    copied: "Copied"
  }
};

let currentLang = "zh";
const langButton = document.querySelector("[data-lang-toggle]");
const modal = document.querySelector("[data-wechat-modal]");
const toast = document.querySelector("[data-toast]");
let toastTimer;

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  langButton.textContent = lang === "zh" ? "EN" : "中文";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    node.innerHTML = translations[lang][key];
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 1800);
}

function copyText(value) {
  if (!navigator.clipboard) {
    showToast(value);
    return;
  }
  navigator.clipboard.writeText(value).then(() => {
    showToast(translations[currentLang].copied);
  });
}

langButton.addEventListener("click", () => {
  setLanguage(currentLang === "zh" ? "en" : "zh");
});

document.querySelectorAll("[data-open-wechat]").forEach((button) => {
  button.addEventListener("click", () => {
    modal.hidden = false;
  });
});

document.querySelector("[data-close-wechat]").addEventListener("click", () => {
  modal.hidden = true;
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.hidden = true;
  }
});

document.querySelector('a[href="mailto:1619698312@qq.com"]').addEventListener("contextmenu", () => {
  copyText("1619698312@qq.com");
});

document.querySelector('a[href="tel:15198284173"]').addEventListener("contextmenu", () => {
  copyText("15198284173");
});

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", () => {
    copyText(button.dataset.copy);
  });
});

const horizontalWork = document.querySelector("[data-horizontal-work]");
const workTrack = document.querySelector("[data-work-track]");

if (horizontalWork && workTrack) {
  const workCards = Array.from(workTrack.querySelectorAll(".work-panel"));
  const deckHudCurrent = horizontalWork.querySelector("[data-deck-current]");
  const deckHudLabel = horizontalWork.querySelector("[data-deck-label]");
  const deckHudProgress = horizontalWork.querySelector("[data-deck-progress]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-active", entry.isIntersecting);
    });
  }, { rootMargin: "0px 0px -18% 0px", threshold: 0.08 });

  workCards.forEach((card) => observer.observe(card));

  const useDeck = window.matchMedia("(min-width: 1081px)");
  const formatDeckIndex = (index) => String(index + 1).padStart(2, "0");
  const deckLabels = ["Wegic / AI Website Builder", "Authing / IDaaS", "Baidu AI Cloud / Marketing AI"];

  const updateDeckHud = (progress = 0) => {
    const raw = progress * workCards.length;
    const currentIndex = Math.min(workCards.length - 1, Math.floor(raw));
    const localProgress = Math.min(Math.max(raw - currentIndex, 0), 1);

    if (deckHudCurrent) {
      deckHudCurrent.textContent = formatDeckIndex(currentIndex);
    }

    if (deckHudLabel) {
      deckHudLabel.textContent = deckLabels[currentIndex] || deckLabels[0];
    }

    if (deckHudProgress) {
      deckHudProgress.style.width = `${((currentIndex + localProgress) / workCards.length) * 100}%`;
    }
  };

  updateDeckHud(0);

  const setupFallbackDeck = () => {
    workCards.forEach((card) => {
      card.style.removeProperty("transform");
      card.style.removeProperty("opacity");
      card.style.removeProperty("z-index");
      card.style.removeProperty("--next-peek");
    });
  };

  if (window.gsap && window.ScrollTrigger && useDeck.matches) {
    window.gsap.registerPlugin(window.ScrollTrigger);

    window.gsap.set(workCards, {
      y: () => window.innerHeight,
      x: 0,
      rotation: 0,
      rotationX: 0,
      scale: 1,
      opacity: 1,
      zIndex: (index) => index + 1,
      transformPerspective: 1200,
      transformOrigin: "center center",
    });

    window.gsap.set(workCards[0], { y: 0 });

    const holdDuration = 1.15;
    const transitionDuration = 1.25;
    const scrollLength = workCards.length * 1.75;

    const deckTimeline = window.gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: horizontalWork,
        start: "top top",
        end: () => `+=${window.innerHeight * scrollLength}`,
        pin: horizontalWork.querySelector(".work-pin"),
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          updateDeckHud(self.progress);
        },
      },
    });

    workCards.slice(1).forEach((card, index) => {
      const previousCard = workCards[index];

      deckTimeline
        .to(previousCard, {
          "--next-peek": 1,
          duration: holdDuration,
        })
        .to(card, {
          y: 0,
          z: 0,
          rotation: 0,
          rotationX: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: transitionDuration,
        })
        .to(previousCard, {
          x: -180,
          y: -window.innerHeight * 0.18,
          z: -180,
          rotation: -4,
          rotationX: 8,
          scale: 0.88,
          opacity: 0.64,
          filter: "blur(2px)",
          duration: transitionDuration,
        }, "<");
    });

    deckTimeline.to(workCards[workCards.length - 1], {
      "--next-peek": 0,
      duration: holdDuration,
    });

    window.ScrollTrigger.create({
      trigger: horizontalWork,
      start: "top bottom",
      end: "bottom top",
      onLeaveBack: () => {
        workCards.forEach((card, index) => {
          window.gsap.set(card, {
            y: index === 0 ? 0 : window.innerHeight,
            x: 0,
            z: 0,
            rotation: 0,
            rotationX: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            zIndex: index + 1,
          });
        });
      },
    });
  } else {
    horizontalWork.classList.add("is-static-deck");
    setupFallbackDeck();
  }
}

const beliefSection = document.querySelector("[data-belief-section]");
const beliefGrid = beliefSection ? beliefSection.querySelector("[data-grid-fourth-v2]") : null;
const beliefTiles = beliefGrid ? Array.from(beliefGrid.querySelectorAll(".grid__img")) : [];

if (beliefSection && beliefGrid && beliefTiles.length && window.matchMedia("(min-width: 821px)").matches) {
  const calculateInitialTransform = (element, offsetDistance = 250, maxRotation = 300, maxZTranslation = 2000) => {
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;
    const elementRect = element.getBoundingClientRect();
    const elementCenterX = elementRect.left + elementRect.width / 2;
    const elementCenterY = elementRect.top + elementRect.height / 2;
    const angle = Math.atan2(Math.abs(viewportCenterY - elementCenterY), Math.abs(viewportCenterX - elementCenterX));
    const translateX = Math.abs(Math.cos(angle) * offsetDistance);
    const translateY = Math.abs(Math.sin(angle) * offsetDistance);
    const maxDistance = Math.sqrt(viewportCenterX ** 2 + viewportCenterY ** 2);
    const currentDistance = Math.sqrt((viewportCenterX - elementCenterX) ** 2 + (viewportCenterY - elementCenterY) ** 2);
    const distanceFactor = currentDistance / maxDistance;

    return {
      x: elementCenterX < viewportCenterX ? -translateX : translateX,
      y: elementCenterY < viewportCenterY ? -translateY : translateY,
      z: -distanceFactor * maxZTranslation,
      rotationX: elementCenterY < viewportCenterY ? maxRotation * distanceFactor : -maxRotation * distanceFactor,
      rotationY: elementCenterX < viewportCenterX ? -maxRotation * distanceFactor : maxRotation * distanceFactor
    };
  };

  const getBeliefStartState = (tile) => {
    const position = calculateInitialTransform(tile, 980);
    const depth = calculateInitialTransform(tile, 220, -260, -3200);

    return {
      x: position.x,
      y: position.y,
      z: depth.z - 520,
      rotationX: depth.rotationX * 0.26,
      rotationY: depth.rotationY * 0.26
    };
  };

  let beliefAnimations = [];
  const playNativeBeliefFormation = () => {
    beliefAnimations.forEach((animation) => animation.cancel());
    beliefAnimations = [];

    beliefTiles.forEach((tile, index) => {
      const start = getBeliefStartState(tile);
      const fromTransform = [
        `translate3d(${start.x}px, ${start.y}px, ${start.z}px)`,
        `rotateX(${start.rotationX}deg)`,
        `rotateY(${start.rotationY}deg)`,
        "scale(0.52)"
      ].join(" ");

      const delay = Math.abs(index - (beliefTiles.length - 1) / 2) * 72 + index * 34;

      tile.style.opacity = "0";
      tile.style.transform = fromTransform;
      tile.style.filter = "blur(18px)";

      const animation = tile.animate([
        {
          opacity: 0,
          transform: fromTransform,
          filter: "blur(18px)"
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1)",
          filter: "blur(0px)"
        }
      ], {
        duration: 1180,
        delay,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "forwards"
      });

      beliefAnimations.push(animation);

      animation.finished.then(() => {
        tile.style.opacity = "";
        tile.style.transform = "";
        tile.style.filter = "";
      }).catch(() => {});
    });
  };

  const resetBeliefFormation = () => {
    beliefAnimations.forEach((animation) => animation.cancel());
    beliefAnimations = [];
    beliefTiles.forEach((tile) => {
      tile.style.opacity = "";
      tile.style.transform = "";
      tile.style.filter = "";
    });
  };

  if ("IntersectionObserver" in window) {
    const beliefObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playNativeBeliefFormation();
        } else if (entry.boundingClientRect.top > window.innerHeight || entry.boundingClientRect.bottom < 0) {
          resetBeliefFormation();
        }
      });
    }, {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px"
    });

    beliefObserver.observe(beliefSection);
  } else {
    window.setTimeout(playNativeBeliefFormation, 240);
  }
}

setLanguage(currentLang);

if (window.ScrollTrigger) {
  window.requestAnimationFrame(() => {
    window.ScrollTrigger.refresh();
    if (shouldResetScrollOnReload) {
      window.scrollTo(0, 0);
    }
  });
}
