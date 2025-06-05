import { type Config } from 'tailwindcss';

export const statusBadge: Config['theme'] = {
    'badge-default': 'var(--theme-surface-alert-box-alert-box)',
    'badge-critical': 'var(--theme-surface-alert-box-alert-box-error)',
    'badge-success': 'var(--theme-surface-alert-box-alert-box-success)',
    'badge-warning': 'var(--theme-surface-alert-box-alert-box-warning)',
    'badge-info': 'var(--theme-surface-alert-box-alert-box-info)',
    'pip-default': 'var(--theme-background-icon-alert-box-alert-box)',
    'pip-critical': 'var(--theme-brand-semantic-error)',
    'pip-success': 'var(--theme-brand-semantic-success)',
    'pip-warning': 'var(--theme-brand-semantic-warning)',
    'pip-info': 'var(--theme-brand-semantic-info)',
};
