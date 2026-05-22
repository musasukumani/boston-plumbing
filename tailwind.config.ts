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
        navy: '#1B2F4E',
        gold: '#E8A020',
        ink: '#0F1C2E',
        brick: '#BF4E22',
        cream: '#F5EFE6',
        'light-bg': '#F5EFE6',
        'brand-text': '#0F1C2E',
        emergency: '#D94F3D',
        'dark-bg': '#0F1C2E',
        'dark-surface': '#162436',
        'dark-border': '#1E3050',
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
