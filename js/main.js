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
    heroSubtitle: "高级 AI 产品经理。带过产品团队，做过商业化验证，也创业做过 0-1。",
    heroTagOne: "产品 Owner",
    heroTagTwo: "商业化背景",
    heroTagThree: "创业经历",
    ctaChat: "预约交流",
    ctaCall: "拨打电话",
    ctaWechat: "添加微信",
    ctaResume: "查看简历",
    metricUsersValue: "Agent 从 0-1 上线，拿下 PH 榜首",
    metricLtvValue: "跑通付费路径，LTV 提升 206%",
    metricAdoptionValue: "重构 AI 生成效果，采纳率提升 40%",
    metricCostValue: "上线工作流 MVP，交付成本降低 30%",
    metricUsers: "代表成果 01",
    metricLtv: "代表成果 02",
    metricAdoption: "代表成果 03",
    metricCost: "代表成果 04",
    metricUsersNote: "推动 Wegic 建站 Agent 从 0 到 1 上线，并拿下 Product Hunt 日 / 周 / 月榜第一。",
    metricLtvNote: "参与 Wegic 套餐、权益、支付触点设计，将 LTV 提升 206%。",
    metricAdoptionNote: "基于模型能力提升，完成 Wegic Agent 生成效果重构。",
    metricCostNote: "在 Authing 搭建身份编排低代码工作流产品，将 KA 交付人力成本降低 30%。",
    capKicker: "CAPABILITIES",
    capTitle: "核心能力",
    capOneSignal: "AI NATIVE",
    capOneTitle: "AI 原生",
    capOneBody: "用 Typeless 加 Codex 梳理需求和 PRD，并完成前端的设计、交互验证与页面迭代，把想法更快地推到线上。",
    capOneProof: "Typeless / PRD / Codex / Frontend Design",
    capTwoSignal: "DISCOVER",
    capTwoTitle: "PMF 判断与场景定义",
    capTwoBody: "能从模糊需求里拆出真实用户、核心场景和优先级，判断一个 AI 产品该先验证什么、先交付什么。",
    capTwoProof: "用户研究 / 场景拆解 / Roadmap / PMF 判断",
    capThreeSignal: "AGENT",
    capThreeTitle: "Agent 体验设计优化",
    capThreeBody: "抽象用户输入输出定义，建立测试集，并持续优化 Agent 的生成、规划、反馈和编辑体验。",
    capThreeProof: "Agent Flow / Prompt Strategy / 体验评估 / 生成优化",
    capFourSignal: "BUSINESS",
    capFourTitle: "建立商业闭环",
    capFourBody: "能基于当前产品的商业化目标，设计定价模型和支付转化路径，支撑产品完成商业化验证。",
    capFourProof: "Pricing / Payment / Entitlement / Retention",
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
    methodTitle: "保持好奇，面向真实用户做产品",
    methodOneTitle: "Less is More",
    methodOneBody: "不是少做，而是把复杂问题拆到足够清楚，先抓住最关键的用户任务。",
    methodTwoTitle: "真实用户 > 技术自嗨",
    methodTwoBody: "AI 能力很重要，但产品判断要回到用户为什么用、怎么用、会不会继续用。",
    methodThreeTitle: "慢思考，快验证",
    methodThreeBody: "重要决策先想清楚，再用小步实验、数据和反馈校准判断。",
    methodFourTitle: "We are a team",
    methodFourBody: "产品不是单点英雄主义，好的产品来自团队一起面对问题、拆解问题、解决问题。",
    aboutKicker: "ABOUT",
    aboutTitle: "为真实场景去做 AI 产品",
    aboutBody: "我喜欢新技术，也愿意追 AI 的变化。但做产品时，我更在意它最后有没有被真实用户用起来。需求、交互、Prompt、Agent 链路、商业化设计，最后都要回到真实场景、真实反馈和真实结果。",
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
    metricUsersValue: "Launched 0-1 Agent, reached PH #1",
    metricLtvValue: "Validated paid path, lifted LTV 206%",
    metricAdoptionValue: "Rebuilt AI generation, lifted adoption 40%",
    metricCostValue: "Launched workflow MVP, cut delivery cost 30%",
    metricUsers: "Selected Result 01",
    metricLtv: "Selected Result 02",
    metricAdoption: "Selected Result 03",
    metricCost: "Selected Result 04",
    metricUsersNote: "Launched Wegic's website-building Agent from 0 to 1 and reached Product Hunt #1.",
    metricLtvNote: "Worked on Wegic packages, entitlements, and payment touchpoints, lifting LTV by 206%.",
    metricAdoptionNote: "Rebuilt Wegic Agent generation after model upgrades, increasing adoption by 40%.",
    metricCostNote: "Built a low-code identity orchestration workflow MVP at Authing, reducing KA delivery labor cost by 30%.",
    capKicker: "CAPABILITIES",
    capTitle: "Core Capabilities",
    capOneSignal: "AI NATIVE",
    capOneTitle: "AI-native",
    capOneBody: "Use Typeless and Codex to shape requirements and PRDs, then complete frontend design, interaction validation, and page iteration to ship ideas faster.",
    capOneProof: "Typeless / PRD / Codex / Frontend Design",
    capTwoSignal: "DISCOVER",
    capTwoTitle: "PMF Judgment & Scenario Definition",
    capTwoBody: "Turn fuzzy needs into real users, core scenarios, and priorities, then decide what an AI product should validate and ship first.",
    capTwoProof: "User Research / Scenario Mapping / Roadmap / PMF Judgment",
    capThreeSignal: "AGENT",
    capThreeTitle: "Agent Experience Design & Optimization",
    capThreeBody: "Define user inputs and outputs, build evaluation sets, and keep optimizing Agent generation, planning, feedback, and editing experiences.",
    capThreeProof: "Agent Flow / Prompt Strategy / Experience Evaluation / Generation Optimization",
    capFourSignal: "BUSINESS",
    capFourTitle: "Build Business Loops",
    capFourBody: "Design pricing models and payment conversion paths around the product's commercialization goals, helping the product complete business validation.",
    capFourProof: "Pricing / Payment / Entitlement / Retention",
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
    methodTitle: "Stay curious, build for real users",
    methodOneTitle: "Less is More",
    methodOneBody: "Break complex problems down until the key user job is clear.",
    methodTwoTitle: "Real Users > Tech Vanity",
    methodTwoBody: "AI capability matters, but product judgment starts from why users use it, how they use it, and whether they keep using it.",
    methodThreeTitle: "Think Slowly, Validate Fast",
    methodThreeBody: "Clarify important decisions first, then calibrate judgment through small experiments, data, and feedback.",
    methodFourTitle: "We Are a Team",
    methodFourBody: "Good products are not individual heroism; they come from teams facing, breaking down, and solving problems together.",
    aboutKicker: "ABOUT",
    aboutTitle: "Build AI products for real scenarios",
    aboutBody: "I enjoy new technology and keep following how AI changes. But when building products, I care more about whether real users actually use them. Requirements, interaction, prompts, agent flows, and commercialization all need to return to real scenarios, real feedback, and real outcomes.",
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

