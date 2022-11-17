export const menuItems = [
  {
    title: "Space Explorer",
    url: "/",
    className: "logo",
  },
  {
    title: "Home",
    url: "/",
    className: "item",
  },
  {
    title: "News",
    url: "/news",
    className: "item",
  },
  {
    title: "Planets",
    url: "",
    className: "item has-submenu",
    submenu: [
      {
        title: "Image of the Day",
        url: "image-of-the-day",
      },
      {
        title: "Planets Glossary",
        url: "planets-glossary",
      },
      {
        title: "Weather on Mars",
        url: "weather-on-mars",
      },
    ],
  },
  {
    title: "Videos",
    url: "/videos",
    className: "item",
  },
  {
    title: "The crew",
    url: "/the-crew",
    className: "item",
  },
];

//{
//    title: "GitHub",
//    url: "https://github.com/orianemgn/Space-explorer",
//    className: "item button secondary",
//  },
