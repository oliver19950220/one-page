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

const initGlobalResizeHardReload = () => {
  const reloadParam = "resizeReflow";
  const reloadAtKey = "globalResizeHardReloadAt";
  const currentUrl = new URL(window.location.href);
  let stableViewport = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  let resizeTimer = 0;

  if (currentUrl.searchParams.has(reloadParam)) {
    currentUrl.searchParams.delete(reloadParam);
    window.history.replaceState(null, "", currentUrl.toString());
    window.scrollTo(0, 0);
    window.addEventListener("load", () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => window.scrollTo(0, 0));
      });
    });
  }

  const shouldHardReload = () => {
    const widthDelta = Math.abs(window.innerWidth - stableViewport.width);
    const heightDelta = Math.abs(window.innerHeight - stableViewport.height);
    const touchesDesktopLayout = Math.max(window.innerWidth, stableViewport.width) >= 821;

    return touchesDesktopLayout && (widthDelta >= 16 || heightDelta >= 48);
  };

  const hardReload = () => {
    if (!shouldHardReload()) {
      stableViewport = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      return;
    }

    const now = Date.now();
    const lastReload = Number(sessionStorage.getItem(reloadAtKey) || 0);
    const cooldownRemaining = 1200 - (now - lastReload);

    if (cooldownRemaining > 0) {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(hardReload, cooldownRemaining + 80);
      return;
    }

    sessionStorage.setItem(reloadAtKey, String(now));
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set(reloadParam, String(now));
    window.location.replace(nextUrl.toString());
  };

  const scheduleHardReload = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(hardReload, 900);
  };

  window.addEventListener("resize", scheduleHardReload, { passive: true });
  window.addEventListener("orientationchange", scheduleHardReload, { passive: true });
};

initGlobalResizeHardReload();

