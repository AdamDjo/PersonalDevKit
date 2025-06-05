import { TabItem } from './TabItem';
import { TabItemProps } from './TabItem.types';
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TabItem> = {
    title: 'atoms/TabItem',
    component: TabItem,
};

type Story = StoryObj<typeof TabItem>;

const argTypes: ArgTypes<TabItemProps> = {
    label: {
        description: 'Label of the tab item',
        type: 'string',
    },
    category: {
        description: 'Category of the tab item',
        type: 'string',
    },
    isActive: {
        description: 'Determine whether the tab item is active',
        type: 'boolean',
    },
    onClick: {
        description: 'Callback triggered when the tab item is clicked',
        type: 'function',
    },
};

export const Primary: Story = {
    argTypes,
    args: {
        label: 'Musique',
        category: 'music',
        isActive: false,
        onClick: () => {},
    },
};

export default meta;
