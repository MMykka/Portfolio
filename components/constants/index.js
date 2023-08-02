
export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

export const services = [
    {
      title: "Web Developer",
      icon: 'web.png',
    },
    {
      title: "Performance Optimization",
      icon: 'mobile.png',
    },
    {
      title: "Responsive Design",
      icon: 'backend.png',
    },
    {
      title: "Content Creator",
      icon: 'creator.png',
    },
  ];
  export const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "API",
          color: "blue-text-gradient",
        },
        {
          name: "NextJs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: 'carrent.png',
      source_code_link: "https://michael-car-rent.vercel.app",
      github: "https://github.com/MMykka/Car_Rent",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: 'jobit.png',
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: 'tripguide.png',
      source_code_link: "https://github.com/",
    },
  ];

  export const options = [
    {
      icon: "sunny",
      text:'light',
    },
    {
      icon: "moon",
      text:'dark',
    },
    {
      icon: "desktop-outline",
      text: "system",
    }
  ];