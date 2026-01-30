import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/homemedcoftecm/", // <--- TEM QUE SER EXATAMENTE O NOME DO REPOSITÓRIO
})