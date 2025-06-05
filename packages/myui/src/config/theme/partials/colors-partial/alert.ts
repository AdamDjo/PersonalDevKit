import { type Config } from 'tailwindcss';

export const alert: Config['theme'] = {
    box: 'var(--theme-text-alert-box-alert-box)',
    'box-surface-hint': 'var(--theme-surface-alert-box-alert-box)',
    'box-surface-error': 'var(--theme-surface-alert-box-alert-box-error)',
    'box-surface-info': 'var(--theme-surface-alert-box-alert-box-info)',
    'box-surface-warning': 'var(--theme-surface-alert-box-alert-box-warning)',
    'box-surface-success': 'var(--theme-surface-alert-box-alert-box-success)',
};
