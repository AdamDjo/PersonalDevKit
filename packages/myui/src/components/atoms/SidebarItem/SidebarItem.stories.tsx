import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarItem } from './SidebarItem';

const meta: Meta<typeof SidebarItem> = {
  title: 'Layout/Sidebar/SidebarItem',
  component: SidebarItem,
};

type Story = StoryObj<typeof SidebarItem>;

export const Default: Story = {
  argTypes: {
    isExpanded: {
      description: 'Is card Extended',
      type: 'boolean',
    },
    isActive: {
      description: 'Is card Extended',
      type: 'boolean',
    },
    children: {
      description: 'Content of the card when it is not extended',
      type: 'string',
    },
    expandedContent: {
      description: 'Content of the card when it is extended',
      type: 'string',
    },
    closeItem: {
      description: 'Action on close button item',
      type: 'function',
    },
  },
  args: {
    isExpanded: false,
    isActive: false,
    children: 'Non expanded item.',
    expandedContent: 'Expanded item.',
    closeItem: action('onCloseAction'),
  },
};

export default meta;
