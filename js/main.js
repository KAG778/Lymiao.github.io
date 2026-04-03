const translations = {
  zh: {
    "meta.title": "Lymiao | 学术主页",
    "brand.name": "Lymiao",
    "brand.avatarAlt": "Lymiao",
    "nav.aria": "主导航",
    "nav.intro": "首页",
    "nav.home": "主页",
    "nav.blog": "博客",
    "lang.aria": "语言切换",
    "menu.toggle": "菜单",
    "intro.line": "思想自由",
    "intro.subtitle": "Free Mind",
    "intro.desc": "华东理工大学 · 信息工程 · GPA 91.15 · 专业排名 4/98",
    "intro.imageAlt": "AI与机器人背景",
    "sidebar.aria": "个人信息",
    "profile.name": "Lymiao",
    "profile.avatarAlt": "Lymiao头像",
    "profile.school": "华东理工大学 · 信息科学与工程学院",
    "profile.location": "上海，中国",
    "section.about": "关于我",
    "about.body":
      "我目前就读于华东理工大学信息工程专业（本科），GPA 91.15/100，专业排名 4/98（前 5%）。我的研究兴趣涵盖具身智能、多模态表征学习、离线强化学习与大语言模型应用。我在具身 Agent 框架开发、视觉算法与上下位机通信方面有丰富实践经验，曾在上海浩海星空机器人有限公司担任具身智能算法实习生，主导星空大脑系统的开发。",
    "section.education": "教育背景",
    "education.item1.title": "华东理工大学 · 信息科学与工程学院 · 信息工程",
    "education.item1.sub": "本科在读 · GPA: 91.15/100 · 专业排名: 4/98 (前 5%)",
    "education.item1.time": "2023.09 - 至今",
    "section.publications": "论文成果",
    "publication.1.meta": "ESWA (SCI一区) · 在投 · 第一作者",
    "publication.1.desc":
      "针对EEG\"多频带时空模式异质性\"建模缺口，设计基于增强ViViT的表征学习算法。引入ECA模拟多频带情绪调制模式，设计知识残差门控增强模块与时空池化分类头，以多层次SFT进行调优。三个公开数据集上所有指标均超SOTA 1%-10%。",
    "publication.2.meta": "EMENLP (CCF-B) · 预投递 · 共同第一作者",
    "publication.2.desc":
      "针对ICU脓毒症治疗决策中的离线RL训练难题，构建双Decision Transformer端到端训练架构，利用self-play协同训练解决数据分布对齐问题，交叉注意力与因果掩码实现多模态数据融合。",
    "publication.3.meta": "ACMMM (CCF-A) · 在投 · 共同第一作者",
    "publication.3.desc":
      "面向垂类LLM保护需求，设计\"重建损失-对比损失-IPC分类损失\"三重训练损失项，实现主动指纹注入与检验框架，抵御多重攻击的同时防止过度声明。",
    "publication.4.meta": "IRCE (EI) · 已发表 · 核心参与者",
    "publication.4.desc":
      "开发卫星自搜索Agent系统（受ReAct工作启发），结合YOLO实现空间目标检测与博弈评估。",
    "section.research": "科研经历",
    "project.1.title": "ViEEG — EEG多频带时空表征学习",
    "project.1.sub": "EEG · ViViT · SFT · 迁移学习 · 华东理工大学",
    "project.1.time": "2025.01 - 至今",
    "project.1.point1": "负责完整算法开发、除基线外所有实验与论文撰写。",
    "project.1.point2": "引入ECA模拟多频带情绪调制模式，结合多尺度卷积补足骨干ViViT网络缺乏归纳偏置的问题。",
    "project.1.point3": "设计知识残差门控增强模块与时空池化分类头，以多层次SFT进行调优。",
    "project.1.point4": "三个公开数据集留一实验二分类任务下所有指标均超SOTA 1%-10%，大量可解释性实验验证与神经先验知识的高相符性。",
    "project.2.title": "SeMDT — 脓毒症离线强化学习治疗",
    "project.2.sub": "离线RL · Decision Transformer · LLM · 香港城市大学合作",
    "project.2.time": "2025.10 - 至今",
    "project.2.point1": "构建双Decision Transformer策略模型与视觉模型的端到端离线RL训练架构。",
    "project.2.point2": "利用self-play协同训练管线解决双模型预测数据分布态对齐问题，终值奖励权重衰减反向传播解决稀疏RTG奖励问题。",
    "project.2.point3": "交叉注意力与因果掩码机制实现多模态数据融合。在高危病人群体中超出医生基线性能表现。",
    "project.3.title": "VeriPatent — 垂类LLM指纹保护",
    "project.3.sub": "LLM Fingerprint · 对比学习 · 损失项设计 · 香港城市大学合作",
    "project.3.time": "2025.03 - 2026.03",
    "project.3.point1": "优化对比学习算法，根据\"模型性能保持-指纹注入稳定性-防止过度声明\"三重需求设计训练损失项。",
    "project.3.point2": "针对多种主流攻击的鲁棒性实验均超SOTA模型，消融实验所有自创组件均带来实际性能提升。",
    "project.4.title": "空间目标博弈与评估方法",
    "project.4.sub": "卫星自搜索Agent · YOLO · 华东理工大学",
    "project.4.time": "2024.06 - 2025.03",
    "project.4.point1": "开发卫星自搜索Agent系统（受ReAct工作启发），结合YOLO实现空间目标检测与博弈评估。",
    "project.4.point2": "负责框架优化与论文撰写，成果发表于IRCE (EI)会议。",
    "section.competition": "竞赛与项目",
    "competition.1.title": "智能导盲项目 — 国家级大学生创新创业项目",
    "competition.1.sub": "具身Agent · ROS · CV算法 · 上下位机通信 · 项目负责人",
    "competition.1.time": "2024.06 - 2025.08",
    "competition.1.point1": "在封闭场景下，结合\"语音-触觉-力觉\"三重引导方式为视障人士提供针对半开发式语义任务的服务。",
    "competition.1.point2": "开发具身Agent框架，结合多元数据库建模实际现实场景。",
    "competition.1.point3": "2025年中国大学生机器人和人工智能大赛<strong>国家级二等奖</strong>（队长）。",
    "section.internship": "实习经历",
    "internship.1.title": "具身智能算法实习生",
    "internship.1.sub": "上海浩海星空机器人有限公司",
    "internship.1.time": "2025.12 - 2026.02",
    "internship.1.point1": "主导\"星空大脑\"的开发，实现单智能体具身框架，联动LLM与VLM将物理世界实时观察融入上层调度。",
    "internship.1.point2": "构建多元知识库使机器人具备自身能力边界认知与基础场景认知，在多人交互时具备自组织规划最优执行策略的能力。",
    "internship.1.point3": "构建Agent记忆系统使机器人具备在封闭场景长时间轮转执行任务的能力。",
    "section.awards": "竞赛荣誉",
    "award.1": "2025年中国大学生机器人和人工智能大赛 · 国家级二等奖（队长）",
    "award.2": "2025年高教杯数学建模国赛 · 上海市二等奖（建模手）",
    "award.3": "2025年中国大学生机械工程创新创意大赛 · 上海市三等奖（核心成员）",
    "award.4": "校级一等奖学金（获评率 5%）",
    "section.contact": "联系方式",
    "contact.emailLabel": "邮箱：",
    "contact.wechatLabel": "微信：",
    "contact.githubLabel": "GitHub：",
    "blog.title": "我思故我在",
    "blog.stats.posts": "篇文章",
    "blog.stats.categories": "个分类",
    "blog.filter.all": "全部",
    "blog.filter.tech": "技术",
    "blog.filter.essay": "随笔",
    "blog.noPosts": "暂无文章，敬请期待！",
    "blog.readMore": "阅读全文 &rarr;",
    "blog.backToBlog": "\u2190 返回博客列表",
    "blog.toc.title": "目录"
  },
  en: {
    "meta.title": "Lymiao | Academic Homepage",
    "brand.name": "Lymiao",
    "brand.avatarAlt": "Lymiao",
    "nav.aria": "Main navigation",
    "nav.intro": "Home",
    "nav.home": "Profile",
    "nav.blog": "Blog",
    "lang.aria": "Language switch",
    "menu.toggle": "Menu",
    "intro.line": "思想自由",
    "intro.subtitle": "Free Mind",
    "intro.desc": "ECUST · Information Engineering · GPA 91.15 · Rank 4/98",
    "intro.imageAlt": "AI and Robotics background",
    "sidebar.aria": "Personal information",
    "profile.name": "Lymiao",
    "profile.avatarAlt": "Lymiao头像",
    "profile.school": "East China University of Science and Technology · School of Information Science and Engineering",
    "profile.location": "Shanghai, China",
    "section.about": "About Me",
    "about.body":
      "I am an undergraduate student in Information Engineering at East China University of Science and Technology (ECUST), with a GPA of 91.15/100 and ranking 4/98 (top 5%) in my major. My research interests span embodied intelligence, multimodal representation learning, offline reinforcement learning, and large language model applications. I have extensive hands-on experience in embodied Agent framework development, visual algorithms, and upper-lower computer communication. I interned at Shanghai Haohai Xingkong Robotics Co., Ltd. as an Embodied AI Algorithm Intern, leading the development of the StarBrain system.",
    "section.education": "Education",
    "education.item1.title": "East China University of Science and Technology · School of Information Science and Engineering · Information Engineering",
    "education.item1.sub": "B.Eng. Candidate · GPA: 91.15/100 · Rank: 4/98 (Top 5%)",
    "education.item1.time": "Sep 2023 - Present",
    "section.publications": "Publications",
    "publication.1.meta": "ESWA (SCI Q1) · Under Review · First Author",
    "publication.1.desc":
      "Designed an enhanced ViViT-based representation learning algorithm addressing the modeling gap of multi-band spatiotemporal pattern heterogeneity in EEG. Introduced ECA for multi-band emotion modulation, knowledge residual gating, and spatiotemporal pooling classification head. Outperforms SOTA by 1%-10% across three public datasets.",
    "publication.2.meta": "EMENLP (CCF-B) · Pre-submission · Co-first Author",
    "publication.2.desc":
      "Addressed offline RL training challenges in ICU sepsis treatment decisions by building a dual Decision Transformer end-to-end architecture with self-play co-training for data distribution alignment and cross-attention with causal masking for multimodal data fusion.",
    "publication.3.meta": "ACMMM (CCF-A) · Under Review · Co-first Author",
    "publication.3.desc":
      "Designed a triple loss framework (reconstruction-contrastive-IPC classification) for domain-specific LLM fingerprint protection, achieving robustness against multiple mainstream attacks while preventing over-claiming.",
    "publication.4.meta": "IRCE (EI) · Published · Core Contributor",
    "publication.4.desc":
      "Developed a satellite self-search Agent system (inspired by ReAct) with YOLO for spatial target detection and game-theoretic evaluation.",
    "section.research": "Research Experience",
    "project.1.title": "ViEEG — EEG Multi-Band Spatiotemporal Representation Learning",
    "project.1.sub": "EEG · ViViT · SFT · Transfer Learning · ECUST",
    "project.1.time": "Jan 2025 - Present",
    "project.1.point1": "Responsible for complete algorithm development, all experiments except baselines, and paper writing.",
    "project.1.point2": "Introduced ECA to simulate multi-band emotion modulation patterns with multi-scale convolutions addressing ViViT's lack of inductive bias.",
    "project.1.point3": "Designed knowledge residual gating enhancement module and spatiotemporal pooling classification head with multi-level SFT fine-tuning.",
    "project.1.point4": "All metrics surpass SOTA by 1%-10% on three public datasets in leave-one-out binary classification, with extensive interpretability experiments confirming high alignment with neural priors.",
    "project.2.title": "SeMDT — Offline RL for Sepsis Treatment",
    "project.2.sub": "Offline RL · Decision Transformer · LLM · City University of Hong Kong",
    "project.2.time": "Oct 2025 - Present",
    "project.2.point1": "Built a dual Decision Transformer end-to-end offline RL training architecture with vision models.",
    "project.2.point2": "Solved data distribution alignment via self-play co-training and sparse RTG reward problem via terminal reward weight decay backpropagation.",
    "project.2.point3": "Achieved multimodal data fusion via cross-attention and causal masking. Outperformed physician baselines in high-risk patient groups.",
    "project.3.title": "VeriPatent — Domain-Specific LLM Fingerprint Protection",
    "project.3.sub": "LLM Fingerprint · Contrastive Learning · Loss Design · City University of Hong Kong",
    "project.3.time": "Mar 2025 - Mar 2026",
    "project.3.point1": "Optimized contrastive learning with triple loss design balancing model performance preservation, fingerprint stability, and over-claiming prevention.",
    "project.3.point2": "Achieved superior robustness against multiple mainstream attacks; ablation studies confirmed performance gains from all novel components.",
    "project.4.title": "Spatial Target Game and Evaluation Method",
    "project.4.sub": "Satellite Self-search Agent · YOLO · ECUST",
    "project.4.time": "Jun 2024 - Mar 2025",
    "project.4.point1": "Developed a satellite self-search Agent system (inspired by ReAct) with YOLO for spatial target detection and game-theoretic evaluation.",
    "project.4.point2": "Responsible for framework optimization and paper writing; published at IRCE (EI) conference.",
    "section.competition": "Competitions & Projects",
    "competition.1.title": "Smart Guide Dog Project — National Innovation and Entrepreneurship Program",
    "competition.1.sub": "Embodied Agent · ROS · CV Algorithm · UART Communication · Project Lead",
    "competition.1.time": "Jun 2024 - Aug 2025",
    "competition.1.point1": "Provided semi-open semantic task services for visually impaired individuals through voice-tactile-force triple guidance in closed environments.",
    "competition.1.point2": "Developed an embodied Agent framework with multi-source database modeling of real-world scenes.",
    "competition.1.point3": "Won <strong>National Second Prize</strong> at the 2025 China University Robotics and Artificial Intelligence Competition (Team Lead).",
    "section.internship": "Internship",
    "internship.1.title": "Embodied AI Algorithm Intern",
    "internship.1.sub": "Shanghai Haohai Xingkong Robotics Co., Ltd.",
    "internship.1.time": "Dec 2025 - Feb 2026",
    "internship.1.point1": "Led the development of \"StarBrain,\" implementing a single-agent embodied framework integrating LLM and VLM for real-time physical world observation into upper-level scheduling.",
    "internship.1.point2": "Built multi-source knowledge bases enabling robots with self-awareness of capability boundaries and basic scene cognition, with self-organizing optimal execution strategy planning in multi-person interactions.",
    "internship.1.point3": "Constructed an Agent memory system enabling long-duration rotating task execution in closed environments.",
    "section.awards": "Awards",
    "award.1": "2025 China University Robotics and AI Competition · National Second Prize (Team Lead)",
    "award.2": "2025 CUMCM Mathematical Modeling · Shanghai Second Prize (Modeler)",
    "award.3": "2025 China Mechanical Engineering Innovation Competition · Shanghai Third Prize (Core Member)",
    "award.4": "University First-Class Scholarship (Top 5%)",
    "section.contact": "Contact",
    "contact.emailLabel": "Email: ",
    "contact.wechatLabel": "WeChat: ",
    "contact.githubLabel": "GitHub: ",
    "blog.title": "I Think, Therefore I Am",
    "blog.stats.posts": "posts",
    "blog.stats.categories": "categories",
    "blog.filter.all": "All",
    "blog.filter.tech": "Tech",
    "blog.filter.essay": "Essays",
    "blog.noPosts": "No posts yet. Stay tuned!",
    "blog.readMore": "Read more &rarr;",
    "blog.backToBlog": "\u2190 Back to Blog",
    "blog.toc.title": "Table of Contents"
  }
};

