// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ["~/assets/css/main.css"],
	modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image"],
	image: {
		format: ["avif", "webp", "png"],
	},
});
