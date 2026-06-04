import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F3B',
        accent: '#C8A96A',
        background: '#FFFFFF',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [],
}

export default config