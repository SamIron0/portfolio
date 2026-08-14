const items = [
  {
    year: "2026",
    projects: [
      {
        title: "Traftics",
        description:
          "Session replay and analytics platform built on rrweb, with a fault-tolerant event pipeline (batching, exponential-backoff retries, quota-aware shutdown) and frustration-signal session scoring, deployed as a monorepo with an edge-hosted tracker.",
        url: "https://traftics.ironkwe.site",
        active: true,
        icon: "resend",
        stats:
          "NextJS, TypeScript, Tailwind CSS, Supabase, Zustand, TanStack Query, Stripe, Cloudflare",
        image: "/static/images/traftics.png",
      },
      {
        title: "Abundish",
        description:
          "Farm-to-table ecommerce platform on a self-hosted Medusa backend with a custom Paystack payment provider, live courier delivery quotes, Meilisearch search, and Dockerized deployment behind Nginx serving ~100 daily visitors.",
        url: "https://abundish.info",
        active: true,
        icon: "resend",
        stats: "TypeScript, NextJS, Medusa, PostgreSQL, Meilisearch, Paystack, Docker, Nginx",
        image: "/static/images/abundish.png",
      },
      {
        title: "Quro",
        description:
          "Exam-prep platform serving ~2,700 questions across Practice and timed Quiz modes, with LaTeX rendering, RLS-secured bookmarks and ratings, and ad-blocker-proof PostHog analytics, reaching 150+ daily visitors during exam season.",
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
