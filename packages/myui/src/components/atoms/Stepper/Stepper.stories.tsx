import { Stepper } from './Stepper';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Stepper> = {
    title: 'atoms/Stepper',
    component: Stepper,
};

type Story = StoryObj<typeof Stepper>;

export const Primary: Story = {
    argTypes: {
        steps: {
            description: 'Steps items',
        },
    },
    args: {
        steps: ['A', 'B', 'C', 'D', 'E'].map((letter, i) => {
            return {
                id: i + 1,
                label: letter,
                value: letter,
                isCompleted: i === 2,
                onClick: () => {},
            };
        }),
        isVertical: true,
    },
};

export default meta;
