import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // custom colors:
        sage: 'rgb(138 144 133)',
        'light-gray-80': 'rgba(245, 248, 240, 0.8)',
        'light-gray': 'rgb(245, 248, 240)',
        'dusty-brown': 'rgb(71, 60, 53)', // color of profile-pic (photo) shirt, slightly darker
        stone: 'rgb(96, 92, 91)', // color of profile-pic (photo) background

        // rainbow colors:
        'rb-pink': '#ff0066',
        'rb-red': '#ff0800',
        'rb-orange': '#ff6600',
        'rb-yellow': '#ffea00',
        'rb-green': '#00b900',
        'rb-blue': '#0040ff',
        'rb-purple': '#6600ff',

        'btn-text-active': 'rgb(245, 248, 240)',
      },
      backgroundImage: {
        'rainbow-gradient': 'linear-gradient(to top, #ff0066, #ff0800, #ff6600, #ffea00, #00b900, #0040ff, #6600ff)',
        'rainbow-gradient-curved':
          'linear-gradient(to top, #ff0066, #ff0800 5%, #ff6600 10%, #ffea00 45%, #00b900 80%, #0040ff 95%, #6600ff 100%)',
      },
    },
  },

  plugins: [
    typography,
    forms,
    containerQueries,
    function ({ addVariant }: { addVariant: (name: string, definition: string) => void }) {
      // Prevents hover sticking on touch devices
      // NOTE: the following media queries work fine to detect hover properly on iPhones but not on Android devices:
      // (any-hover: none) / (hover: none) / (hover: hover)
      // only the following works on iPhones & Android:
      addVariant('hoverable', '@media (any-hover: hover) and (pointer: fine)');
      addVariant('not-hoverable', '@media (hover: none), (pointer: coarse)');
    },
  ],
} satisfies Config;
