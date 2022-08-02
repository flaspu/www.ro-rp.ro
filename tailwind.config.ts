import { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Config> {
  content: ['./src/**/*.{ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        karla: ['Karla', ...defaultTheme.fontFamily.sans],
        inconsolata: ['Inconsolata', ...defaultTheme.fontFamily.mono],
        'dm-sans': ['DM Sans', ...defaultTheme.fontFamily.sans]
      }
    }
	},
}
