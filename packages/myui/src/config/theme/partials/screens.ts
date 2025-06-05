import { type Config } from 'tailwindcss';

export const screens: Config['theme'] = {
    // Variables doesn't work with Media Query
    xs: '375px',
    sm: '800px',
    md: '1024px',
    lg: '1440px',
    xlg: '1600px',
    xxlg: '1920px',
};
