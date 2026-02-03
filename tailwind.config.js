export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'hot-pink': '#FF69B4',
        'neon-pink': '#FF1493',
        'deep-black': '#0a0a0a',
        'y2k-pink': '#FF69B4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
        'sand-wave': 'sand-wave 8s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
        'blur-pulse': 'blur-pulse 4s ease-in-out infinite',
        'ticket-shine': 'ticket-shine 3s ease-in-out infinite',
      },
      keyframes: {
        'neon-pulse': {
          '0%': { 
            textShadow: '0 0 5px #FF69B4, 0 0 10px #FF69B4, 0 0 20px #FF69B4, 0 0 40px #FF1493',
            filter: 'brightness(1)'
          },
          '100%': { 
            textShadow: '0 0 10px #FF69B4, 0 0 20px #FF69B4, 0 0 40px #FF69B4, 0 0 80px #FF1493, 0 0 120px #FF1493',
            filter: 'brightness(1.2)'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'sand-wave': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'blur-pulse': {
          '0%, 100%': { filter: 'blur(0px)', opacity: '1' },
          '50%': { filter: 'blur(2px)', opacity: '0.8' },
        },
        'ticket-shine': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}