/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/theme");
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", 
	"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {    
    extend: {
      colors: {
        primary: '#ff5722', // Color primario
        secondary: '#4caf50', // Color secundario
        // Puedes añadir más colores personalizados aquí
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },      
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};
