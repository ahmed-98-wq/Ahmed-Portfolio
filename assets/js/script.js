  // ---- translations ----
  const translations = {
    en: {
      'nav.name': 'Ahmed Adam',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.contact': 'Contact',
      'nav.cta': "Let's start",
      'hero.eyebrow': 'Available for web application design, web interface development, and remote collaboration projects.',
      'hero.title': 'I build web products that are <span>fast, clear</span>, and actually work.',
      'hero.lead': "I'm Ahmed Adam Altayeb, a Web Application Designer and Frontend Developer I turn ideas into polished interfaces and reliable backends — from the first line of code to production.",
      'hero.ctaProjects': 'See my work',
      'hero.ctaContact': 'Get in touch',
      'hero.ctaCv': 'Download CV',
      'hero.stat1': 'years of experience',
      'hero.stat2': 'projects shipped',
      'hero.stat3': 'happy clients',
      'about.tag': '01 — About',
      'about.title': 'A software engineer who loves the small details',
      'about.subtitle': 'A solid technical background, an eye for interface detail, and care for product performance from day one.',
      'about.row1k': 'Name',
      'about.row1v': 'Ahmed Adam',
      'about.row2k': 'Role',
      'about.row2v': 'Web App Designer & Frontend Developer',
      'about.row3k': 'Location',
      'about.row3v': 'Khartoum, Sudan',
      'about.row4k': 'Remote work',
      'about.row4v': 'Available',
      'about.row5k': 'Languages',
      'about.row5v': 'Arabic / English',
      'about.p1': 'My programming journey began with a simple question: how does a blank screen transform into an application used by thousands of people? That curiosity evolved into a career, and I have since worked on a variety of projects.',
      'about.p2': 'My focus is on <strong>performance and clarity</strong>: clean, readable code, and interfaces that feel meticulously built, not just "functional." I prioritize <strong>user experience</strong> and <strong>accessibility</strong>, and have experience in database design.',
      'about.p3': 'Outside of work, I keep up with modern web development trends and contribute to open-source projects whenever I have the time.',
      'skills.tag': '02 — Tools',
      'skills.title': 'Skills & Technologies',
      'skills.subtitle': 'The toolkit I use daily to build complete products, front to back.',
      'skills.g1': 'Frontend',
      'skills.g2': 'Backend & Architecture',
      'skills.g3': 'Tools & Deployment',
      'projects.tag': '03 — My Work',
      'projects.title': 'Selected Projects',
      'projects.subtitle': 'A selection of websites I designed and developed, with a focus on responsiveness and a clear user experience.',
      'projects.p1.title': 'E-commerce Platform',
      'projects.p1.desc': 'A responsive e-commerce website that presents products in a clear, accessible shopping experience.',
      'projects.p2.title': 'Zakii-multi-production-LTD',
      'projects.p2.desc': "A company website that presents its products, prices, and product gallery in a clear layout.",
      'projects.p3.title': 'Skyway Agency website',
      'projects.p3.desc': 'A web application that helps customers book tickets for their trips to various destinations, while also offering hotel booking services.',
      'projects.live': 'Live demo ↗',
      'projects.code': 'Source code ↗',
      'exp.tag': '04 — Career Path',
      'exp.title': 'Experience & Education',
      'exp.subtitle': 'Key milestones in chronological order across my professional and academic journey.',
      'exp.t1.meta': '2023 — Present',
      'exp.t1.title': 'Alsawaid Alkhadraa Organization.',
      'exp.t1.desc': 'Volunteer supporting the organization’s digital and technical needs.',
      'exp.t2.meta': '2023',
      'exp.t2.title': 'Website Designer and Developer — Travel Agency',
      'exp.t2.desc': 'Designed and developed a travel agency website with a focus on performance and mobile usability.',
      'exp.t3.meta': '2018 — 2022',
      'exp.t3.title': "Bachelor of Science (Honours) in Information Technology",
      'exp.t3.desc': 'University of Science and Technology — Graduation Project: An application displaying student results for the College of Science and Technology.',
      'contact.title': "Let's build something great together",
      'contact.subtitle': 'Have a project idea or need a developer for your team? Reach out and let\'s talk details.',
      'contact.whatsapp': 'Message me on WhatsApp',
      'contact.location': 'Sudan',
      'contact.term1': '> preparing message...',
      'contact.term2': '> click the button below to copy ↓',
      'contact.copy': 'Copy email address',
      'footer.rights': '© 2024 Ahmed Adam. All rights reserved.',
    }
  };

  const I18N_KEY = 'portfolio-lang';
  const THEME_KEY = 'portfolio-theme';
  const originalContent = new Map();

  document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(el => {
    const key = el.dataset.i18n || el.dataset.i18nHtml;
    const isHtml = !!el.dataset.i18nHtml;
    originalContent.set(el, { key, isHtml, value: isHtml ? el.innerHTML : el.textContent });
  });

  function applyLanguage(lang){
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('langLabel').textContent = lang === 'ar' ? 'EN' : 'AR';
    document.getElementById('menuBtn').setAttribute('aria-label', lang === 'ar' ? 'فتح القائمة' : 'Open menu');
    document.getElementById('themeBtn').setAttribute('aria-label', lang === 'ar' ? 'تبديل الوضع الداكن/الفاتح' : 'Toggle dark/light mode');

    originalContent.forEach((data, el) => {
      const dict = translations.en[data.key];
      const value = (lang === 'en' && dict) ? dict : data.value;
      if(data.isHtml){ el.innerHTML = value; } else { el.textContent = value; }
    });

    localStorage.setItem(I18N_KEY, lang);
    if(typeof typeSequence === 'function'){ typeSequence(lang); }
  }

  const langBtn = document.getElementById('langBtn');
  langBtn.addEventListener('click', () => {
    const current = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    applyLanguage(current === 'ar' ? 'en' : 'ar');
  });

  // ---- theme toggle ----
  function applyTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    document.getElementById('themeIcon').textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem(THEME_KEY, theme);
  }
  const themeBtn = document.getElementById('themeBtn');
  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  // theme is safe to initialize now (no dependency on later DOM/JS)
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(savedTheme || (prefersLight ? 'light' : 'dark'));

  // ---- header scroll state ----
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  });

  // ---- mobile menu ----
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
    if(open){
      navLinks.style.cssText = 'display:flex; flex-direction:column; position:fixed; top:64px; inset-inline:0; background:rgba(10,14,20,0.97); padding:20px 24px; gap:4px; border-bottom:1px solid var(--border);';
    } else {
      navLinks.removeAttribute('style');
    }
  });
  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => {
      if(window.innerWidth <= 720){ navLinks.removeAttribute('style'); menuBtn.setAttribute('aria-expanded','false'); }
    });
  });

  // ---- active link on scroll ----
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.nav-link');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach(s => navObserver.observe(s));

  // ---- scroll reveal ----
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if(entry.isIntersecting){
        setTimeout(() => entry.target.classList.add('in'), i % 3 * 90);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(el => revealObserver.observe(el));

  // ---- ambient blob parallax ----
  const blobs = [document.getElementById('blob1'), document.getElementById('blob2'), document.getElementById('blob3')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduceMotion){
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      blobs.forEach((b, i) => {
        const factor = (i + 1) * 0.6;
        b.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    });
  }

  // ---- terminal typing effect ----
  const typeTarget = document.getElementById('typeTarget');
  function getCodeLines(lang){
    const nameStr = lang === 'en' ? '"Ahmed Adam"' : '" أحمد ادم"';
    return [
      { html: '<span class="tk-kw">const</span> <span class="tk-key">developer</span> <span class="tk-punc">=</span> <span class="tk-punc">{</span>' },
      { html: `&nbsp;&nbsp;<span class="tk-key">name</span><span class="tk-punc">:</span> <span class="tk-str">${nameStr}</span><span class="tk-punc">,</span>` },
      { html: '&nbsp;&nbsp;<span class="tk-key">role</span><span class="tk-punc">:</span> <span class="tk-str">"Web Application Designer and Frontend Developer"</span><span class="tk-punc">,</span>' },
      { html: '&nbsp;&nbsp;<span class="tk-key">stack</span><span class="tk-punc">:</span> <span class="tk-punc">[</span><span class="tk-str">"Html,Css,Js"</span><span class="tk-punc">,</span> <span class="tk-str">"PHP"</span><span class="tk-punc">,</span> <span class="tk-str">"Mysql"</span><span class="tk-punc">]</span><span class="tk-punc">,</span>' },
      { html: '&nbsp;&nbsp;<span class="tk-key">available</span><span class="tk-punc">:</span> <span class="tk-kw">true</span><span class="tk-punc">,</span>' },
      { html: '&nbsp;&nbsp;<span class="tk-key">location</span><span class="tk-punc">:</span> <span class="tk-str">"Sudan"</span>' },
      { html: '<span class="tk-punc">}</span><span class="tk-punc">;</span>' },
    ];
  }

  function typeSequence(lang){
    const codeLines = getCodeLines(lang === 'en' ? 'en' : 'ar');
    typeTarget.innerHTML = '';
    let lineIndex = 0;

    function typeLine(){
      if(lineIndex >= codeLines.length){
        const caret = document.createElement('span');
        caret.className = 'caret';
        typeTarget.appendChild(caret);
        return;
      }
      const lineEl = document.createElement('div');
      lineEl.className = 'term-line';
      typeTarget.appendChild(lineEl);

      const full = codeLines[lineIndex].html;
      const plainLength = full.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').length;
      let charCount = 0;
      const speed = reduceMotion ? 0 : 14;

      function step(){
        charCount++;
        // reveal proportionally using a temp element trick for HTML-safe partial reveal
        const ratio = Math.min(charCount / plainLength, 1);
        lineEl.innerHTML = full;
        lineEl.style.clipPath = `inset(0 ${100 - ratio * 100}% 0 0)`;
        if(ratio < 1 && !reduceMotion){
          requestAnimationFrame(() => setTimeout(step, speed));
        } else {
          lineEl.style.clipPath = 'none';
          lineIndex++;
          setTimeout(typeLine, 110);
        }
      }
      step();
    }
    typeLine();
  }
  typeSequence(document.documentElement.lang === 'en' ? 'en' : 'ar');

  // ---- copy email ----
  const copyBtn = document.getElementById('copyEmail');
  copyBtn.addEventListener('click', async () => {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'ar';
    const doneLabel = lang === 'en' ? 'Copied ✓' : 'تم النسخ ✓';
    const defaultLabel = lang === 'en' ? translations.en['contact.copy'] : 'نسخ البريد الإلكتروني';
    try{
      await navigator.clipboard.writeText('ahcinbox1@gmail.com');
      copyBtn.textContent = doneLabel;
      setTimeout(() => copyBtn.textContent = defaultLabel, 1800);
    }catch(e){
      copyBtn.textContent = 'ahcinbox1@gmail.com';
    }
  });

  // ---- apply saved language now that all DOM refs (typeTarget, etc.) exist ----
  const savedLang = localStorage.getItem(I18N_KEY);
  if(savedLang && savedLang !== 'ar'){ applyLanguage(savedLang); }
