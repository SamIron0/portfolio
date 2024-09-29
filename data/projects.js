const items = [
  {
    year: "2023",
    projects: [
      {
        title: "Remeal",
        description: "Recipe matching engine.",
        url: "https://www.remeal.xyz",
        active: true,
        icon: "email",
        stats:
          "NextJS, Typescript, Tailwind CSS, Python, PostgreSQL, Express, Node.js",
        image: "/static/images/fitpalai.png",
      },
      {
        title: "Scrapify",
        description: "AI powered web scraper, using Llama 3",
        url: "https://github.com/SamIron0/scrapy",
        icon: "resend",
        active: true,
        stats:
          "Python, Flask, Selenium, BeautifulSoup, LangChain,OpenAI API, pytest",
        image: "/static/images/secplumbing.png",
      },
    ],
  },
  {
    year: "2021",
    projects: [
      {
        title: "Pizza App",
        description: "Pizza ordering app",
        url: "https://github.com/SamIron0/Pizza_App",
        active: "Java",
        image: "/static/images/fitpalai.png",
      },
      {
        title: "Facial Recognition",
        description: "Rudimentary facial recognition software",
        url: "https://github.com/SamIron0/Facial-Recognition",
        active: false,
        stats: "Python",
        image: "/static/images/fitpalai.png",
      },
    ],
  },
];

export default items;
