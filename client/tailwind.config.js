module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add any other file paths that might contain Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        'segoe-ui': ['"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      colors: {
        blue: {
          600: '#2563eb', // You can adjust this to match your preferred blue shade
        },
        gray: {
          700: '#374151',
          900: '#111827',
        },
      },
      boxShadow: {
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}