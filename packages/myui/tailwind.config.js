import { tailwindConfig } from './src/config/tailwind-global-config';

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'myui-',
  corePlugins: {
    preflight: false,
  },
  ...tailwindConfig,
};
