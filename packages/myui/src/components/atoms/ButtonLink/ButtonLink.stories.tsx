import { FontVariants } from '@custom-types/common';
import { ButtonLink } from './ButtonLink';
import { ButtonLinkProps, ColorTypes, SizeTypes } from './ButtonLink.types';
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ButtonLink> = {
    title: 'atoms/ButtonLink',
    component: ButtonLink,
};

type Story = StoryObj<typeof ButtonLink>;

const argTypes: Partial<ArgTypes<ButtonLinkProps>> = {
    children: {
        description: 'Content of the button',
        type: 'string',
    },
    href: {
        description: 'Link to navigate',
        type: 'string',
    },
    target: {
        description: 'Target for the link',
        control: { type: 'select' },
        options: ['_blank', '_self'],
    },
    variant: {
        description: 'Button variant',
        options: ['inline', 'standalone'],
        control: { type: 'select' },
    },
    disabled: {
        description: 'Handle if the button is enabled or not',
        type: 'boolean',
    },
    font: {
        description: 'Font applied',
        control: { type: 'select' },
        options: FontVariants,
    },
    size: {
        description: 'Button size',
        control: { type: 'select' },
        options: SizeTypes,
    },
    icon: {
        description: 'Show icon',
        type: 'boolean',
    },
    color: {
        description: 'Button color',
        control: { type: 'select' },
        options: ColorTypes,
    },
};

export const Default: Story = {
    argTypes,
    args: {
        children: 'Label',
        variant: 'standalone',
        size: 'medium',
        font: 'System',
        icon: false,
    },
};

export const ButtonLinkWithIcon: Story = {
    argTypes,
    args: {
        children: 'Label',
        variant: 'standalone',
        size: 'medium',
        font: 'System',
        icon: true,
    },
};

export const InlineButtonLink: Story = {
    argTypes,
    args: {
        children: 'Label',
        variant: 'inline',
        size: 'medium',
        font: 'System',
        icon: false,
    },
};

export const DisabledButtonLink: Story = {
    argTypes,
    args: {
        children: 'Label',
        variant: 'standalone',
        size: 'medium',
        font: 'System',
        icon: false,
        disabled: true,
    },
};

export default meta;
