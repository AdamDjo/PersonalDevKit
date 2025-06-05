import { type Config } from 'tailwindcss';

export const buttons: Config['theme'] = {
    primary: 'var(--theme-background-button-primary-accent)',
    'primary-text': 'var(--theme-text-button-primary-primary)',
    'primary-hov': 'var(--theme-background-button-primary-accent-hover)',
    'primary-active': 'var(--theme-background-button-primary-accent-pressed)',
    secondary: 'var(--theme-background-button-secondary-secondary)',
    'secondary-text': 'var(--theme-text-button-secondary-secondary)',
    'secondary-hov': 'var(--theme-background-button-secondary-secondary-hover)',
    'secondary-active': 'var(--theme-background-button-secondary-secondary-pressed)',
    tertiary: 'var(--theme-background-button-tertiary-tertiary)',
    'tertiary-text': 'var(--theme-text-button-tertiary-tertiary)',
    'tertiary-hov': 'var(--theme-background-button-tertiary-tertiary-hover)',
    'tertiary-active': 'var(--theme-background-button-tertiary-tertiary-pressed)',
    text: 'var(--theme-text-button-text-accent-default)',
    'text-hov': 'var(--theme-text-button-text-accent-hover)',
    'text-active': 'var(--theme-text-button-text-accent-pressed)',
    'tabs-default': 'var(--theme-text-button-tabs-button-tabs-default)',
};
