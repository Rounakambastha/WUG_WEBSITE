/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#b3d9ff',
          500: '#0066CC',
          600: '#0052a3',
          700: '#003d7a',
          900: '#001429',
        },
        secondary: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          500: '#1A1A1A',
          600: '#151515',
          700: '#101010',
          900: '#000000',
        },
        accent: {
          50: '#fff0f0',
          100: '#ffd6d6',
          500: '#FF6B6B',
          600: '#ff5252',
          700: '#f44336',
        },
        dark: {
          bg: '#121212',
          surface: '#1e1e1e',
          text: '#f5f5f5',
        }
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': '3rem',
        'h2': '2.5rem',
        'h3': '2rem',
        'body': '1rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #0066CC' },
          '100%': { boxShadow: '0 0 20px #0066CC, 0 0 30px #0066CC' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        }
      }
    },
  },
  plugins: [],
};