/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FBF6F1', 2: '#F6EEE6' },
        ink: { DEFAULT: '#D96B8A', soft: '#6B5F57', faint: '#9A8D84' },
        rose: { DEFAULT: '#E86A8A', deep: '#CE4E71', soft: '#FBE4EB' },
        peach: { DEFAULT: '#F2B98D', soft: '#FCEBDB', deep: '#DE8F4E' },
        green: { DEFAULT: '#7FB08A', soft: '#E3F0E6', deep: '#4E8A5C' },
        gold: { DEFAULT: '#E4AC4C', soft: '#FAF0DC' },
      },
      fontFamily: {
        display: ['"Archivo Black"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 16px rgba(42,35,32,.06)',
        card: '0 14px 40px rgba(42,35,32,.10)',
        lift: '0 28px 70px rgba(42,35,32,.14)',
        rose: '0 10px 28px rgba(224,100,138,.35)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-13px)' } },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        beat: { '0%,100%': { transform: 'scale(1)', opacity: '1' }, '50%': { transform: 'scale(1.5)', opacity: '.55' } },
        breathe: { '0%,100%': { transform: 'scale(.82)' }, '50%': { transform: 'scale(1.08)' } },
        dash: { to: { strokeDashoffset: '-24' } },
        tdot: { '0%,100%': { transform: 'translateY(0)', opacity: '.4' }, '50%': { transform: 'translateY(-5px)', opacity: '1' } },
        msgin: { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'none' } },
        menin: { from: { opacity: '0', transform: 'translateY(-12px)' }, to: { opacity: '1', transform: 'none' } },
        fadein: { from: { opacity: '0' }, to: { opacity: '1' } },
        modalin: { from: { opacity: '0', transform: 'translateY(30px) scale(.96)' }, to: { opacity: '1', transform: 'none' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 7.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        beat: 'beat 1.1s ease-in-out infinite',
        breathe: 'breathe 8s ease-in-out infinite',
        dash: 'dash 1.4s linear infinite',
        tdot: 'tdot 1.2s infinite',
        msgin: 'msgin .5s cubic-bezier(.22,1,.36,1) both',
        menin: 'menin .4s cubic-bezier(.22,1,.36,1)',
        fadein: 'fadein .35s',
        modalin: 'modalin .5s cubic-bezier(.22,1,.36,1)',
      },
      transitionTimingFunction: { smooth: 'cubic-bezier(.22,1,.36,1)' },
    },
  },
  plugins: [],
}