const LANGUAGE_STORAGE_KEY = "preferred-language";
let currentLanguage = "zh";

function applyTranslations(lang) {
  const dictionary = translations[lang] || translations.zh;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = dictionary[key];
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    const value = dictionary[key];
    if (typeof value === "string") {
      element.setAttribute("alt", value);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const value = dictionary[key];
    if (typeof value === "string") {
      element.setAttribute("aria-label", value);
    }
  });

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    const isActive = button.dataset.langSwitch === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function saveLanguagePreference(lang) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    // Ignore storage failures
  }
}

function getStoredLanguage() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }
  } catch (error) {
    // Ignore storage failures
  }
  return null;
}

function getInitialLanguage() {
  const savedLanguage = getStoredLanguage();
  if (savedLanguage) return savedLanguage;
  const browserLanguage = (navigator.language || "").toLowerCase();
  return browserLanguage.startsWith("zh") ? "zh" : "en";
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  applyTranslations(lang);
  saveLanguagePreference(lang);
}

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const topNav = document.getElementById("top-nav");

if (menuToggle && topNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = topNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Language switch buttons
document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langSwitch);
  });
});

// Blog category filter
document.querySelectorAll(".blog-filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".blog-filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    document.querySelectorAll(".blog-card").forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// Initialize language
setLanguage(getInitialLanguage());

// Intro page - 点击后替换为个人主页
(function () {
  const introCard = document.querySelector('.intro-card');
  const introShell = document.querySelector('.intro-shell');

  // 只在intro页面执行
  if (!introCard || !introShell) return;

  // 检查是否已经进入过主页
  const hasEntered = sessionStorage.getItem('has-entered-homepage');
  if (hasEntered) {
    // 如果已经进入过，直接跳转
    window.location.replace('/Lymiao.github.io/home/');
    return;
  }

  introCard.addEventListener('click', function() {
    // 淡出动画
    introShell.style.transition = 'opacity 0.6s ease-out';
    introShell.style.opacity = '0';

    setTimeout(() => {
      // 标记已进入
      sessionStorage.setItem('has-entered-homepage', 'true');

      // 替换当前页面（无法返回）
      window.location.replace('/Lymiao.github.io/home/');
    }, 600);
  });

  // ESC键也可以触发
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      introCard.click();
    }
  });
})();

