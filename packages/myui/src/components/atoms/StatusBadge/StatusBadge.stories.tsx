import { StatusBadge } from './StatusBadge';
import { StatusBadgeProps, StatusBadgeVariants } from './StatusBadge.types';
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StatusBadge> = {
    title: 'atoms/StatusBadge',
    component: StatusBadge,
};

type Story = StoryObj<typeof StatusBadge>;

const argTypes: Partial<ArgTypes<StatusBadgeProps>> | undefined = {
    children: {
        description: 'Tag content',
        type: 'string',
    },
    variant: {
        options: StatusBadgeVariants,
        control: { type: 'select' },
        description: 'Status Badge variant',
    },
    pip: {
        description: 'Show pip',
        type: 'boolean',
    },
    important: {
        description: 'Use strong font or not',
        type: 'boolean',
    },
};

export const Default: Story = {
    argTypes,
    args: {
        children: 'Chaine',
    },
};

export default meta;
