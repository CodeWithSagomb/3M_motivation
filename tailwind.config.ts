import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                petrol: {
                    DEFAULT: '#0A192F',
                    50: '#1a2e4d',
                    100: '#122b51',
                },
                gold: {
                    DEFAULT: '#C5A059',
                    dark: '#A6803F',
                    light: '#D4AF37',
                },
                offwhite: '#F8F9FA',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'serif'],
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3rem',
            },
            animation: {
                'float': 'float 4s ease-in-out infinite',
                'premium-zoom': 'premium-zoom-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'premium-slide': 'premium-slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'backdrop-fade': 'backdrop-fade 0.4s ease-out forwards',
            },
            keyframes: {
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'premium-zoom-in': {
                    '0%': { opacity: '0', transform: 'scale(0.9) translateY(20px)' },
                    '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
                },
                'premium-slide-up': {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'backdrop-fade': {
                    '0%': { opacity: '0', backdropFilter: 'blur(0px)' },
                    '100%': { opacity: '1', backdropFilter: 'blur(8px)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
