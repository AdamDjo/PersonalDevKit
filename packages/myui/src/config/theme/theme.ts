import { type Config } from 'tailwindcss';
import {
    borderRadius,
    borderWidth,
    colors,
    fontFamily,
    fontSize,
    fontWeight,
    gridTemplateColumns,
    letterSpacing,
    lineHeight,
    padding,
    screens,
    spacing,
} from './partials';

export const theme: Config['theme'] = {
    screens,
    extend: {
        colors,
        borderRadius,
        borderWidth,
        gridTemplateColumns,
        fontFamily,
        fontSize,
        fontWeight,
        letterSpacing,
        lineHeight,
        padding,
        spacing,
    },
};
