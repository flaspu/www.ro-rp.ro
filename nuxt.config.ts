import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css', '@fortawesome/fontawesome-svg-core/styles.css'],
    build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
                    autoprefixer: {},
				}
			}
		}
	},
})
