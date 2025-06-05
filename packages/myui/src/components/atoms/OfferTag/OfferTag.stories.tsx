import { OfferTag } from './OfferTag';
import { OfferTagProps, OfferTagVariants } from './OfferTag.types';
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof OfferTag> = {
    title: 'atoms/OfferTag',
    component: OfferTag,
};

type Story = StoryObj<typeof OfferTag>;

const argTypes: Partial<ArgTypes<OfferTagProps>> | undefined = {
    variant: {
        description: 'Tag color',
        options: OfferTagVariants,
    },
    children: {
        description: 'Tag content',
        type: 'string',
    },
};

export const Brand: Story = {
    argTypes,
    args: {
        children: 'Serie Limitee',
        variant: 'brand',
    },
};

export const Default: Story = {
    argTypes,
    args: {
        children: 'Serie Limitee',
        variant: 'default',
    },
};

export default meta;
