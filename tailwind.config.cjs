/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        onNeutralBg: 'var(--onNeutralBg)',
        neutralBg: 'var(--neutralBg)',
        onPrimaryBg: 'var(--onPrimaryBg)',
        primaryBg: 'var(--primaryBg)',
        primary: 'var(--primary)'
      }
    }
  },
  plugins: [require('@headlessui/tailwindcss')]
}
