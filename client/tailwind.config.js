/** @type {import('tailwindcss').Config} */

// sm: 640px — For small devices like mobile phones.
// md: 768px — For medium-sized devices like tablets.
// lg: 1024px — For large devices like laptops.
// xl: 1280px — For extra large devices like large laptops and desktops.
// 2xl: 1536px — This is often used for large desktops and high-resolution displays.

export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js, ts, jsx, tsx}',
    ],
    theme: {
        extend: {
            screens: {
                msm: '480px',
                xsm: '400px',
            },
            backgroundImage: {
                'hero-background': "url('/img/space-background.jpg')",
            },
            spacing: {
                'calc-50-min-150px': 'calc(50% - 75px)',
                'calc-75-min-150px': 'calc(75% - 112px)',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(50px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                fade: {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
            },
            animation: {
                fadeInUp: 'fadeInUp 1.6s ease-out forwards',
                fade1s: 'fade 1s ease-in-out forwards',
                fade2s: 'fade 2s ease-in-out forwards',
            },
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
            },
            fontSize: {
                base: '18px',
            },
            colors: {
                default: '#b3b8c4',
                'small-default': '#dbe7fa',
            },
        },
    },
    plugins: [],
};
