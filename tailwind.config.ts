import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nature-green': '#5a8f5a',
        'nature-teal': '#6bb3c0',
        'nature-dark': '#000000',
        'nature-light': '#f5f5f5',
      },
    },
  },
  plugins: [],
}
export default config

