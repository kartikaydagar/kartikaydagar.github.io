/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'vortex-in': 'vortexIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'vortex-out': 'vortexOut 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        vortexIn: {
          '0%': { transform: 'scale(0.8) rotate(-10deg)', opacity: '0', filter: 'blur(10px)' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1', filter: 'blur(0)' },
        },
        vortexOut: {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '1', filter: 'blur(0)' },
          '100%': { transform: 'scale(1.2) rotate(10deg)', opacity: '0', filter: 'blur(10px)' },
        },
      },
    },
  },
  plugins: [],
}
