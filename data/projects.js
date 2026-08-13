const items = [
  {
    year: "2026",
    projects: [

      {
        title: "Abundish",
        description:
          "Farm-to-table ecommerce platform on a headless Medusa backend with Paystack payments, distance-based delivery pricing via Google Maps, Meilisearch search, and Dockerized deployment behind Nginx.",
        url: "https://abundish.info",
        active: true,
        icon: "resend",
        stats: "TypeScript, NextJS, Medusa, PostgreSQL, Meilisearch, Paystack, Docker, Nginx",
        image: "/static/images/abundish.png",
      },
      {
        title: "Traftics",
        description:
          "Session replay and analytics platform with a custom tracker script deployed to Cloudflare's edge and Stripe-powered billing, built as a multi-app monorepo",
        url: "https://traftics.ironkwe.site",
        active: true,
        icon: "resend",
        stats:
          "NextJS, TypeScript, Tailwind CSS, Supabase, Zustand, TanStack Query, Stripe, Cloudflare",
        image: "/static/images/traftics.png",
      },
      {
        title: "Quro",
        description:
          "Exam-prep platform with Practice/Quiz modes, LaTeX math rendering, and RLS-secured bookmarks and progress tracking.",
        url: "https://quro.study",
        active: true,
        icon: "resend",
        stats: "NextJS, TypeScript, Tailwind CSS, Supabase, KaTeX, PostHog",
        image: "/static/images/quro.png",
      },
    ],
  },
  {
    year: "2025",
    projects: [
      {
        title: "Scrapy",
        description:
          "A web scraping and chat app that scrapes any site with Selenium, indexes the content, and lets you ask questions about it via a conversational AI.",
        url: "https://github.com/SamIron0/scrapy",
        icon: "resend",
        active: true,
        stats:
          "Python, Flask, Selenium, BeautifulSoup, LangChain, OpenAI API, pytest",
        image: "/static/images/scrapy.png",
      },
    ],
  },
  {
    year: "2024",
    projects: [

      {
        title: "Remeal",
        description:
          "An intelligent recipe companion that suggests recipes based on the ingredients you have, with ingredient matching, nutritional info, and saved recipes.",
        url: "https://www.remeal.ironkwe.site",
        active: true,
        icon: "resend",
        stats:
          "NextJS, Typescript, Tailwind CSS, PostgreSQL",
        image: "/static/images/remeal.png",
      },
      {
        title: "Facial Recognition",
        description:
          "Rudimentary facial recognition system using eigenface analysis.",
        url: "https://github.com/SamIron0/Facial-Recognition",
        active: true,
        icon: "resend",
        stats: "Python",
      },
    ],
  },
  {
    year: "2023",
    projects: [

      {
        title: "Pizza_App",
        description:
          "Android app which allows users to order pizza",
        url: "https://github.com/SamIron0/Pizza_App",
        active: false,
        icon: "resend",
        stats: "Java",
      }
    ],
  }
];

export default items;
