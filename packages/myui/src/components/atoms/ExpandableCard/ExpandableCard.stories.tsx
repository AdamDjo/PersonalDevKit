import { ExpandableCard } from './ExpandableCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ExpandableCard> = {
    title: 'atoms/ExpandableCard',
    component: ExpandableCard,
};

type Story = StoryObj<typeof ExpandableCard>;

export const Primary: Story = {
    argTypes: {
        header: {
            description: 'The content that is always visible',
            type: 'string',
        },
        subHeader: {
            description: 'Sub content that is visible when non extended',
            type: 'string',
        },
        children: {
            description: 'Hidden content that can be visible with the button',
            type: 'string',
        },
        expanded: {
            description: 'Default state of the card',
            type: 'boolean',
        },
        selected: {
            description: 'Selected state of the card',
            type: 'boolean',
        },
        disabled: {
            description: 'Disabled state of the card',
            type: 'boolean',
        },
    },
    args: {
        header: 'Header',
        subHeader: 'Subheader',
        children: 'Hidden content',
        expanded: false,
        selected: false,
        disabled: false,
    },
};

export default meta;
