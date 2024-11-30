/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-slower': 'floatSlower 8s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0)',
            filter: 'drop-shadow(0 20px 20px rgba(255,0,0,0.15))'
          },
          '50%': { 
            transform: 'translateY(-10px)',
            filter: 'drop-shadow(0 30px 30px rgba(255,0,0,0.25))'
          },
        },
        floatSlow: {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(12deg)',
            filter: 'drop-shadow(0 15px 15px rgba(255,0,0,0.1))'
          },
          '50%': { 
            transform: 'translateY(-15px) rotate(12deg)',
            filter: 'drop-shadow(0 25px 25px rgba(255,0,0,0.2))'
          },
        },
        floatSlower: {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(-12deg)',
            filter: 'drop-shadow(0 15px 15px rgba(0,0,255,0.1))'
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(-12deg)',
            filter: 'drop-shadow(0 25px 25px rgba(0,0,255,0.2))'
          },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(255,0,0,0.3)',
            opacity: 0.8
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(255,0,0,0.5)',
            opacity: 1
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(255,0,0,0.3)',
        'glow': '0 0 20px rgba(255,0,0,0.4)',
        'glow-lg': '0 0 30px rgba(255,0,0,0.5)',
        'glow-xl': '0 0 40px rgba(255,0,0,0.6)',
      },
      dropShadow: {
        'glow': '0 0 20px rgba(255,0,0,0.3)',
        'glow-lg': '0 0 30px rgba(255,0,0,0.4)',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
    },
  },
  plugins: [],
}