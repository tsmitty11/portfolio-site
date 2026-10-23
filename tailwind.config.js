/** @type {import('tailwindcss').Config} */
const sansStack = [
  'Inter',
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'Noto Sans',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Noto Color Emoji'
];

module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        // Logo-color ("gunmetal") scale. DEFAULT/content defer to the daisyUI theme
        // so `btn-primary`, `bg-primary`, etc. stay in sync with the theme below.
        primary: {
          DEFAULT: 'var(--fallback-p,oklch(var(--p)/<alpha-value>))',
          content: 'var(--fallback-pc,oklch(var(--pc)/<alpha-value>))',
          "50":"#f4f6f7",
          "100":"#e3e8ea",
          "200":"#c9d2d6",
          "300":"#a3b2b9",
          "400":"#4a5f69",
          "500":"#22333b",
          "600":"#22333b",
          "700":"#1c2a31",
          "800":"#172228",
          "900":"#0d1418",
          "950":"#080c0f"
        },
        // Legacy brand tokens, remapped for the light theme. Markdown content still uses these.
        gunmetal: '#222222',
        whiteSmoke: '#F7F7F7',
        coral: '#22333B',
        platinum: '#DDDDDD',
      },
      aspectRatio: {
        '1.29': '1.29', // Adds aspect-[1.29] for a 413:320 ratio
      },
      boxShadow: {
        'airbnb': '0 6px 16px rgba(0, 0, 0, 0.12)',
        'airbnb-sm': '0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
      },
    },
    fontFamily: {
      'body': sansStack,
      'sans': sansStack,
      'heading': ['"Mona Sans"', ...sansStack],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        tomsmith: {
          'primary': '#22333b',
          'primary-content': '#ffffff',
          'secondary': '#222222',
          'secondary-content': '#ffffff',
          'accent': '#22333b',
          'accent-content': '#ffffff',
          'neutral': '#222222',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f7f7f7',
          'base-300': '#dddddd',
          'base-content': '#222222',
          'info': '#428bff',
          'success': '#008a05',
          'warning': '#ffb400',
          'error': '#c13515',
          '--rounded-box': '0.75rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '1rem',
          '--animation-btn': '0.2s',
          '--btn-focus-scale': '0.97',
          '--border-btn': '1px',
        },
      },
    ],
    darkTheme: 'tomsmith',
    logs: false,
  },
}
