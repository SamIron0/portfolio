const items = [
  {
    year: "2023",
    projects: [
      {
        title: "Cruiseo",
        description:
          "Ride-share platform developed using the Next.js framework, TypeScript, and React. It incorporates a Postgres database hosted on the Supabase platform. A portion of the server is coded in Python and is self-hosted on my MacBook Air, utilizing a Gunicorn server behind Ngrok. I have established a REST API on Amazon Web Services, where the endpoint triggers an Amazon Lambda function, subsequently calling my Ngrok server. Each time the price appears on your screen, it is retrieved from the web by the script currently running on my laptop.",
        url: "https://cruiseo.xyz",
        active: true,
        icon: "resend",
        stats: "Next.js, Typescript, React",
        image: "cruiseo.png",
      },
      {
        title: "Fitpal AI",
        description: "Customizable meal generator",
        url: "https://fitpalai.com",
        active: true,
        icon: "email",
        stats: "Next.js, Node.js, Typescript, React, Supabase",
        image: "fitpalai.png",
      },

      {
        title: "Portfolio",
        description: "My personal website",
        url: "https://samuel.pro",
        active: true,
        icon: "resend",
        stats: "Next.js, Javascript, React",
        image: "ironkwesite.png",
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
        image: "ironkwesite.png",
      },
      {
        title: "SEC Plumbing",
        description: "Streetwear clothing store",
        url: "https://vestaatelierstudio.wixstudio.io/plumbing",
        active: true,
        image: "ironkwesite.png",
      },
    ],
  },
  {
    year: "2021",
    projects: [
      {
        title: "Punjab Food Corner",
        url: "https://vestaatelierstudio.wixstudio.io/website",
        active: true,
        image: "ironkwesite.png",
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
        active: false,
        image: "ironkwesite.png",
      },
      {
        title: "FaceAI",
        description: "Rudimentary facial recognition software",
        url: "https://github.com/SamIron0/Facial-Recognition",
        active: false,
        image: "ironkwesite.png",
      },
    ],
  },
];

export default items;
