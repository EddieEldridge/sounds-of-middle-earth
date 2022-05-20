import { defineConfig } from 'vite';
import react from 'vite-preset-react';
import vitePluginImp from 'vite-plugin-imp';
import { getThemeVariables } from 'antd/dist/theme';

export default defineConfig({
    root: 'src',
    build: {
        outDir: './dist',
    },
    publicDir: './assets',
    plugins: [
        vitePluginImp({
            libList: [
                {
                    libName: 'antd',
                    style: (name) => `antd/es/${name}/style`,
                },
            ],
        }),
        react({
            reactPluginOptions: {
                // Use React plugin in all *.jsx and *.tsx files
                include: '**/*.{jsx,tsx}',
            }
        })
    ],
    resolve: {
        alias: [
            // { find: '@', replacement: path.resolve(__dirname, 'src') },
            // fix less import by: @import ~
            // https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
            { find: /^~/, replacement: '' },
        ],
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                // modifyVars: getThemeVariables({
                //     'dark': false,
                //     'primary-color': '205, 154, 1'
                // })
            },
        },
    }
});