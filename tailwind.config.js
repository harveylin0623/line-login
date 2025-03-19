/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    variables: {
      DEFAULT: {
        colors: {

        }
      }
    },
    // darkVariables: {
    //   DEFAULT: {
    //     colors: {

    //     }
    //   }
    // },
    extend: {
      colors: {
        'test-1': 'var(--color-primary)',
        'test-2': 'var(--color-danger)'
      }
    },
  },
  // plugins: [
  //   require('@mertasan/tailwindcss-variables')
  // ],
}