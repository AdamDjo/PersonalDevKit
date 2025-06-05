import { type Config } from 'tailwindcss';

export const text: Config['theme'] = {
    '50': 'var(--theme-text-text-50)',
    footer: 'var(--theme-text-footer-footer)',
    header: 'var(--theme-text-header-header-default)',
    'header-active': 'var(--theme-text-header-header-active)',
    'offer-tag': 'var(--theme-text-offer-tag-badge)',
    'prim-accent': 'var(--theme-text-primary-accent)',
    tooltip: 'var(--theme-text-tooltip-tooltip)',
    'icon-btn': 'var( --theme-text-button-icon-button-icon)',
    'filter-tabs-default': 'var(--theme-text-filter-tabs-filter-tabs-default)',
    'filter-tabs-selected': 'var(--theme-text-filter-tabs-filter-tabs-selected)',
    'filter-tabs-hover': 'var(--theme-text-filter-tabs-filter-tabs-hover)',
    'textarea-input-field-active':
        'var(--theme-text-textarea-input-field-textarea-input-field-active)',
    'textarea-input-field-disabled':
        'var(--theme-text-textarea-input-field-textarea-input-field-disabled)',
    'textarea-input-field-label':
        'var(--theme-text-textarea-input-field-textarea-input-field-label)',
    'textarea-input-field-label-disabled':
        'var(--theme-text-textarea-input-field-textarea-input-field-label-disabled)',
    'textarea-input-field-hint': 'var(--theme-text-textarea-input-field-textarea-input-field-hint)',
    'textarea-input-field-hint-disabled':
        'var(--theme-text-textarea-input-field-textarea-input-field-disabled)',
    'text-button-link': 'var(--theme-link-link-accent)',
    'text-button-link-hover': 'var(--theme-link-link-accent-hover)',
    'text-button-link-pressed': 'var(--theme-link-link-accent-pressed)',
    'text-button-link-black': 'var(--theme-link-link-default)',
    'text-button-link-black-hover': 'var(--theme-link-link-hover)',
    'text-button-link-black-pressed': 'var(--theme-link-link-pressed)',
};
