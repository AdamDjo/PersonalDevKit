import { Card } from './Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
    title: 'atoms/Card',
    component: Card,
};

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    argTypes: {
        children: {
            description: 'Content of the card',
            type: 'string',
        },
        active: {
            description: 'Card has active style',
            type: 'boolean',
        },
    },
    args: {
        children: 'This is the content inside the card.',
        active: false,
    },
};

export default meta;