const translations = {
  zh: {
    navWork: "项目",
    navTimeline: "经历",
    navMethod: "价值观",
    navContact: "联系",
    heroEyebrow: "AI PRODUCT MANAGER / PRODUCT TO COMMERCIALIZATION",
    heroTitle: "把 AI <span class=\"hero-title-join\">做成产品</span><br>跑通商业化",
    heroSubtitle: "高级 AI 产品经理。带过产品团队，做过商业化验证，也创业做过 0-1。",
    heroTagOne: "产品 Owner",
    heroTagTwo: "商业化背景",
    heroTagThree: "创业经历",
    ctaChat: "预约交流",
    ctaCall: "拨打电话",
    ctaWechat: "添加微信",
    ctaResume: "查看简历",
    metricUsersValue: "PH 榜首 / Agent 0-1",
    metricLtvValue: "LTV +206%",
    metricAdoptionValue: "采纳率 +40%",
    metricCostValue: "交付成本 -30%",
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
    contactPrompt: "选择最方便的方式联系我。",
    contactCallLine: "拨打电话 / 15198284173",
    contactWechatLine: "添加微信 / 扫码交流",
    contactEmailLine: "发送邮件 / 1619698312@qq.com",
    contactResumeLine: "查看简历 / PDF",
    contactPhoneBlock: "<span class=\"contact-action-label\">电话</span><span class=\"contact-action-value\">15198284173</span>",
    contactWechatBlock: "<span class=\"contact-action-label\">微信</span><span class=\"contact-action-value\">扫码添加 / AI 产品交流</span>",
    contactEmailBlock: "<span class=\"contact-action-label\">邮箱</span><span class=\"contact-action-value\">1619698312@qq.com</span>",
    contactResumeBlock: "<span class=\"contact-action-label\">简历</span><span class=\"contact-action-value\">打开 PDF 简历</span>",
    contactPassLabel: "WECHAT PASS",
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
    heroTitle: "Build AI Products<br>That Monetize",
    heroSubtitle: "Senior AI Product Manager with team ownership, commercialization validation, and 0-1 startup experience.",
    heroTagOne: "Product Owner",
    heroTagTwo: "Commercialization",
    heroTagThree: "Startup Builder",
    ctaChat: "Book a Call",
    ctaCall: "Call Me",
    ctaWechat: "WeChat",
    ctaResume: "View Resume",
    metricUsersValue: "PH #1 / Agent 0-1",
    metricLtvValue: "LTV +206%",
    metricAdoptionValue: "Adoption +40%",
    metricCostValue: "Delivery Cost -30%",
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
    contactPrompt: "Choose the fastest way to reach me.",
    contactCallLine: "Call Oliver / 15198284173",
    contactWechatLine: "Add WeChat / scan to talk",
    contactEmailLine: "Send email / 1619698312@qq.com",
    contactResumeLine: "View resume / PDF",
    contactPhoneBlock: "<span class=\"contact-action-label\">Phone</span><span class=\"contact-action-value\">15198284173</span>",
    contactWechatBlock: "<span class=\"contact-action-label\">WeChat</span><span class=\"contact-action-value\">Scan QR / AI product chat</span>",
    contactEmailBlock: "<span class=\"contact-action-label\">Mail</span><span class=\"contact-action-value\">1619698312@qq.com</span>",
    contactResumeBlock: "<span class=\"contact-action-label\">Resume</span><span class=\"contact-action-value\">Open PDF resume</span>",
    contactPassLabel: "WECHAT PASS",
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

const initHeroSignalField = () => {
  const canvas = document.querySelector("[data-hero-signal]");
  const heroCard = canvas ? canvas.closest(".hero-card") : null;

  if (!canvas || !heroCard || !canvas.getContext) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const context = canvas.getContext("2d");
  const pointer = { x: 0.62, y: 0.38, active: false };
  const nodes = [];
  const pulses = [];
  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationFrame = 0;
  let lastPulseTime = 0;
  let proofTopRatio = 0.72;

  const palette = {
    coral: "240, 117, 108",
    teal: "75, 161, 167",
    white: "255, 255, 255"
  };

  const randomBetween = (min, max) => min + Math.random() * (max - min);

  const resize = () => {
    const rect = heroCard.getBoundingClientRect();
    const proofStrip = heroCard.querySelector(".proof-strip");
    const proofRect = proofStrip ? proofStrip.getBoundingClientRect() : null;

    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    proofTopRatio = proofRect ? Math.max(0.58, Math.min(0.82, (proofRect.top - rect.top - 28) / height)) : 0.72;

    const nodeCount = width < 760 ? 22 : 38;
    nodes.length = 0;

    for (let index = 0; index < nodeCount; index += 1) {
      const lane = index % 4;
      const xBias = lane === 0 ? [0.08, 0.36] : lane === 1 ? [0.42, 0.72] : [0.66, 0.96];
      const yMax = width < 760 ? 0.78 : proofTopRatio;

      nodes.push({
        x: randomBetween(xBias[0], xBias[1]) * width,
        y: randomBetween(0.08, yMax) * height,
        baseX: 0,
        baseY: 0,
        vx: randomBetween(-0.22, 0.22),
        vy: randomBetween(-0.18, 0.18),
        radius: randomBetween(1.4, width < 760 ? 2.4 : 3.2),
        phase: randomBetween(0, Math.PI * 2),
        tone: Math.random() > 0.58 ? palette.coral : palette.teal
      });
    }

    nodes.forEach((node) => {
      node.baseX = node.x;
      node.baseY = node.y;
    });
  };

  const drawLine = (from, to, alpha, tone = palette.white) => {
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.strokeStyle = `rgba(${tone}, ${alpha})`;
    context.lineWidth = 1;
    context.stroke();
  };

  const drawScanGeometry = (time) => {
    const scanX = ((time * 0.026) % (width + 240)) - 120;
    const scanGradient = context.createLinearGradient(scanX - 80, 0, scanX + 120, height * proofTopRatio);

    scanGradient.addColorStop(0, "rgba(255,255,255,0)");
    scanGradient.addColorStop(0.42, "rgba(75,161,167,0.05)");
    scanGradient.addColorStop(0.52, "rgba(255,255,255,0.12)");
    scanGradient.addColorStop(1, "rgba(255,255,255,0)");

    context.save();
    context.beginPath();
    context.rect(0, 0, width, height * proofTopRatio);
    context.clip();
    context.fillStyle = scanGradient;
    context.beginPath();
    context.moveTo(scanX, 0);
    context.lineTo(scanX + 170, 0);
    context.lineTo(scanX + 40, height * proofTopRatio);
    context.lineTo(scanX - 130, height * proofTopRatio);
    context.closePath();
    context.fill();

    context.strokeStyle = "rgba(75,161,167,0.08)";
    context.lineWidth = 1;
    for (let index = 0; index < 3; index += 1) {
      const y = height * (0.18 + index * 0.18) + Math.sin(time * 0.001 + index) * 12;
      context.beginPath();
      context.moveTo(width * 0.38, y);
      context.quadraticCurveTo(width * 0.62, y - 50, width * 0.96, y - 88);
      context.stroke();
    }
    context.restore();
  };

  const drawPulse = (time) => {
    if (time - lastPulseTime > 1650) {
      lastPulseTime = time;
      pulses.push({
        x: randomBetween(0.46, 0.88) * width,
        y: randomBetween(0.18, Math.min(proofTopRatio - 0.08, 0.62)) * height,
        born: time,
        tone: Math.random() > 0.5 ? palette.teal : palette.coral
      });
    }

    for (let index = pulses.length - 1; index >= 0; index -= 1) {
      const pulse = pulses[index];
      const age = (time - pulse.born) / 1800;

      if (age >= 1) {
        pulses.splice(index, 1);
        continue;
      }

      context.beginPath();
      context.arc(pulse.x, pulse.y, 22 + age * 72, 0, Math.PI * 2);
      context.strokeStyle = `rgba(${pulse.tone}, ${0.18 * (1 - age)})`;
      context.lineWidth = 1;
      context.stroke();
    }
  };

  const render = (time = 0) => {
    context.clearRect(0, 0, width, height);
    drawScanGeometry(time);

    nodes.forEach((node) => {
      const driftX = Math.sin(time * 0.00055 + node.phase) * 10;
      const driftY = Math.cos(time * 0.00048 + node.phase) * 7;
      const pull = pointer.active ? 0.018 : 0.006;
      const targetX = node.baseX + driftX + (pointer.x * width - node.baseX) * pull;
      const targetY = node.baseY + driftY + (pointer.y * height - node.baseY) * pull;

      node.x += (targetX - node.x) * 0.04;
      node.y += (targetY - node.y) * 0.04;
      node.y = Math.min(node.y, height * proofTopRatio - 18);
    });

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const first = nodes[i];
        const second = nodes[j];
        const dx = first.x - second.x;
        const dy = first.y - second.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = width < 760 ? 132 : 178;

        if (distance < maxDistance) {
          const alpha = (1 - distance / maxDistance) * 0.13;
          drawLine(first, second, alpha, first.tone);
        }
      }
    }

    nodes.forEach((node) => {
      const glow = 0.26 + Math.sin(time * 0.002 + node.phase) * 0.12;
      context.beginPath();
      context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(${node.tone}, ${glow})`;
      context.fill();
    });

    drawPulse(time);
    animationFrame = window.requestAnimationFrame(render);
  };

  const start = () => {
    if (prefersReducedMotion.matches || animationFrame) {
      return;
    }

    heroCard.classList.add("is-signal-active");
    animationFrame = window.requestAnimationFrame(render);
  };

  const stop = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }
    heroCard.classList.remove("is-signal-active");
  };

  heroCard.addEventListener("pointermove", (event) => {
    const rect = heroCard.getBoundingClientRect();
    pointer.x = (event.clientX - rect.left) / rect.width;
    pointer.y = (event.clientY - rect.top) / rect.height;
    pointer.active = true;
    window.clearTimeout(pointer.timer);
    pointer.timer = window.setTimeout(() => {
      pointer.active = false;
    }, 500);
  });

  resize();
  start();
  window.addEventListener("resize", resize);
  prefersReducedMotion.addEventListener("change", () => {
    resize();
    if (prefersReducedMotion.matches) {
      stop();
      context.clearRect(0, 0, width, height);
    } else {
      start();
    }
  });
};

initHeroSignalField();

const initSectionSignalFields = () => {
  const canvases = Array.from(document.querySelectorAll("[data-section-signal]"));

  if (!canvases.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const sectionPalettes = {
    capabilities: {
      primary: [75, 161, 167],
      secondary: [240, 117, 108],
      line: [17, 17, 17]
    },
    work: {
      primary: [75, 161, 167],
      secondary: [240, 117, 108],
      line: [17, 17, 17]
    },
    belief: {
      primary: [255, 255, 255],
      secondary: [75, 161, 167],
      line: [255, 255, 255]
    },
    contact: {
      primary: [255, 255, 255],
      secondary: [240, 117, 108],
      line: [255, 255, 255]
    }
  };

  const createField = (canvas) => {
    const section = canvas.closest("[data-signal-section]");
    const context = canvas.getContext ? canvas.getContext("2d") : null;

    if (!section || !context) {
      return null;
    }

    const type = section.dataset.signalSection || "capabilities";
    const palette = sectionPalettes[type] || sectionPalettes.capabilities;
    const points = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let visible = false;

    const randomBetween = (min, max) => min + Math.random() * (max - min);
    const color = (value, alpha) => `rgba(${value[0]}, ${value[1]}, ${value[2]}, ${alpha})`;

    const resize = () => {
      const rect = section.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = type === "work" ? 18 : type === "contact" ? 16 : 22;
      const count = Math.max(10, Math.min(34, Math.round(width / 90) + density));
      points.length = 0;

      for (let index = 0; index < count; index += 1) {
        const sideBias = type === "work" ? randomBetween(0.04, 0.96) : randomBetween(0.08, 0.92);
        points.push({
          x: sideBias * width,
          y: randomBetween(0.08, 0.92) * height,
          phase: randomBetween(0, Math.PI * 2),
          radius: randomBetween(1, type === "contact" || type === "belief" ? 2.2 : 2.8),
          tone: Math.random() > 0.58 ? palette.secondary : palette.primary
        });
      }
    };

    const drawCurve = (from, to, time, alpha) => {
      const midX = (from.x + to.x) / 2 + Math.sin(time * 0.00034 + from.phase) * 34;
      const midY = (from.y + to.y) / 2 + Math.cos(time * 0.0003 + to.phase) * 22;

      context.beginPath();
      context.moveTo(from.x, from.y);
      context.quadraticCurveTo(midX, midY, to.x, to.y);
      context.strokeStyle = color(from.tone, alpha);
      context.lineWidth = 1;
      context.stroke();
    };

    const render = (time = 0) => {
      context.clearRect(0, 0, width, height);

      const sweepX = ((time * 0.018) % (width + 260)) - 130;
      const gradient = context.createLinearGradient(sweepX - 90, 0, sweepX + 180, height);
      gradient.addColorStop(0, "rgba(255,255,255,0)");
      gradient.addColorStop(0.5, color(palette.primary, type === "belief" || type === "contact" ? 0.065 : 0.045));
      gradient.addColorStop(1, "rgba(255,255,255,0)");

      context.fillStyle = gradient;
      context.beginPath();
      context.moveTo(sweepX, 0);
      context.lineTo(sweepX + 160, 0);
      context.lineTo(sweepX + 40, height);
      context.lineTo(sweepX - 120, height);
      context.closePath();
      context.fill();

      points.forEach((point, index) => {
        point.drawX = point.x + Math.sin(time * 0.00045 + point.phase) * 10;
        point.drawY = point.y + Math.cos(time * 0.00038 + point.phase) * 8;

        for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
          const next = points[nextIndex];
          const dx = point.drawX - next.x;
          const dy = point.drawY - next.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = width < 680 ? 112 : 160;

          if (distance < maxDistance) {
            drawCurve(
              { x: point.drawX, y: point.drawY, tone: point.tone, phase: point.phase },
              { x: next.x, y: next.y, phase: next.phase },
              time,
              (1 - distance / maxDistance) * (type === "belief" || type === "contact" ? 0.1 : 0.08)
            );
          }
        }
      });

      points.forEach((point) => {
        const pulse = 0.22 + Math.sin(time * 0.002 + point.phase) * 0.12;
        context.beginPath();
        context.arc(point.drawX, point.drawY, point.radius, 0, Math.PI * 2);
        context.fillStyle = color(point.tone, pulse);
        context.fill();
      });

      if (visible && !prefersReducedMotion.matches) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const start = () => {
      visible = true;
      if (!frame && !prefersReducedMotion.matches) {
        frame = window.requestAnimationFrame(render);
      } else if (prefersReducedMotion.matches) {
        render(0);
      }
    };

    const stop = () => {
      visible = false;
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    resize();
    render(0);

    return { section, resize, start, stop };
  };

  const fields = canvases.map(createField).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const field = fields.find((item) => item.section === entry.target);

      if (!field) {
        return;
      }

      if (entry.isIntersecting) {
        field.start();
      } else {
        field.stop();
      }
    });
  }, {
    threshold: 0.02,
    rootMargin: "18% 0px 18% 0px"
  });

  fields.forEach((field) => observer.observe(field.section));

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      fields.forEach((field) => field.resize());
    }, 120);
  });

  prefersReducedMotion.addEventListener("change", () => {
    fields.forEach((field) => {
      field.resize();
      field.start();
    });
  });
};

initSectionSignalFields();

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

  const useDeck = window.matchMedia("(min-width: 821px)");
  const formatDeckIndex = (index) => String(index + 1).padStart(2, "0");
  const deckLabels = ["Wegic / AI Website Builder", "Authing / IDaaS", "Baidu AI Cloud / Marketing AI"];

  const updateDeckHud = (progress = 0) => {
    const maxIndex = Math.max(workCards.length - 1, 0);
    const currentIndex = Math.min(maxIndex, Math.max(0, Math.round(progress * maxIndex)));

    if (deckHudCurrent) {
      deckHudCurrent.textContent = formatDeckIndex(currentIndex);
    }

    if (deckHudLabel) {
      deckHudLabel.textContent = deckLabels[currentIndex] || deckLabels[0];
    }

    if (deckHudProgress) {
      deckHudProgress.style.width = `${((currentIndex + 1) / workCards.length) * 100}%`;
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
  let stableViewport = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

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
          y: () => -window.innerHeight * 0.18,
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

  const getDesktopDeckProgress = () => {
    if (deckTimeline && deckTimeline.scrollTrigger) {
      return deckTimeline.scrollTrigger.progress || 0;
    }

    const rect = horizontalWork.getBoundingClientRect();
    const scrollableDistance = Math.max(horizontalWork.offsetHeight - window.innerHeight, 1);
    const sectionTop = window.scrollY + rect.top;
    return Math.min(Math.max((window.scrollY - sectionTop) / scrollableDistance, 0), 1);
  };

  const restoreDesktopDeckProgress = (progress) => {
    if (!deckTimeline || !deckTimeline.scrollTrigger) {
      return;
    }

    const trigger = deckTimeline.scrollTrigger;
    const targetScroll = trigger.start + (trigger.end - trigger.start) * progress;
    window.scrollTo(0, targetScroll);
    trigger.update();
    deckTimeline.progress(progress);
    updateDeckHud(progress);
  };

  const setupWorkMode = (options = {}) => {
    const { force = false, preserveProgress = false } = options;
    const nextMode = getWorkMode();

    if (!force && nextMode === activeWorkMode) {
      if (nextMode === "desktop" && window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
      return;
    }

    const wasWorkSectionVisible = activeWorkMode && isWorkSectionVisible();
    const shouldRestoreDeckProgress = preserveProgress && wasWorkSectionVisible && activeWorkMode === "desktop" && nextMode === "desktop";
    const savedDeckProgress = shouldRestoreDeckProgress ? getDesktopDeckProgress() : 0;

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

        if (shouldRestoreDeckProgress) {
          window.requestAnimationFrame(() => {
            restoreDesktopDeckProgress(savedDeckProgress);
          });
        }
      });
    }
  };

  const shouldReloadAfterResize = () => {
    const widthDelta = Math.abs(window.innerWidth - stableViewport.width);
    const heightDelta = Math.abs(window.innerHeight - stableViewport.height);
    const modeMayChange = getWorkMode() !== activeWorkMode;

    return modeMayChange || widthDelta >= 2 || heightDelta >= 2;
  };

  const rebuildAfterResize = () => {
    const shouldRebuild = shouldReloadAfterResize();
    const shouldPreserveProgress = isWorkSectionVisible();
    stableViewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    if (!shouldRebuild) {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
      return;
    }

    if (window.ScrollTrigger && window.ScrollTrigger.clearScrollMemory) {
      window.ScrollTrigger.clearScrollMemory();
    }

    setupWorkMode({
      force: true,
      preserveProgress: shouldPreserveProgress,
    });
  };

  const performResizeReload = () => {
    rebuildAfterResize();
    return false;
  };

  const finishWorkResize = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        horizontalWork.classList.remove("is-resizing-work", "is-reflowing-work");
      });
    });
  };

  setupWorkMode();

  const scheduleWorkModeRefresh = () => {
    horizontalWork.classList.add("is-resizing-work");
    window.clearTimeout(workResizeTimer);
    workResizeTimer = window.setTimeout(() => {
      if (!performResizeReload()) {
        finishWorkResize();
      }
    }, 420);
  };

  if (useDeck.addEventListener) {
    useDeck.addEventListener("change", scheduleWorkModeRefresh);
  } else if (useDeck.addListener) {
    useDeck.addListener(scheduleWorkModeRefresh);
  }

  window.addEventListener("resize", scheduleWorkModeRefresh);
  window.addEventListener("orientationchange", scheduleWorkModeRefresh);
  window.addEventListener("pageshow", () => {
    setupWorkMode({ force: true });
  });

  if (window.visualViewport && useDeck.matches) {
    window.visualViewport.addEventListener("resize", scheduleWorkModeRefresh);
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
  let hasPlayedBeliefFormation = false;
  const playNativeBeliefFormation = () => {
    beliefAnimations.forEach((animation) => animation.cancel());
    beliefAnimations = [];
    beliefGrid.classList.add("is-forming-belief");
    let finishedAnimations = 0;

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
        finishedAnimations += 1;
        if (finishedAnimations >= beliefTiles.length) {
          beliefGrid.classList.remove("is-forming-belief");
        }
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
    beliefGrid.classList.remove("is-forming-belief");
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
