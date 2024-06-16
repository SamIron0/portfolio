const items = [
  {
    year: "2023",
    projects: [
      {
        title: "Cruiseo",
        description:
          "Ride-share platform developed using the Next.js framework, TypeScript, and React. The platform uses a Postgres database on the backend and leverages the Google Maps API for precise distance measurements and price calculation ",
        url: "https://cruiseo.xyz",
        active: true,
        icon: "resend",
        stats: "Next.js, Typescript, React, Postgres, Python, Tailwind,Node.js",
        image: "/static/images/cruiseo.png",
      },
      {
        title: "Scrapify",
        description: "AI powered web scraper, using Llama 3",
        url: "https://scrapy-nu.vercel.app/",
        icon: "resend",
        active: true,
        stats: "Wix",
        image: "/static/images/secplumbing.png",
      },
      {
        title: "Fitpal AI",
        description: "AI based query to food matching, built using Llama 3.",
        url: "https://fitpalai.com",
        active: true,
        icon: "email",
        stats: "Next.js, Node.js, Typescript, Postgres, React",
        image: "/static/images/fitpalai.png",
      },
    ],
  },
  {
    year: "2021",
    projects: [
      {
        title: "HelloPizza",
        description: "Pizza ordering app",
        url: "https://github.com/SamIron0/Pizza_App",
        active: "Java",
        image: "/static/images/fitpalai.png",
      },
      {
        title: "FaceAI",
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
