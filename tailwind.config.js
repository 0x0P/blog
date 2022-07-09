module.exports = {
  darkMode: ['class', '[theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  important : true,
  theme: {
    extend: {
      colors: {
        whitesmoke: '#f5f5f5',
        gray: '#151515',
        gray2: '#111',
        pcntpink: '#ff6974',
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
