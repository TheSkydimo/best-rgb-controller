import { DEFAULT_LOCALE, type Locale } from "~/i18n/config";

export interface TranslationContent {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    features: string;
    compatibility: string;
    showcase: string;
    ariaLabel: string;
    openLabel: string;
    closeLabel: string;
  };
  language: {
    label: string;
  };
  splash: {
    taglineHtml: string;
    imageAlt: string;
  };
  intro: {
    title: string;
    leadHtml: string;
    ctas: {
      docs: string;
      try: string;
    };
  };
  features: {
    title: string;
    leadHtml: string;
    items: Record<
      | "byof"
      | "static"
      | "ondemand"
      | "integration"
      | "seo"
      | "community",
      { title: string; description: string }
    >;
  };
  compatibility: {
    title: string;
    leadHtml: string;
    frameworks: string;
    platforms: string;
    more: string;
  };
  showcase: {
    title: string;
    leadHtml: string;
    more: string;
  };
  footer: {
    links: {
      home: string;
      wechat: string;
      discord: string;
    };
  };
  themeSwitcher: {
    light: string;
    dark: string;
  };
  githubCorner: {
    label: string;
  };
}

const translations: Record<Locale, TranslationContent> = {
  en: {
    meta: {
      title: "Best Free RGB Lighting Software for PC | Control 1000+ Devices | Skydimo",
      description:
        "Skydimo is a free RGB lighting controller for PC that works with 1000+ devices from popular brands. Sync your lights with games, music and movies. Safe download for Windows with no ads and no crypto mining.",
      ogTitle: "Best Free RGB Lighting Software for PC | Skydimo",
      ogDescription:
        "Free RGB lighting controller for Windows PCs that works with 1000+ devices from popular brands. Sync your lights with games, music and movies, ad‑free and with no crypto mining.",
    },
    nav: {
      features: "Lighting Modes",
      compatibility: "Device Support",
      showcase: "Why Skydimo",
      ariaLabel: "Primary navigation",
      openLabel: "Open navigation",
      closeLabel: "Close navigation",
    },
    language: {
      label: "Language",
    },
    splash: {
      taglineHtml:
        "Free RGB<br />lighting controller<br />for all your PC devices",
      imageAlt: "A PC gaming setup lit with colorful RGB lighting.",
    },
    intro: {
      title: "Control 1000+ RGB devices with one free app",
      leadHtml:
        'Skydimo is a free RGB lighting controller for Windows PCs that replaces multiple vendor apps. <span class="text-primary">Control</span> keyboards, mice, fans, LED strips and more from different brands in a single, easy interface.',
      ctas: {
        docs: "Download for Windows",
        try: "Learn why we recommend Skydimo",
      },
    },
    features: {
      title: "Features",
      leadHtml:
        'Skydimo comes <span class="text-primary">batteries included</span>. It takes the best parts of <span class="text-primary">state-of-the-art</span> tools and adds its own <span class="text-primary">innovations</span>.',
      items: {
        byof: {
          title: "Bring Your Own Framework",
          description:
            "Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.",
        },
        static: {
          title: "100% Static HTML, No JS",
          description:
            "Skydimo renders your entire page to static HTML, removing all JavaScript from your final build by default.",
        },
        ondemand: {
          title: "On-Demand Components",
          description:
            "Need some JS? Skydimo can automatically hydrate interactive components when they become visible on the page. If the user never sees it, they never load it.",
        },
        integration: {
          title: "Broad Integration",
          description:
            "Skydimo supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any of your favorite npm packages.",
        },
        seo: {
          title: "SEO Enabled",
          description:
            "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication.",
        },
        community: {
          title: "Community",
          description:
            "Skydimo is an open source project powered by hundreds of contributors making thousands of individual contributions.",
        },
      },
    },
    compatibility: {
      title: "Compatibility",
      leadHtml:
        'Skydimo <span class="text-primary">plays nice</span>. Bring your own UI <span class="text-primary">framework</span> and deploy to your favorite <span class="text-primary">platform</span>.',
      frameworks: "Frameworks",
      platforms: "Platforms",
      more: "...and more &rarr;",
    },
    showcase: {
      title: "Showcase",
      leadHtml:
        'Skydimo is <span class="text-primary">versatile</span>. <span class="text-primary">Explore</span> what\'s possible and get <span class="text-primary">inspired</span>.',
      more: "...and more &rarr;",
    },
    footer: {
      links: {
        home: "Skydimo's official website",
        wechat: "Scan to join us on WeChat",
        discord: "Join us on Discord",
      },
    },
    themeSwitcher: {
      light: "Use light theme",
      dark: "Use dark theme",
    },
    githubCorner: {
      label: "View source on GitHub",
    },
  },
  zh: {
    meta: {
      title: "免费 RGB 灯光控制软件 | 支持 1000+ 设备 | Skydimo",
      description:
        "Skydimo 是一款免费的 Windows RGB 灯光控制软件，支持上千款来自不同品牌的设备。可与游戏、音乐和电影联动，无广告、不挖矿，安全可靠。",
      ogTitle: "免费 RGB 灯光控制软件（Windows）| Skydimo",
      ogDescription:
        "免费、无广告的 RGB 灯光控制软件，支持 1000+ 不同品牌设备，可与游戏、音乐和影片联动，同步整套灯光效果。",
    },
    nav: {
      features: "灯光模式",
      compatibility: "设备兼容性",
      showcase: "为什么选 Skydimo",
      ariaLabel: "主要导航",
      openLabel: "打开导航",
      closeLabel: "关闭导航",
    },
    language: {
      label: "语言",
    },
    splash: {
      taglineHtml: "极速打造<br />更快的网站",
      imageAlt: "穿着宇航服漂浮的宇航员。",
    },
    intro: {
      title: "只需更少交付",
      leadHtml:
        'Skydimo 是一种面向 <span class="text-primary">现代</span> Web 的全新站点构建器。<span class="text-primary">闪电级</span> 性能与 <span class="text-primary">强大</span> 的开发体验完美结合。',
      ctas: {
        docs: "阅读文档",
        try: "立即体验",
      },
    },
    features: {
      title: "功能亮点",
      leadHtml:
        'Skydimo <span class="text-primary">开箱即用</span>，吸收 <span class="text-primary">前沿</span> 工具并注入 <span class="text-primary">创新</span>。',
      items: {
        byof: {
          title: "自选框架",
          description:
            "使用 React、Svelte、Vue、Preact、Web Components 或原生 HTML + JS 构建站点。",
        },
        static: {
          title: "100% 静态 HTML，无 JS",
          description:
            "Skydimo 默认输出纯静态 HTML，将多余的 JavaScript 从最终构建中剔除。",
        },
        ondemand: {
          title: "按需组件",
          description:
            "需要交互时，组件进入视口才会水合。用户看不到的内容永远不会加载。",
        },
        integration: {
          title: "广泛集成",
          description:
            "支持 TypeScript、Scoped CSS、CSS Modules、Sass、Tailwind、Markdown、MDX 及任何 npm 依赖。",
        },
        seo: {
          title: "SEO 就绪",
          description:
            "自动站点地图、RSS、分页与集合，让 SEO 与分发不再头疼。",
        },
        community: {
          title: "活力社区",
          description:
            "一个由数百位贡献者、上千次改进驱动的开源项目。",
        },
      },
    },
    compatibility: {
      title: "兼容性",
      leadHtml:
        'Skydimo <span class="text-primary">善于协作</span>。自带 UI <span class="text-primary">框架</span>，部署到任意 <span class="text-primary">平台</span>。',
      frameworks: "开发框架",
      platforms: "部署平台",
      more: "查看更多 &rarr;",
    },
    showcase: {
      title: "案例展示",
      leadHtml:
        'Skydimo <span class="text-primary">灵活多变</span>。<span class="text-primary">探索</span> 无限可能，获取 <span class="text-primary">灵感</span>。',
      more: "更多作品 &rarr;",
    },
    footer: {
      links: {
        home: "Skydimo 官方网站",
        wechat: "扫描二维码加入我们的微信社群",
        discord: "加入我们的 Discord 社区",
      },
    },
    themeSwitcher: {
      light: "切换到亮色主题",
      dark: "切换到暗色主题",
    },
    githubCorner: {
      label: "查看 GitHub 源码",
    },
  },
  ru: {
    meta: {
      title: "Бесплатное ПО для RGB‑подсветки ПК | Поддержка 1000+ устройств | Skydimo",
      description:
        "Skydimo — бесплатный контроллер RGB‑подсветки для Windows‑ПК, совместимый более чем с 1000 устройствами популярных брендов. Синхронизируйте свет с играми, музыкой и фильмами. Без рекламы и майнинга.",
      ogTitle: "Бесплатный контроллер RGB‑подсветки для Windows | Skydimo",
      ogDescription:
        "Бесплатное приложение для управления RGB‑подсветкой, которое работает с 1000+ устройствами разных брендов и синхронизируется с играми, музыкой и фильмами без рекламы и криптомайнинга.",
    },
    nav: {
      features: "Режимы подсветки",
      compatibility: "Поддержка устройств",
      showcase: "Почему Skydimo",
      ariaLabel: "Основная навигация",
      openLabel: "Открыть навигацию",
      closeLabel: "Закрыть навигацию",
    },
    language: {
      label: "Язык",
    },
    splash: {
      taglineHtml: "Стройте быстрые<br />сайты<br />ещё быстрее.",
      imageAlt: "Астронавт в скафандре, парящий в невесомости.",
    },
    intro: {
      title: "Поставляйте меньше",
      leadHtml:
        'Skydimo — новый конструктор сайтов для <span class="text-primary">современного</span> веба. <span class="text-primary">Молниеносная</span> производительность сочетается с <span class="text-primary">мощным</span> опытом разработки.',
      ctas: {
        docs: "Документация",
        try: "Попробовать",
      },
    },
    features: {
      title: "Возможности",
      leadHtml:
        'Skydimo поставляется <span class="text-primary">всё-в-одном</span>: сочетает лучшие <span class="text-primary">передовые</span> инструменты и добавляет собственные <span class="text-primary">инновации</span>.',
      items: {
        byof: {
          title: "Любой фреймворк",
          description:
            "Создавайте сайт на React, Svelte, Vue, Preact, веб-компонентах или чистом HTML + JS.",
        },
        static: {
          title: "100% статичный HTML, без JS",
          description:
            "Skydimo рендерит страницу в статичный HTML и по умолчанию убирает лишний JavaScript из финальной сборки.",
        },
        ondemand: {
          title: "Компоненты по требованию",
          description:
            "Нужен JS? Skydimo гидратирует интерактивные компоненты только когда они попадают в область просмотра — невидимый код не загружается.",
        },
        integration: {
          title: "Широкая интеграция",
          description:
            "Поддержка TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX и любых npm-пакетов.",
        },
        seo: {
          title: "SEO из коробки",
          description:
            "Автоматические sitemap, RSS, пагинация и коллекции избавляют от рутины SEO.",
        },
        community: {
          title: "Сообщество",
          description:
            "Skydimo — опенсорс-проект, за которым стоят сотни контрибьюторов и тысячи улучшений.",
        },
      },
    },
    compatibility: {
      title: "Совместимость",
      leadHtml:
        'Skydimo <span class="text-primary">уживчив</span>: приносите любимый UI-<span class="text-primary">фреймворк</span> и развёртывайте на любой <span class="text-primary">платформе</span>.',
      frameworks: "Фреймворки",
      platforms: "Платформы",
      more: "И многое другое &rarr;",
    },
    showcase: {
      title: "Витрина",
      leadHtml:
        'Skydimo <span class="text-primary">универсален</span>. <span class="text-primary">Исследуйте</span> возможности и вдохновляйтесь <span class="text-primary">примером</span>.',
      more: "Больше проектов &rarr;",
    },
    footer: {
      links: {
        home: "Официальный сайт Skydimo",
        wechat: "Отсканируйте, чтобы присоединиться к нам в WeChat",
        discord: "Присоединяйтесь к нам в Discord",
      },
    },
    themeSwitcher: {
      light: "Включить светлую тему",
      dark: "Включить тёмную тему",
    },
    githubCorner: {
      label: "Посмотреть исходники на GitHub",
    },
  },
  tr: {
    meta: {
      title: "Ücretsiz RGB Aydınlatma Yazılımı | 1000+ Cihaz Desteği | Skydimo",
      description:
        "Skydimo, Windows PC’ler için ücretsiz bir RGB aydınlatma denetleyicisidir ve popüler markalardan 1000+ cihazla çalışır. Işıkları oyunlar, müzik ve filmlerle senkronize edin. Reklamsız, kripto madenciliği yok.",
      ogTitle: "Windows için En İyi Ücretsiz RGB Aydınlatma Yazılımı | Skydimo",
      ogDescription:
        "Windows PC’ler için ücretsiz RGB aydınlatma denetleyicisi; 1000+ cihaz desteği, oyun/müzik/film senkronu, reklamsız deneyim ve kripto madenciliği olmadan.",
    },
    nav: {
      features: "Aydınlatma modları",
      compatibility: "Cihaz desteği",
      showcase: "Neden Skydimo",
      ariaLabel: "Ana gezinme",
      openLabel: "Gezinmeyi aç",
      closeLabel: "Gezinmeyi kapat",
    },
    language: {
      label: "Dil",
    },
    splash: {
      taglineHtml: "Hızlı siteler<br />daha hızlı<br />inşa edin.",
      imageAlt: "Uzay giysisiyle süzülen bir Skydimonot.",
    },
    intro: {
      title: "Daha az gönderin",
      leadHtml:
        '<span class="text-primary">Modern</span> web için yeni bir site oluşturucusu: Skydimo. <span class="text-primary">Şimşek hızındaki</span> performans <span class="text-primary">güçlü</span> geliştirici deneyimiyle buluşur.',
      ctas: {
        docs: "Dokümantasyonu okuyun",
        try: "Hemen deneyin",
      },
    },
    features: {
      title: "Özellikler",
      leadHtml:
        'Skydimo <span class="text-primary">hazır paket</span> gelir. <span class="text-primary">En ileri</span> araçları alır ve kendi <span class="text-primary">yeniliklerini</span> ekler.',
      items: {
        byof: {
          title: "İstediğin çatı",
          description:
            "React, Svelte, Vue, Preact, web bileşenleri ya da sade HTML + JS ile siteni oluştur.",
        },
        static: {
          title: "100% Statik HTML, JS yok",
          description:
            "Skydimo sayfayı statik HTML'e çevirir ve varsayılan olarak son çıktından tüm JavaScript'i çıkarır.",
        },
        ondemand: {
          title: "İhtiyaca göre bileşen",
          description:
            "JS mi gerekiyor? Skydimo bileşenleri yalnızca görünür olduklarında hidrasyon eder; kullanıcı görmezse yüklenmez.",
        },
        integration: {
          title: "Geniş entegrasyon",
          description:
            "TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX ve favori npm paketlerinle uyumludur.",
        },
        seo: {
          title: "SEO hazır",
          description:
            "Otomatik sitemap, RSS, sayfalama ve koleksiyonlar SEO'yu zahmetsiz hâle getirir.",
        },
        community: {
          title: "Topluluk",
          description:
            "Skydimo, yüzlerce katkıcının binlerce katkısıyla büyüyen bir açık kaynak projesidir.",
        },
      },
    },
    compatibility: {
      title: "Uyumluluk",
      leadHtml:
        'Skydimo <span class="text-primary">uyumludur</span>. Kendi UI <span class="text-primary">çatını</span> getir ve dilediğin <span class="text-primary">platforma</span> dağıt.',
      frameworks: "Çatılar",
      platforms: "Platformlar",
      more: "Daha fazlası &rarr;",
    },
    showcase: {
      title: "Vitrin",
      leadHtml:
        'Skydimo <span class="text-primary">çok yönlüdür</span>. <span class="text-primary">Keşfet</span>, ilham <span class="text-primary">al</span>.',
      more: "Diğer projeler &rarr;",
    },
    footer: {
      links: {
        home: "Skydimo'nun resmi sitesi",
        wechat: "WeChat'te bize katılmak için tarayın",
        discord: "Discord topluluğumuza katılın",
      },
    },
    themeSwitcher: {
      light: "Açık temayı seç",
      dark: "Koyu temayı seç",
    },
    githubCorner: {
      label: "Kaynağı GitHub'da görüntüle",
    },
  },
};

export const getTranslations = (locale: Locale): TranslationContent =>
  translations[locale] ?? translations[DEFAULT_LOCALE];

