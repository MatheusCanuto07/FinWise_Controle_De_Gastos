import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

	plugins: [
    typography,
    require('daisyui'),
  ]
} satisfies Config;