const initMobileResultRail = () => {
  const resultRail = document.querySelector("[data-mobile-result-rail]");

  if (!resultRail || !("IntersectionObserver" in window)) {
    return;
  }

  const resultItems = Array.from(resultRail.querySelectorAll(".proof-item"));

  if (!resultItems.length) {
    return;
  }

  const setActiveResult = (activeItem) => {
    resultItems.forEach((item) => {
      item.classList.toggle("is-active", item === activeItem);
    });
  };

  const resultObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      setActiveResult(entry.target);
    });
  }, {
    threshold: 0.54,
    rootMargin: "-22% 0px -42% 0px"
  });

  resultItems.forEach((item) => resultObserver.observe(item));
  setActiveResult(resultItems[0]);
};

initMobileResultRail();

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

  const useDeck = window.matchMedia("(min-width: 1181px)");
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

  const setupFallbackDeck = (options = {}) => {
    const { clearActive = false } = options;

    workCards.forEach((card) => {
      if (clearActive) {
        card.classList.remove("is-active");
      }
      card.style.removeProperty("transform");
      card.style.removeProperty("opacity");
      card.style.removeProperty("z-index");
      card.style.removeProperty("filter");
      card.style.removeProperty("pointer-events");
      card.style.removeProperty("--next-peek");
      card.style.removeProperty("translate");
      card.style.removeProperty("rotate");
      card.style.removeProperty("scale");
      card.removeAttribute("aria-hidden");
    });
  };

  let activeWorkMode = "";
  let deckTimeline = null;
  let deckResetTrigger = null;
  let mobileCleanup = null;
  let workResizeTimer = null;

  const observeWorkCards = () => {
    workCards.forEach((card) => observer.observe(card));
  };

  const isWorkSectionVisible = () => {
    const rect = horizontalWork.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.82 && rect.bottom > window.innerHeight * 0.18;
  };

  const killDesktopDeck = () => {
    if (deckTimeline) {
      if (deckTimeline.scrollTrigger) {
        deckTimeline.scrollTrigger.kill(true);
      }
      deckTimeline.kill();
      deckTimeline = null;
    }

    if (deckResetTrigger) {
      deckResetTrigger.kill(true);
      deckResetTrigger = null;
    }

    if (window.ScrollTrigger) {
      const workPin = horizontalWork.querySelector(".work-pin");

      window.ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === horizontalWork || trigger.pin === workPin) {
          trigger.kill(true);
        }
      });
    }
  };

  const resetWorkModeState = () => {
    killDesktopDeck();

    if (mobileCleanup) {
      mobileCleanup();
      mobileCleanup = null;
    }

    observer.disconnect();
    horizontalWork.classList.remove("is-static-deck", "is-mobile-stack", "is-mobile-pinned", "is-mobile-released");
    horizontalWork.style.removeProperty("--mobile-stack-count");
    horizontalWork.style.removeProperty("--mobile-stack-height");
    [
      horizontalWork.querySelector(".work-pin"),
      horizontalWork.querySelector(".work-stage"),
      workTrack
    ].forEach((element) => {
      if (element) {
        element.removeAttribute("style");
      }
    });
    horizontalWork.querySelectorAll(".mobile-stack-dots, .mobile-stack-indicator").forEach((element) => {
      element.remove();
    });
    setupFallbackDeck({ clearActive: true });
    updateDeckHud(0);
  };

  const setupMobileCardStack = () => {
    const useMobileStack = window.matchMedia("(max-width: 820px)");

    if (!useMobileStack.matches || workCards.length < 2) {
      return null;
    }

    horizontalWork.classList.add("is-mobile-stack");
    observer.disconnect();

    horizontalWork.querySelectorAll(".mobile-stack-dots, .mobile-stack-indicator").forEach((element) => {
      element.remove();
    });

    const indicator = document.createElement("div");
    indicator.className = "mobile-stack-indicator";
    indicator.setAttribute("aria-hidden", "true");
    indicator.innerHTML = `
      <span class="mobile-stack-count"><span data-mobile-current>01</span><span>/</span><span data-mobile-total>${String(workCards.length).padStart(2, "0")}</span></span>
      <span class="mobile-stack-progress"><span data-mobile-progress></span></span>
      <span class="mobile-stack-hint">SCROLL</span>
    `;
    workTrack.insertAdjacentElement("afterend", indicator);

    let currentIndex = -1;
    const frameOffset = -30;
    const framesVisibleLength = 3;
    const scaleFactor = 0.08;
    const maxIndex = workCards.length - 1;
    const mobileStackLength = Math.max(2.55, workCards.length - 0.35);
    const currentLabel = indicator.querySelector("[data-mobile-current]");
    const progressBar = indicator.querySelector("[data-mobile-progress]");

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    horizontalWork.style.setProperty("--mobile-stack-count", String(workCards.length));
    horizontalWork.style.setProperty("--mobile-stack-height", `${mobileStackLength * 100}svh`);

    const renderStack = (visualIndex, progress = 0) => {
      const activeIndex = clamp(Math.round(progress * maxIndex), 0, maxIndex);

      if (activeIndex !== currentIndex) {
        currentIndex = activeIndex;
      }

      if (currentLabel) {
        currentLabel.textContent = String(currentIndex + 1).padStart(2, "0");
      }

      if (progressBar) {
        const barProgress = maxIndex === 0 ? 1 : progress;
        progressBar.style.width = `${clamp(barProgress, 0.06, 1) * 100}%`;
      }

      workCards.forEach((card, index) => {
        const offsetIndex = index - currentIndex;
        const isBehindCurrent = currentIndex > index;
        const scale = clamp(1 - Math.max(offsetIndex, 0) * scaleFactor, 0.82, 1);
        const y = clamp(offsetIndex * frameOffset, frameOffset * framesVisibleLength, 0);
        const opacity = isBehindCurrent ? 0 : 1;
        const blur = isBehindCurrent ? 2 : 0;
        const zIndex = workCards.length - Math.abs(offsetIndex);

        card.classList.toggle("is-active", index === currentIndex);
        card.setAttribute("aria-hidden", index === currentIndex ? "false" : "true");
        card.style.transform = `translateX(-50%) translateY(${y}px) scale(${scale})`;
        card.style.opacity = String(opacity);
        card.style.filter = `blur(${blur}px)`;
        card.style.zIndex = String(zIndex);
        card.style.pointerEvents = index === currentIndex ? "auto" : "none";
      });
    };

    const setActiveIndex = (nextIndex) => {
      const normalizedIndex = clamp(nextIndex, 0, maxIndex);

      if (normalizedIndex === currentIndex) {
        return;
      }

      currentIndex = normalizedIndex;
      renderStack(normalizedIndex, maxIndex === 0 ? 0 : normalizedIndex / maxIndex);
    };

    const getScrollProgress = () => {
      const rect = horizontalWork.getBoundingClientRect();
      const scrollableDistance = Math.max(horizontalWork.offsetHeight - window.innerHeight, 1);
      const sectionTop = window.scrollY + rect.top;
      return clamp((window.scrollY - sectionTop) / scrollableDistance, 0, 1);
    };

    const updateFromScroll = () => {
      const rect = horizontalWork.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const releaseTop = sectionTop + Math.max(horizontalWork.offsetHeight - window.innerHeight, 1);
      const progress = getScrollProgress();
      const visualIndex = progress * maxIndex;

      horizontalWork.classList.toggle("is-mobile-pinned", window.scrollY >= sectionTop && window.scrollY < releaseTop);
      horizontalWork.classList.toggle("is-mobile-released", window.scrollY >= releaseTop);
      renderStack(visualIndex, progress);
    };

    const handleStackKeydown = (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        setActiveIndex(currentIndex + 1);
        event.preventDefault();
      }

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        setActiveIndex(currentIndex - 1);
        event.preventDefault();
      }
    };

    workTrack.addEventListener("keydown", handleStackKeydown);
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    workTrack.setAttribute("tabindex", "0");
    setActiveIndex(0);
    window.requestAnimationFrame(updateFromScroll);

    return () => {
      workTrack.removeEventListener("keydown", handleStackKeydown);
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
      workTrack.removeAttribute("tabindex");
      indicator.remove();
      horizontalWork.classList.remove("is-mobile-stack", "is-mobile-pinned", "is-mobile-released");
      horizontalWork.style.removeProperty("--mobile-stack-count");
      horizontalWork.style.removeProperty("--mobile-stack-height");
      setupFallbackDeck({ clearActive: true });
    };
  };

  const setupDesktopDeck = () => {
    window.gsap.registerPlugin(window.ScrollTrigger);
    horizontalWork.classList.remove("is-static-deck", "is-mobile-stack", "is-mobile-pinned", "is-mobile-released");
    observeWorkCards();
    setupFallbackDeck({ clearActive: true });

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

    deckTimeline = window.gsap.timeline({
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

    deckResetTrigger = window.ScrollTrigger.create({
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

    window.ScrollTrigger.refresh();
  };

  const setupCompactDeck = (mode) => {
    horizontalWork.classList.add("is-static-deck");
    observeWorkCards();
    setupFallbackDeck({ clearActive: true });

    if (mode === "mobile-stack") {
      mobileCleanup = setupMobileCardStack();
    }
  };

  const getWorkMode = () => {
    if (window.gsap && window.ScrollTrigger && useDeck.matches) {
      return "desktop";
    }

    if (window.matchMedia("(max-width: 820px)").matches) {
      return "mobile-stack";
    }

    return "tablet-stack";
  };

  const setupWorkMode = (options = {}) => {
    const { force = false } = options;
    const nextMode = getWorkMode();

    if (!force && nextMode === activeWorkMode) {
      if (nextMode === "desktop" && window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
      return;
    }

    const wasWorkSectionVisible = activeWorkMode && isWorkSectionVisible();
    resetWorkModeState();

    activeWorkMode = nextMode;

    if (nextMode === "desktop") {
      setupDesktopDeck();
    } else {
      setupCompactDeck(nextMode);
    }

    if (wasWorkSectionVisible && window.ScrollTrigger) {
      window.requestAnimationFrame(() => {
        window.ScrollTrigger.refresh();
      });
    }
  };

  setupWorkMode();

  const scheduleWorkModeRefresh = () => {
    horizontalWork.classList.add("is-resizing-work");
    window.clearTimeout(workResizeTimer);
    workResizeTimer = window.setTimeout(() => {
      setupWorkMode({ force: true });
      window.requestAnimationFrame(() => {
        horizontalWork.classList.remove("is-resizing-work");
      });
    }, 180);
  };

  if (useDeck.addEventListener) {
    useDeck.addEventListener("change", setupWorkMode);
  } else if (useDeck.addListener) {
    useDeck.addListener(setupWorkMode);
  }

  window.addEventListener("resize", scheduleWorkModeRefresh);
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
  let hasPlayedBeliefFormation = false;
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
        if (entry.isIntersecting && !hasPlayedBeliefFormation) {
          hasPlayedBeliefFormation = true;
          playNativeBeliefFormation();
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
