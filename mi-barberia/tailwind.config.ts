import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Aquí está la clave: Buscar directamente en la carpeta "app"
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;