/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,jsx,js}'];
export const theme = {
  fontFamily: {
    nunito: ['Nunito', 'serif'],
    mulish: ['Mulish', 'sans-serif'],
    noto: ['Noto Sans', 'sans-serif'],
  },
  screens: {
    450: '450px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  backgroundImage: {
    error: "url('/public/images/404.svg')",
    poster: "url('/public/images/poster.png')",
    cadaster: "url('/public/images/poster2.png')",
    homePoster: "url('/public/images/bookshelf.jpg')",
  },
};
export const plugins = [];
