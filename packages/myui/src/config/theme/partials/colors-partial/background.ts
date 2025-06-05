import { type Config } from 'tailwindcss';

export const background: Config['theme'] = {
    footer: 'var(--theme-background-footer-footer)',
    global: 'var(--theme-background-background)',
    header: 'var(--theme-background-header-header)',
    'icon-btn': 'var(--theme-background-button-icon-button-icon-primary)',
    sidebar: 'var(--theme-background-button-icon-button-icon-secondary)',
    'sidebar-active': 'var(--theme-background-button-icon-button-icon-primary)',
    textarea: 'var(--theme-surface-textarea-input-field-textarea-input-field)',
    'textarea-active': 'var(--theme-surface-textarea-input-field-textarea-input-field-active)',
    'textarea-disable': 'var(--theme-surface-textarea-input-field-textarea-input-field-disabled)',
    countdown: 'var(--global-palette-yellow-20)',
};
