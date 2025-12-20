/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        premium: {
          dark: '#050505',
          purple: '#8B5CF6',
          pink: '#EC4899',
          blue: '#3B82F6',
          accent: '#A78BFA'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'vapor': 'vapor 10s linear infinite',
        'vapor-drift': 'vapor-drift 12s infinite',
        'vapor-ring': 'vapor-ring 8s infinite',
        'wave': 'wave 15s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(139, 92, 246, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(236, 72, 153, 0.8)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        vapor: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        'vapor-drift': {
          '0%': { transform: 'translateY(20%) scale(0.8)', opacity: '0' },
          '20%': { opacity: '0.4' },
          '80%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-20%) scale(1.2)', opacity: '0' },
        },
        'vapor-ring': {
          '0%': { transform: 'translateY(0) scale(0.5)', opacity: '0' },
          '10%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-100px) scale(2)', opacity: '0' }
        },
        'wave': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      }
    },
  },
}
