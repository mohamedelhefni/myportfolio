import getRoutes from "./utils/getRoutes";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Mohamed Elhefni",

    htmlAttrs: {
      lang: "en",
      class: ""
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "My name is Mohamed Elhefni (@hefni101) I am a software engineer 💻, code-addicted person ❤️, and a problem solver 💡.I love to build software that makes my life easier and automates the boring stuff with programming. I'm Interested in Problem Solving and Back-End Engineering." },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap"
      },
      {
        rel: "stylesheet",
        href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;700&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  generate: {
    fallback: true
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "nuxt-vite",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "@nuxtjs/sitemap"],
  //site map
  sitemap: {
    hostname: "https://hefni101.netlify.app",
    routes() {
      return getRoutes();
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
