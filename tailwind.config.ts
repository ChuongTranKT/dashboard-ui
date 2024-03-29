import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      purple: '#343C6A',
      black: '#232323',
      blue: '#1814F3',
      light_blue: '#718EBF',
      turquoise: '#16DBAA',
      coral: '#FE5C73',
      gray: '#B1B1B1',
      white: '#fff',
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
}
export default config
