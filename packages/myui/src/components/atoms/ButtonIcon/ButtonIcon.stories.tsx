import { AddIcon, EditIcon } from '@atoms/icons';
import { ButtonIcon } from './ButtonIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ButtonIcon> = {
    title: 'atoms/ButtonIcon',
    component: ButtonIcon,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: ['add', 'edit'],
            mapping: {
                add: <AddIcon />,
                edit: <EditIcon />,
            },
        },
        font: {
            control: { type: 'select' },
            options: ['System', 'Brand'],
        },
    },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

const Template: Story = {
    args: {
        icon: <AddIcon />,
        label: 'My Button',
    },
};

export const Default: Story = {
    ...Template,
};
