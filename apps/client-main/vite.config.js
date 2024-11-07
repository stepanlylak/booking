import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, transformWithEsbuild } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@root': resolve(__dirname, './src/root'),
      '@libs': resolve(__dirname, './src/libs'),
      '@api': resolve(__dirname, './src/api'),
      '@pages': resolve(__dirname, './src/pages'),
      '@services': resolve(__dirname, './src/services'),
      '@constants': resolve(__dirname, './src/constants')
    }
  },
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;

        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic'
        });
      }
    },
    nodePolyfills({ protocolImports: true }),
    react()
  ],
  server: {
    port: 7000,
    proxy: {
      '/api': 'http://localhost:7070'
    }
  },
  preview: {
    port: 7080
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx'
      }
    }
  }
});
