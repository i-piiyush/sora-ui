// src/data/componentsData.js

export const COMPONENTS_DATA = [
  {
    category: "Animated Navbars",
    components: [
      {
        name: "Slyde Bar",
        key: "slydebar",
        base: "/components/slydebar/demo",
        routes: {
          dependency: "/components/slyde-bar/dependency",
          props: "/components/slyde-bar/props",
          guide: "/components/slyde-bar/guide",
        },
        dependencies: [
          "framer-motion",
          "hamburger-react",
          "react-icons",
          "react-router-dom",
          "tailwindcss",
          "@tailwindcss/vite",
        ],
        props: [
          {
            name: "textColor",
            type: "string",
            possibleValues: [
              "text-zinc-900",
              "text-white",
              "text-red-500",
              "text-blue-500",
              "text-green-500",
            ],
            default: "text-zinc-900",
            description:
              "Tailwind CSS text color class applied to menu item text inside the sidebar.",
          },
          {
            name: "hamburgerBtnColor",
            type: "string",
            possibleValues: ["black", "white", "#000", "#fff", "red", "blue"],
            default: "black",
            description:
              "Color of the hamburger menu icon when the sidebar is closed.",
          },
          {
            name: "btnBgColor",
            type: "string",
            possibleValues: [
              "bg-white",
              "bg-black",
              "bg-zinc-300",
              "bg-red-500",
              "bg-blue-500",
            ],
            default: "bg-white",
            description:
              "Tailwind CSS background color class for the button that triggers the sidebar.",
          },
          {
            name: "sidebarBgColor",
            type: "string",
            possibleValues: [
              "bg-white",
              "bg-zinc-100",
              "bg-black",
              "bg-red-500",
              "bg-blue-500",
            ],
            default: "bg-white",
            description:
              "Tailwind CSS background color class for the sidebar panel.",
          },
          {
            name: "headingLinks",
            type: "array",
            possibleValues: [
              [{ title: "Home", path: "/home" }],
              [{ title: "Products", path: "/products" }],
              [{ title: "Custom", path: "/custom" }],
            ].map((arr) => arr.map((link) => link.title).join(", ")), // ✅ prevents rendering object directly
            default: [
              { title: "Home", path: "/demopath" },
              { title: "Products", path: "/demopath" },
              { title: "Sign Up", path: "/demopath" },
              { title: "About us", path: "/demopath" },
            ],
            description:
              "Array of navigation link objects for the sidebar, each containing a title (string) and a path (string).",
          },
          {
            name: "logoName",
            type: "string",
            possibleValues: [
              "MyBrand",
              "Slyde",
              "Acme Corp",
              "TechFlow",
              "Brandify",
            ],
            default: "sora-ui.",
            description:
              "Name of your brand displayed in the logo section",
          },
        ],
      },

      {
        name: "Zen Deck",
        key: "zendeck",
        base: "/components/zendeck/demo",
        routes: {
          dependency: "/components/zendeck/dependency",
          props: "/components/zendeck/props",
          guide: "/components/zendeck/guide",
        },
        dependencies: ["3tw3gytygwt", "tailwindcss @tailwindcss/vite"],
      },
      {
        name: "KōraBar",
        key: "korabar",
        base: "/components/korabar/demo",
        routes: {
          dependency: "/components/korabar/dependency",
          props: "/components/korabar/props",
          guide: "/components/korabar/guide",
        },
      },
    ],
  },

  {
    category: "Buttons",
    components: [
      {
        name: "Shiny button",
        key: "shinyButton",
        base: "/components/shinyButton/demo",
        routes: {
          dependency: "/components/shiny-button/dependency",
          props: "/components/shiny-button/props",
          guide: "/components/shiny-button/guide",
        },
      },
      {
        name: 'Smooth in "N" out',
        key: "smooth_In_N_Out",
        base: "/components/smooth-in-n-out/demo",
        routes: {
          dependency: "/components/smooth-in-n-out/dependency",
          props: "/components/smooth-in-n-out/props",
          guide: "/components/smooth-in-n-out/guide",
        },
      },
    ],
  },

  {
    category: "Toast",
    components: [
      {
        name: "Dynamic Toast",
        key: "dynamic-toast",
        base: "/components/dynamic-toast/demo",
        routes: {
          dependency: "/components/dynamic-toast/dependency",
          props: "/components/dynamic-toast/props",
          guide: "/components/dynamic-toast/guide",
        },
      },
      {
        name: "Zoop",
        key: "zoop",
        base: "/components/zoop/demo",
        routes: {
          dependency: "/components/zoop/dependency",
          props: "/components/zoop/props",
          guide: "/components/zoop/guide",
        },
      },
    ],
  },

  {
    category: "Animated Texts",
    components: [
      {
        name: "Split Text",
        key: "split-text",
        base: "/components/split-text/demo",
        routes: {
          dependency: "/components/split-text/dependency",
          props: "/components/split-text/props",
          guide: "/components/split-text/guide",
        },
      },
      {
        name: "Move on scroll",
        key: "move-on-scroll",
        base: "/components/move-on-scroll/demo",
        routes: {
          dependency: "/components/move-on-scroll/dependency",
          props: "/components/move-on-scroll/props",
          guide: "/components/move-on-scroll/guide",
        },
      },
    ],
  },
];
