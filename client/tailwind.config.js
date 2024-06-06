/** @type {import('tailwindcss').Config} */


// sm: 640px — For small devices like mobile phones.
// md: 768px — For medium-sized devices like tablets.
// lg: 1024px — For large devices like laptops.
// xl: 1280px — For extra large devices like large laptops and desktops.
// 2xl: 1536px — This is often used for large desktops and high-resolution displays.

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js, ts, jsx, tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeInUp1500: 'fadeInUp 3s ease-out forwards'
      },
      fontFamily:{
        'raleway': ['Raleway', 'sans-serif']
      },
      fontSize:{
        base: '18px'
      },
      colors:{
        'default': '#b3b8c4'
      }
    },
  },
  plugins: [],
}
