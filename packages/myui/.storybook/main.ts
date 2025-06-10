import type { StorybookConfig } from '@storybook/react-vite';
import { InlineConfig, mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  docs: { autodocs: true },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    '@storybook/addon-actions',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: '@storybook/react-vite',
  staticDirs: [{ from: '../assets/fonts', to: '/Fonts' }],
  async viteFinal(config: InlineConfig) {
    return mergeConfig(config, {
      build: {
        chunkSizeWarningLimit: 1200,
        rollupOptions: {
          output: {
            assetFileNames: 'assets/[name][extname]',
          },
        },
      },
    });
  },
};
export default config;
