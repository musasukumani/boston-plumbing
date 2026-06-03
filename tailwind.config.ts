import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B3D91',
        gold: '#4AA3FF',
        ink: '#4A5568',
        brick: '#FF9E2C',
        cream: '#FFFFFF',
        'light-bg': '#FFFFFF',
        'brand-text': '#4A5568',
        emergency: '#FF9E2C',
        'dark-bg': '#0B3D91',
        'dark-surface': '#0A3579',
        'dark-border': '#08427B',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
