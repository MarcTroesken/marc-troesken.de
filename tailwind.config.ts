import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0b',
        'bg-secondary': '#111113',
        'bg-card': '#161618',
        'accent': {
          DEFAULT: '#c9a227',
          light: '#e8c547',
          subtle: 'rgba(201, 162, 39, 0.1)',
        },
        'text-primary': '#fafafa',
        'text-secondary': '#888888',
        'text-muted': '#555555',
        'border': {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.15)',
        },
      },
      fontFamily: {
        'serif': ['Instrument Serif', 'serif'],
        'sans': ['Space Grotesk', 'sans-serif'],
        'display': ['Syne', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c9a227 0%, #e8c547 50%, #c9a227 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-scale': 'fadeScale 1s ease forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
        'pulse-dot': 'pulse 2s ease infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeScale: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
