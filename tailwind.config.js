/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import aspectRatioPlugin from '@tailwindcss/aspect-ratio';
import containerQueriesPlugin from '@tailwindcss/container-queries';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
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
