import { default as daisyui } from 'daisyui';

/** @type {import('tailwindcss').Config} */
export const content = [
  './index.html','./src/**/*.{js,ts,jsx,tsx}', // Add this line to include all JSX/TSX files
];
export const theme = {
  extend: {},
};
export const plugins = [
  daisyui,
];
