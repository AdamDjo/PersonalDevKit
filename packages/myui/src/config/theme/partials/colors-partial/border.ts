import { type Config } from 'tailwindcss';

export const border: Config['theme'] = {
    accent: 'var(--theme-border-border-accent)',
    active: 'var(--theme-border-border-active)',
    footer: 'var(--theme-border-footer-footer)',
    global: 'var(--theme-border-border)',
    header: 'var(--theme-border-header-header)',
    'offer-tag': 'var(--theme-border-offer-tag-offer-tag)',
    opaque: 'var(--theme-border-border-opaque)',
    sidebar: 'var(--theme-border-border)',
    'sidebar-active': 'var(--theme-border-border-active)',
    'sidebar-hover': 'var(--theme-border-border-opaque)',
    error: 'var(--theme-border-border-error)',
    warning: 'var(--theme-border-border-warning)',
    success: 'var(--theme-border-border-success)',
    textarea: 'var(--theme-border-textarea-input-field-textarea-input-field-default)',
    'textarea-active': 'var(--theme-border-textarea-input-field-textarea-input-field-active)',
    'textarea-disable': 'var(--theme-border-textarea-input-field-textarea-input-field-disabled)',
};
