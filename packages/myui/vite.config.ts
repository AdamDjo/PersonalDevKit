import react from '@vitejs/plugin-react';
// import esbuild from 'esbuild';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import svgr from 'vite-plugin-svgr';

/* Workaround to minify output files in ES Module mode */
/* The optimization doesn't work perfectly with injected CSS but it will be better in the version without injected CSS */
// const minifyJs = () => ({
// 	name: 'minify',
// 	closeBundle: () => {
// 		esbuild.buildSync({
// 			entryPoints: ['./dist/index.js'],
// 			minify: true,
// 			allowOverwrite: true,
// 			outfile: './dist/index.js'
// 		});
// 		esbuild.buildSync({
// 			entryPoints: ['./dist/index.umd.cjs'],
// 			minify: true,
// 			allowOverwrite: true,
// 			outfile: './dist/index.umd.cjs'
// 		});
// 	}
// });

export default defineConfig({
  root: resolve(__dirname),
  resolve: {
    alias: {
      // TS
      '@atoms': resolve(__dirname, 'src', 'components', 'atoms'),
      '@custom-types': resolve(__dirname, 'src', 'types'),
      '@helpers': resolve(__dirname, 'src', 'helpers'),
      '@icons': resolve(__dirname, 'src', 'components', 'atoms', 'icons'),
      Svg: resolve(__dirname, 'src', 'components', 'atoms', 'icons', 'svg'),
      // SCSS
      Styles: resolve(__dirname, 'assets', 'scss'),
      Fonts: resolve(__dirname, 'assets', 'fonts'),
      // Legacy
      '@components': resolve(__dirname, 'src', 'components'),
      '@hooks': resolve(__dirname, 'src', 'hooks'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'shared-ui-components',
      fileName: 'index',
    },
    outDir: resolve('dist'),
    minify: true,
    cssMinify: true,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'react-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    svgr(),
    dts({
      outDir: ['dist'],
      insertTypesEntry: true,
      exclude: ['src/helpers', '**/*.test.tsx', '**/*.stories.tsx', '**/*.test.ts', '**/tests-setup.ts'],
    }),
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, 'assets/scss'),
          dest: resolve(__dirname, 'dist'),
        },
        {
          src: resolve(__dirname, 'assets/fonts'),
          dest: resolve(__dirname, 'dist'),
        },
      ],
    }),
    cssInjectedByJsPlugin(),
    // minifyJs(),
  ],
});