// Blog post table of contents
(function () {
  const content = document.querySelector(".blog-post-content");
  const tocList = document.querySelector(".blog-toc-list");
  const tocNav = document.getElementById("blog-toc");
  if (!content || !tocList || !tocNav) return;

  const headings = content.querySelectorAll("h2, h3");
  if (headings.length === 0) {
    tocNav.style.display = "none";
    return;
  }

  // Ensure every heading has a unique ID
  const usedIds = new Set();
  headings.forEach((h) => {
    if (h.id && !usedIds.has(h.id)) {
      usedIds.add(h.id);
      return;
    }
    // Generate a slug from heading text (works for Chinese + English)
    let slug = h.textContent
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\u4e00-\u9fff\-]/g, "");
    let base = slug;
    let counter = 1;
    while (usedIds.has(slug)) {
      slug = base + "-" + counter;
      counter++;
    }
    h.id = slug;
    usedIds.add(slug);
  });

  // Build TOC list with anchor links
  headings.forEach((h) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = h.textContent.trim();
    a.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.getElementById(h.id);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top: top, behavior: "smooth" });
        // Update URL hash without jump
        history.pushState(null, "", "#" + h.id);
      }
    });
    if (h.tagName === "H3") li.classList.add("toc-h3");
    li.appendChild(a);
    tocList.appendChild(li);
  });

  // Highlight active heading on scroll
  function updateActive() {
    const scrollTop = window.scrollY + 100;
    let current = headings[0];
    for (let i = 0; i < headings.length; i++) {
      if (headings[i].getBoundingClientRect().top + window.scrollY <= scrollTop) {
        current = headings[i];
      }
    }
    tocList.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
    if (current) {
      const idx = Array.from(headings).indexOf(current);
      const links = tocList.querySelectorAll("a");
      if (links[idx]) links[idx].classList.add("active");
    }
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();
})();

// 主页滚动动画
(function () {
  // 只在主页执行
  if (!document.querySelector('.clean-hero')) return;

  const sections = document.querySelectorAll('.profile-section');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // 初始检查 - 如果页面加载时已经在视口中
  setTimeout(() => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  }, 100);
})();
