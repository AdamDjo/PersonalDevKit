import { Spinner } from './Spinner';
import { SpinnerProps, SpinnerSizes } from './Spinner.types';
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Spinner> = {
    title: 'atoms/Spinner',
    component: Spinner,
};

type Story = StoryObj<typeof Spinner>;

const argTypes: Partial<ArgTypes<SpinnerProps>> = {
    size: {
        description: 'Spinner size',
        options: SpinnerSizes,
        control: { type: 'select' },
    },
};

export const Default: Story = {
    argTypes,
};

export default meta;
