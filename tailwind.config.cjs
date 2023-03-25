/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 3px 6px #00000029',
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -0.5rem, 0)',
          },
        },
      },
      animation: {
        loader: 'loader 0.4s infinite alternate',
      },
    },
    fontFamily: {
      bitter: ['Bitter', 'serif'],
      inter: ['Inter', 'serif'],
    },
    colors: {
      transparent: 'rgb(0, 0, 0, 0)',
      white: '#ffffff',
      black: '#000000',
      'wave-blue': '#003d50',
      'mist-gray': '#edf1f3',
      gray: '#858690',
      'google-blue': '#4c8bf5',
      'sapphire-blue': '#47A1ADCC',
      'jade-green': '#6B9E78CC',
      'flamingo-pink': '#f2617a',
      'flamingo-pink-300': '#efc2cb',
      'flamingo-pink-100': '#F2617A0D',
      'black-transparent': 'rgb(0, 0, 0, 0.2)',
      'white-transparent': 'rgb(255, 255, 255, 0.6)',
    },
  },
  plugins: [],
};
