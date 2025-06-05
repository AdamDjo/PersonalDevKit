import { type Config } from 'tailwindcss';
import {
    alert,
    background,
    border,
    buttons,
    global,
    progressbar,
    statusBadge,
    table,
    tabItem,
    text,
} from './colors-partial';

export const colors: Config['theme'] = {
    alert,
    background,
    border,
    btn: buttons,
    global,
    progressbar,
    'tab-item': tabItem,
    tooltip: 'var(--theme-surface-tooltip-tooltip)',
    txt: text,
    status: statusBadge,
    table,
};
