// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // css
  css: [
    "~/assets/css/main.css",
    "~/assets/fonts/fonts.css",
    "~/assets/css/tailwind.css",
  ],

  modules: [
    // https://nuxt.com/modules/eslint
    "@nuxtjs/eslint-module",
    // https://nuxt.com/modules/icon
    "nuxt-icon",
    // https://pinia.vuejs.org/ssr/nuxt.html
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
    // https://tailwindcss.nuxtjs.org
    ["@nuxtjs/tailwindcss", { viewer: false }],
    // https://color-mode.nuxtjs.org/
    [
      "@nuxtjs/color-mode",
      {
        classPrefix: "",
        preference: "system",
        fallback: "light",
      },
    ],
    // https://vueuse.org/nuxt/README.html
    ["@vueuse/nuxt", {}],
    // https://v8.i18n.nuxtjs.org/
    [
      "@nuxtjs/i18n",
      {
        langDir: "locales",
        locales: [
          { code: "en", iso: "en-US", file: "en.json", name: "English" },
        ],
        strategy: "prefix_except_default",
        defaultLocale: "en",
        lazy: true,
        // todo set the base url before deploying to production
      },
    ],
    // https://nuxt.com/modules/device
    "@nuxtjs/device",
    // https://v1.image.nuxtjs.org
    "@nuxt/image",
    // https://nuxt.com/modules/robots
    "@nuxtjs/robots",
    // https://google-fonts.nuxtjs.org
    [
      "@nuxtjs/google-fonts",
      {
        families: {},
        download: true,
        outputDir: "assets/fonts",
        fontsDir: "",
        stylePath: "fonts.css",
      },
    ],
    // https://nuxtseo.com/sitemap/
    "nuxt-simple-sitemap",
    // https://nuxt.com/modules/security
    "nuxt-security",
    // https://nuxt.com/modules/headlessui
    ["nuxt-headlessui", { prefix: "hl" }],
    // https://nuxt.com/modules/time
    "nuxt-time",
    // https://nuxt.com/modules/vitest
    "nuxt-vitest",
  ],
  devtools: { enabled: true },
});
