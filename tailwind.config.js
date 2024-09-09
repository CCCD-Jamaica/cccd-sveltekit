/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import aspectRatioPlugin from '@tailwindcss/aspect-ratio';
import containerQueriesPlugin from '@tailwindcss/container-queries';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '900px',
      xl: '1280px',
      '2xl': '1536px',
    },
      extend: {
        fontFamily: {
          'noto-serif': ['Noto Serif', 'sans-serif'],
        },
      translate: {
        110: '30rem',
        120: '34rem',
        130: '38rem',
        140: '42rem',
        145: '44rem',
        150: '46rem',
        160: '50rem',
      },
      colors: {
        // Color palette generated with Tailwind CSS Color Generate: https://uicolors.app/create.
        // Colors based on the CCCD Jamaica logo and Jamaican flag.
        // The following colors based on the CCCD logo:
        // Real color name: falu-red.
        red: {
          50: 'hsl(0, 100%, 97%)',
          100: 'hsl(358, 100%, 94%)',
          200: 'hsl(358, 100%, 89%)',
          300: 'hsl(358, 100%, 81%)',
          400: 'hsl(358, 100%, 70%)',
          500: 'hsl(358, 98%, 60%)',
          600: 'hsl(358, 84%, 51%)',
          700: 'hsl(358, 86%, 42%)',
          800: 'hsl(358, 81%, 35%)',
          900: 'hsl(358, 73%, 29%)',
          950: 'hsl(358, 87%, 15%)',
        },
        // Real color name: chambray.
        blue: {
          50: 'hsl(222, 63%, 97%)',
          100: 'hsl(217, 62%, 93%)',
          200: 'hsl(218, 63%, 87%)',
          300: 'hsl(215, 62%, 78%)',
          400: 'hsl(217, 60%, 68%)',
          500: 'hsl(221, 58%, 60%)',
          600: 'hsl(225, 53%, 53%)',
          700: 'hsl(228, 49%, 48%)',
          800: 'hsl(230, 45%, 40%)',
          900: 'hsl(228, 42%, 33%)',
          950: 'hsl(229, 36%, 21%)',
        },
        // Real color name: clay-creek.
        gold: {
          50: 'hsl(50, 25%, 95%)',
          100: 'hsl(56, 25%, 88%)',
          200: 'hsl(52, 25%, 77%)',
          300: 'hsl(50, 26%, 64%)',
          400: 'hsl(48, 25%, 53%)',
          500: 'hsl(46, 24%, 45%)',
          600: 'hsl(40, 25%, 40%)',
          700: 'hsl(36, 24%, 33%)',
          800: 'hsl(31, 21%, 29%)',
          900: 'hsl(29, 19%, 26%)',
          950: 'hsl(26, 22%, 14%)',
        },
        // The following colors based on the Jamaican flag:
        // Real color name: salem.
        green: {
          50: 'hsl(145, 90%, 96%)',
          100: 'hsl(144, 84%, 90%)',
          200: 'hsl(146, 82%, 80%)',
          300: 'hsl(150, 76%, 67%)',
          400: 'hsl(152, 68%, 52%)',
          500: 'hsl(154, 90%, 39%)',
          600: 'hsl(155, 100%, 30%)',
          700: 'hsl(157, 100%, 23%)',
          800: 'hsl(157, 94%, 20%)',
          900: 'hsl(158, 90%, 16%)',
          950: 'hsl(161, 96%, 9%)',
        },
        // Real color name: selective-yellow.
        yellow: {
          50: 'hsl(45, 100%, 96%)',
          100: 'hsl(46, 100%, 89%)',
          200: 'hsl(46, 100%, 77%)',
          300: 'hsl(44, 100%, 65%)',
          400: 'hsl(41, 100%, 55%)',
          500: 'hsl(36, 95%, 50%)',
          600: 'hsl(30, 98%, 44%)',
          700: 'hsl(24, 94%, 37%)',
          800: 'hsl(20, 85%, 31%)',
          900: 'hsl(19, 81%, 26%)',
          950: 'hsl(19, 94%, 14%)',
        },
        // Real color name: dune.
        gray: {
          50: 'hsl(60, 8%, 95%)',
          100: 'hsl(60, 8%, 88%)',
          200: 'hsl(50, 10%, 77%)',
          300: 'hsl(50, 10%, 64%)',
          400: 'hsl(47, 10%, 53%)',
          500: 'hsl(46, 9%, 47%)',
          600: 'hsl(42, 10%, 40%)',
          700: 'hsl(34, 10%, 33%)',
          800: 'hsl(32, 9%, 29%)',
          900: 'hsl(27, 7%, 26%)',
          950: 'hsl(26, 8%, 16%)',
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    formsPlugin,
    typographyPlugin,
    aspectRatioPlugin,
    containerQueriesPlugin,
  ],
}
