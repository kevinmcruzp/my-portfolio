/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#E8E8E8',
        secondary: '#C3CAD5',
        tertiary: '#F0EBD8',
      },
      backgroundColor: {
        bg: '#0C1220',
        bg_secondary: '#1D2D44',
        divider: '#3E5C76',
        hover:'#748CAB'
      },
      borderColor: {
        hover:'#748CAB'
      }
    },
  },
  plugins: [],
}
