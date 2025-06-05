import { type Config } from 'tailwindcss';
import { theme } from './theme/theme';

export const tailwindConfig: Config = {
    content: ['./src/**/*.{tsx,ts,jsx,js}'],
    theme,
    plugins: [],
};
