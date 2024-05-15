/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      colors: {
        base: {
          title: '#E7EDF4',
          subtitle: '#C4D4E3',
          text: '#AFC2D4',
          span: '#7B96B2',
          label: '#3A536B',
          border: '#1C2F41',
          post: '#112131',
          profile: '#0B1B2B',
          background: '#071422',
          input: '#040F1A',
        },
        brand: {
          blue: '#3294F8',
        },
      },
      spacing: {
        4.5: '1.125rem',
        18: '4.5rem',
        37: '9.25rem',
        74: '18.5rem',
        216: '54rem',
      },
      fontFamily: {
        nunito: '"Nunito", sans-serif',
      },
      lineHeight: {
        small: '130%',
        default: '160%',
      },
    },
  },
  plugins: [],
}
