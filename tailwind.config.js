/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import aspectRatioPlugin from '@tailwindcss/aspect-ratio';
import containerQueriesPlugin from '@tailwindcss/container-queries';

export default {
  darkMode: ["class"],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: ["dark"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '900px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: [...fontFamily.sans],
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
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)"
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
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
