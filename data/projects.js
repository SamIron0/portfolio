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
        title: "Fitpal AI",
        description:
          "Meal plan generator built with the Next.js framework that leverages the OpenAI API to generate personalized meal plans according to user specifications. Authentication is seamlessly managed through Supabase. This project optimizes efficiency by employing multiple serverless functions operating in parallel to expedite the generation of various components of the meal plan.",
        url: "https://fitpalai.com",
        active: true,
        icon: "email",
        stats: "Next.js, Node.js, Typescript, Postgres, React",
        image: "/static/images/fitpalai.png",
      },
      {
        title: "Portfolio",
        description: "My personal website",
        url: "https://samuel.pro",
        active: true,
        icon: "resend",
        stats: "Next.js, Javascript, React, CSS",
        image: "/static/images/portfolio.png",
      },
    ],
  },
  {
    year: "2022",
    projects: [
      {
        title: "Vesta Atelier",
        description: "Streetwear clothing store",
        url: "https://vestaatelier.com",
        active: true,
        icon: "resend",
        stats: "Shopify",
        image: "/static/images/fitpalai.png",
      },
      {
        title: "SEC Plumbing",
        description: "Local plumbers",
        url: "https://vestaatelierstudio.wixstudio.io/plumbing",
        icon: "resend",
        active: true,
        stats: "Wix",
        image: "/static/images/secplumbing.png",
      },
    ],
  },
  {
    year: "2021",
    projects: [
      {
        title: "Punjab Food Corner",
        description: "Indian restaurant",
        url: "https://vestaatelierstudio.wixstudio.io/website",
        active: true,
        icon: "resend",
        stats: "Wix",
        image: "/static/images/pfc.png",
      },
    ],
  },
  {
    year: "2020",
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
