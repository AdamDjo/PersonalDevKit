/* eslint-disable react-hooks/rules-of-hooks */
import { FontVariants } from '@custom-types/common';
import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from './Button';
import { ButtonProps, ButtonTypes, ButtonVariants } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
};

type Story = StoryObj<typeof Button>;

const argTypes: Partial<ArgTypes<ButtonProps>> = {
  children: {
    description: 'Content of the button',
    type: 'string',
  },
  onClick: {
    description: 'Callback that handle the event of click button',
    type: 'function',
  },
  disabled: {
    description: 'Handle if the button is enabled or not',
    type: 'boolean',
  },
  type: {
    description: 'Button type',
    options: ButtonTypes,
  },
  variant: {
    options: ButtonVariants,
    control: { type: 'select' },
    description: 'Button variant',
  },
  font: {
    description: 'Font applied',
    control: { type: 'select' },
    options: FontVariants,
  },
  isLoading: {
    description: "Show loader when it's true",
    type: 'boolean',
  },
  leftIcon: {
    description: 'Left icon',
    type: 'string',
  },
  rightIcon: {
    description: 'Right icon',
    type: 'string',
  },
};

export const Default: Story = {
  argTypes,
  args: {
    children: 'MyUI',
    variant: 'primary',
    type: 'button',
  },
};

export const ButtonWithLoader: Story = {
  argTypes,
  args: {
    children: 'Click me',
  },
  render: ({ children }) => {
    const [isLoading, setLoader] = useState<boolean>(false);
    return (
      <Button
        isLoading={isLoading}
        onClick={() => {
          setLoader(true);
          setTimeout(() => {
            setLoader(false);
          }, 2000);
        }}
      >
        {children}
      </Button>
    );
  },
};
export default meta;
