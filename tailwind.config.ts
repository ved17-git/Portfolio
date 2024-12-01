import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xl: { max: '1279px' },
        lg: { max: '1025px' },
        md: { max: '626px' },
        sm: { max: '530px' },
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        title: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        title: '600',
      },
      keyframes: {
        'up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'up-down': 'up-down 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    nextui(),
  ],
};

export default config;
