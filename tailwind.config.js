const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        karla: ['Karla', ...defaultTheme.fontFamily.sans],
        inconsolata: ['Inconsolata', ...defaultTheme.fontFamily.mono],
        'dm-sans': ['DM Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary': '#ecbf32',
        'discord': '#5865f2',
        'facebook': '#4267b2',
        'instagram': '#E1306C',
        'youtube': '#FF0000'
      },
    }
	},
}
