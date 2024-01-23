import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    /*Allow LAN access*/
    server: {
        open: true,
        port: 3000,
        host: '0.0.0.0'
    },
    plugins: [react()],
})
