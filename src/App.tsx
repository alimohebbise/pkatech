import { useEffect, useState } from 'react'
import './App.css'

type Language = 'en' | 'fa'

const services = [
  { number: '01', icon: '✳', color: 'lilac' },
  { number: '02', icon: '↗', color: 'blue' },
  { number: '03', icon: '◈', color: 'violet' },
  { number: '04', icon: '⌁', color: 'orange' },
]

const translations = {
  en: {
    pageTitle: 'Forma Studio — Good ideas deserve a great shape',
    pageDescription: 'Forma is an independent creative studio helping ambitious businesses shape their next big idea.',
    homeLabel: 'Forma Studio home',
    menuOpen: 'Open navigation menu',
    menuClose: 'Close navigation menu',
    navigationLabel: 'Main navigation',
    navigation: ['What we do', 'Our approach', 'Contact'],
    talk: "Let's talk",
    hero: {
      eyebrow: 'Independent creative studio',
      title: 'Good ideas deserve',
      accent: 'a great shape.',
      description: "We help ambitious businesses turn what's next into what's possible—with thoughtful strategy, design, and digital craft.",
      primary: 'Start a project',
      secondary: 'Explore our work',
      proofTitle: 'Small team. Big energy.',
      proofDescription: "Made for the people building what's next.",
      artLabel: "A preview of Forma Studio's creative work",
      stickerTop: <>IDEAS<br />IN MOTION</>,
      miniKicker: 'A NEW KIND OF GOOD',
      miniHeadline: <>Make room<br />for <em>more.</em></>,
      miniCta: 'Discover the difference',
      shapeLabel: <>FORM<br />FOLLOWS<br />FEELING</>,
      stickerBottom: <>MADE WITH<br />INTENTION</>,
      noteTitle: 'Built to stand out',
      noteDescription: 'and fit right in.',
    },
    services: {
      eyebrow: 'From first thought to full send',
      title: 'One good idea.',
      accent: 'So many ways forward.',
      cards: [
        { title: 'Brand & identity', description: 'Build a brand people remember.' },
        { title: 'Web experiences', description: 'Make your next click count.' },
        { title: 'Digital products', description: 'Turn good ideas into great tools.' },
        { title: 'Growth strategy', description: 'Find a smarter way forward.' },
      ],
      asideEyebrow: 'A little bit of everything',
      asideTitle: 'One partner for your next big thing.',
      asideDescription: 'From the first sketch to the final launch, we bring the right people and the right ideas to the table.',
      asideLink: 'See how we work',
    },
    about: {
      imageAlt: 'A creative team sharing ideas around a table',
      imageLabel: 'Better, together',
      eyebrow: 'People first. Always.',
      title: 'We make good things happen',
      accent: 'with good people.',
      description: 'We believe the best work comes from being curious, staying human, and making space for different perspectives. No big egos. No one-size-fits-all answers. Just a close-knit team who care about getting it right.',
      link: 'A bit more about us',
      stats: [
        { value: '32', suffix: '+', description: 'ideas brought to life' },
        { value: '8', suffix: 'y', description: 'making good things' },
        { value: '4.9', suffix: '/5', description: 'good people, good work' },
      ],
    },
    contact: {
      eyebrow: 'Your next chapter starts here',
      title: 'Got a good one',
      accent: 'in mind?',
      description: "Tell us what you're dreaming up. We'll bring the coffee and a few ideas of our own.",
      email: 'hello@forma.studio',
    },
    footer: {
      tagline: 'Good things take shape here.',
      copyright: '© 2025 Forma Studio',
      backToTop: 'Back to top',
    },
  },
  fa: {
    pageTitle: 'استودیو فورما — ایده‌های خوب، شایسته‌ی شکل و قالبی عالی‌اند',
    pageDescription: 'فورما یک استودیوی خلاق مستقل است که به کسب‌وکارهای بلندپرواز کمک می‌کند ایده‌های بزرگشان را به واقعیت تبدیل کنند.',
    homeLabel: 'صفحه اصلی استودیو فورما',
    menuOpen: 'باز کردن فهرست',
    menuClose: 'بستن فهرست',
    navigationLabel: 'ناوبری اصلی',
    navigation: ['خدمات ما', 'رویکرد ما', 'تماس'],
    talk: 'گفت‌وگو کنیم',
    hero: {
      eyebrow: 'استودیوی خلاق مستقل',
      title: 'ایده‌های خوب،',
      accent: 'شکلی عالی می‌سازند.',
      description: 'ما به کسب‌وکارهای بلندپرواز کمک می‌کنیم آینده را به فرصت تبدیل کنند؛ با استراتژی سنجیده، طراحی خلاق و مهارت دیجیتال.',
      primary: 'شروع یک پروژه',
      secondary: 'دیدن خدمات ما',
      proofTitle: 'تیمی کوچک، پر از انرژی.',
      proofDescription: 'برای کسانی که آینده را می‌سازند.',
      artLabel: 'پیش‌نمایشی از کارهای خلاقانه استودیو فورما',
      stickerTop: <>ایده‌ها<br />در حرکت</>,
      miniKicker: 'نگاهی تازه به خوبی',
      miniHeadline: <>برای <em>بیشتر</em><br />جا باز کن.</>,
      miniCta: 'تفاوت را کشف کن',
      shapeLabel: <>فرم در<br />پی احساس<br />می‌آید</>,
      stickerBottom: <>با فکر و<br />هدف ساخته شد</>,
      noteTitle: 'متفاوت و ماندگار',
      noteDescription: 'درست برای شما.',
    },
    services: {
      eyebrow: 'از اولین جرقه تا نتیجه نهایی',
      title: 'یک ایده خوب.',
      accent: 'راه‌های بی‌شمار برای پیشرفت.',
      cards: [
        { title: 'هویت و برند', description: 'برندی بسازیم که در یادها بماند.' },
        { title: 'تجربه‌های وب', description: 'هر کلیک را به فرصتی تازه تبدیل کنیم.' },
        { title: 'محصولات دیجیتال', description: 'ایده‌های خوب را به ابزارهای عالی بدل کنیم.' },
        { title: 'استراتژی رشد', description: 'راهی هوشمندانه‌تر به سوی آینده بیابیم.' },
      ],
      asideEyebrow: 'کمی از هر چیزی',
      asideTitle: 'همراهی مطمئن برای قدم بزرگ بعدی شما.',
      asideDescription: 'از نخستین طرح تا لحظه رونمایی، آدم‌های درست و ایده‌های تازه را کنار هم می‌آوریم.',
      asideLink: 'با رویکرد ما آشنا شوید',
    },
    about: {
      imageAlt: 'اعضای یک تیم خلاق در حال گفت‌وگو و تبادل ایده',
      imageLabel: 'کنار هم، بهتر',
      eyebrow: 'آدم‌ها در اولویت‌اند. همیشه.',
      title: 'با آدم‌های خوب،',
      accent: 'اتفاق‌های خوب می‌سازیم.',
      description: 'ما باور داریم بهترین نتیجه از کنجکاوی، انسان‌بودن و پذیرفتن دیدگاه‌های متفاوت به دست می‌آید. اینجا خبری از خودنمایی یا نسخه‌های یکسان برای همه نیست؛ فقط تیمی صمیمی که برای درست انجام‌دادن کارها اهمیت قائل است.',
      link: 'بیشتر درباره ما',
      stats: [
        { value: '۳۲', suffix: '+', description: 'ایده‌هایی که جان گرفته‌اند' },
        { value: '۸', suffix: ' سال', description: 'ساختن چیزهای خوب' },
        { value: '۴٫۹', suffix: ' از ۵', description: 'همکاری خوب، نتیجه خوب' },
      ],
    },
    contact: {
      eyebrow: 'فصل بعدی شما از همین‌جا شروع می‌شود',
      title: 'ایده‌ای خوب',
      accent: 'در ذهن دارید؟',
      description: 'از ایده‌ای که در ذهن دارید برایمان بگویید. ما قهوه و چند پیشنهاد تازه با خودمان می‌آوریم.',
      email: 'hello@forma.studio',
    },
    footer: {
      tagline: 'ایده‌های خوب، اینجا شکل می‌گیرند.',
      copyright: '© ۲۰۲۵ استودیو فورما',
      backToTop: 'بازگشت به بالا',
    },
  },
} as const

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const isPersian = language === 'fa'
  const copy = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isPersian ? 'rtl' : 'ltr'
    document.title = copy.pageTitle

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (description) {
      description.content = copy.pageDescription
    }
  }, [copy.pageDescription, copy.pageTitle, isPersian, language])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className={isPersian ? 'persian-page' : undefined} lang={language} dir={isPersian ? 'rtl' : 'ltr'}>
      <header className="site-header">
        <a className="brand" href="#home" aria-label={copy.homeLabel} onClick={closeMenu} dir="ltr">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>forma<span className="brand-period">.</span></span>
        </a>

        <div className="language-switch" role="group" aria-label={isPersian ? 'انتخاب زبان' : 'Choose language'} dir="ltr">
          <button
            type="button"
            className={language === 'en' ? 'language-button is-active' : 'language-button'}
            aria-pressed={language === 'en'}
            onClick={() => {
              setLanguage('en')
              closeMenu()
            }}
          >
            English
          </button>
          <button
            type="button"
            className={language === 'fa' ? 'language-button is-active' : 'language-button'}
            aria-pressed={language === 'fa'}
            onClick={() => {
              setLanguage('fa')
              closeMenu()
            }}
          >
            فارسی
          </button>
        </div>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? copy.menuClose : copy.menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={menuOpen ? 'nav-open' : ''} aria-label={copy.navigationLabel}>
          <a href="#services" onClick={closeMenu}>{copy.navigation[0]}</a>
          <a href="#about" onClick={closeMenu}>{copy.navigation[1]}</a>
          <a href="#contact" onClick={closeMenu}>{copy.navigation[2]}</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            {copy.talk} <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> {copy.hero.eyebrow}</p>
          <h1>{copy.hero.title} <span>{copy.hero.accent}</span></h1>
          <p className="hero-description">{copy.hero.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              {copy.hero.primary} <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#services">
              {copy.hero.secondary} <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span className="avatar avatar-one">{isPersian ? 'آ' : 'A'}</span>
              <span className="avatar avatar-two">{isPersian ? 'م' : 'M'}</span>
              <span className="avatar avatar-three">{isPersian ? 'ج' : 'J'}</span>
              <span className="avatar avatar-more">+</span>
            </div>
            <p><strong>{copy.hero.proofTitle}</strong><br />{copy.hero.proofDescription}</p>
          </div>
        </div>

        <div className="hero-art" aria-label={copy.hero.artLabel}>
          <div className="art-glow" />
          <div className="art-sticker sticker-top">{copy.hero.stickerTop} <span>✳</span></div>
          <div className="art-card art-card-back">
            <div className="mini-window"><i /><i /><i /></div>
            <div className="art-lines"><i /><i /><i /></div>
          </div>
          <div className="art-card art-card-main">
            <div className="main-card-top">
              <span className="mini-brand"><b /> forma</span>
              <span className="mini-menu">☰</span>
            </div>
            <div className="main-card-content">
              <span className="mini-kicker">{copy.hero.miniKicker}</span>
              <div className="mini-headline">{copy.hero.miniHeadline}</div>
              <div className="mini-cta">{copy.hero.miniCta} <span>↗</span></div>
            </div>
            <div className="shape-canvas">
              <div className="shape shape-circle" />
              <div className="shape shape-blob" />
              <div className="shape shape-pill">{copy.hero.shapeLabel}</div>
            </div>
          </div>
          <div className="art-sticker sticker-bottom"><span>✦</span> {copy.hero.stickerBottom}</div>
          <div className="floating-note"><span className="note-icon">↗</span><span><b>{copy.hero.noteTitle}</b><small>{copy.hero.noteDescription}</small></span></div>
        </div>
      </section>

      <section className="services section-wrap" id="services">
        <div className="section-intro">
          <p className="eyebrow">{copy.services.eyebrow}</p>
          <h2>{copy.services.title}<br /><span>{copy.services.accent}</span></h2>
        </div>
        <div className="service-layout">
          <div className="service-grid">
            {services.map((service, index) => {
              const serviceCopy = copy.services.cards[index]
              return (
                <a className={`service-card ${service.color}`} href="#contact" key={service.number}>
                  <div className="service-card-top">
                    <span className="service-icon" aria-hidden="true">{service.icon}</span>
                    <span className="service-number">{isPersian ? ['۰۱', '۰۲', '۰۳', '۰۴'][index] : service.number}</span>
                  </div>
                  <div>
                    <h3>{serviceCopy.title}</h3>
                    <p>{serviceCopy.description}</p>
                  </div>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                </a>
              )
            })}
          </div>
          <aside className="services-aside">
            <span className="aside-sparkle" aria-hidden="true">✳</span>
            <p className="eyebrow">{copy.services.asideEyebrow}</p>
            <h3>{copy.services.asideTitle}</h3>
            <p>{copy.services.asideDescription}</p>
            <a className="text-link" href="#contact">{copy.services.asideLink} <span aria-hidden="true">↗</span></a>
          </aside>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-inner section-wrap">
          <div className="about-art">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt={copy.about.imageAlt}
              loading="lazy"
            />
            <div className="image-label"><span>✳</span> {copy.about.imageLabel}</div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">{copy.about.eyebrow}</p>
            <h2>{copy.about.title} <span>{copy.about.accent}</span></h2>
            <p className="about-description">{copy.about.description}</p>
            <a className="button button-dark" href="#contact">{copy.about.link} <span aria-hidden="true">↗</span></a>
            <div className="stat-row">
              {copy.about.stats.map((stat) => (
                <div key={stat.description}>
                  <strong>{stat.value}<span>{stat.suffix}</span></strong>
                  <small>{stat.description}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-orbit orbit-one" />
        <div className="contact-orbit orbit-two" />
        <div className="contact-content">
          <p className="eyebrow"><span className="eyebrow-dot" /> {copy.contact.eyebrow}</p>
          <h2>{copy.contact.title}<br /><span>{copy.contact.accent}</span></h2>
          <p>{copy.contact.description}</p>
          <a className="button button-light" href={`mailto:${copy.contact.email}`}>
            <span dir="ltr">{copy.contact.email}</span> <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#home" aria-label={copy.homeLabel} dir="ltr">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span>forma<span className="brand-period">.</span></span>
        </a>
        <p>{copy.footer.tagline}</p>
        <span className="copyright">{copy.footer.copyright}</span>
        <a className="back-top" href="#home">{copy.footer.backToTop} ↑</a>
      </footer>
    </main>
  )
}

export default App
