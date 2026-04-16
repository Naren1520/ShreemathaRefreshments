import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#050a05',
        deep: '#0a140a',
        forest: '#0d1f0d',
        'green-dark': '#1a3d1a',
        'green-mid': '#2d6b2d',
        green: '#3d8b3d',
        'green-light': '#5cb85c',
        lime: '#7ec850',
        gold: '#c8a84b',
        'gold-light': '#e8c96a',
        cream: '#f5f0e8',
        white: '#fafdf7',
        'text-muted': '#6b8f6b'
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        dmsans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1.5s infinite',
        fadeDown: 'fadeDown 1s 0.2s both',
        fadeUp: 'fadeUp 1s 0.4s both',
        fadeLeft: 'fadeLeft 1s 0.4s both',
        fadeRight: 'fadeRight 1s 0.4s both',
        scrollLine: 'scrollLine 2s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite',
        sway: 'sway 6s ease-in-out infinite',
        swayReverse: 'sway 8s ease-in-out infinite reverse',
        pulseCustom: 'pulseCustom 4s ease-in-out infinite',
        leafFall: 'leafFall linear infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scrollLine: {
          '0%, 100%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(0.4)', transformOrigin: 'bottom' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg) scale(1)' },
          '50%': { transform: 'rotate(3deg) scale(1.03)' },
        },
        pulseCustom: {
          '0%, 100%': { transform: 'translateX(-50%) scale(1)', opacity: '0.8' },
          '50%': { transform: 'translateX(-50%) scale(1.1)', opacity: '1' },
        },
        leafFall: {
          '0%': { opacity: '0', transform: 'translateY(-40px) rotate(0deg)' },
          '10%': { opacity: '0.25' },
          '90%': { opacity: '0.15' },
          '100%': { opacity: '0', transform: 'translateY(110vh) rotate(720deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
