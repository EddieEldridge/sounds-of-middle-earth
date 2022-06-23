
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    build: {
        outDir: '../dist',
        emptyOutDir: true
    },
    publicDir: './src/assets/',
    plugins: [
        react(),
        tsconfigPaths(),
        vitePluginImp({
            libList: [
                {
                    libName: 'antd',
                    style: (name: any) => `antd/es/${name}/style`,
                },
            ],
        }),
    ],
    resolve: {
        alias: [
            { find: /^~/, replacement: '' },
        ],
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    'primary-color': '#cd9a01'
                },
                darkMode: true
            },
        },
    },
});