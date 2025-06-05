import { ButtonTab } from './ButtonTab';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ButtonTab> = {
    title: 'atoms/ButtonTab',
    component: ButtonTab,
};

type Story = StoryObj<typeof ButtonTab>;

export const Primary: Story = {
    argTypes: {
        onClick: {
            description: 'Callback that handle the event on click',
            type: 'function',
        },
        disabled: {
            description: 'Handle if the button is enabled or not',
            type: 'boolean',
        },
        isHidden: {
            description: 'Handle if the button is hidden or not',
            type: 'boolean',
        },
        isActive: {
            description: 'Show a visual style that indicated if the button tab is active or not',
            type: 'boolean',
        },
        children: {
            description: 'Content of the button',
            type: 'string',
        },
        className: {
            description: 'Additional className for custom styling',
            type: 'string',
        },
    },
    args: {
        children: 'Button Tab',
    },
};

export default meta;
