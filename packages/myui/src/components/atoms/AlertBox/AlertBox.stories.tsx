import type { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { AlertBox } from './AlertBox';
import {
  AlertBoxProps,
  AlertBoxTypes,
  AlertBoxVariants,
} from './AlertBox.types';

const meta: Meta<typeof AlertBox> = {
  title: 'atoms/AlertBox',
  component: AlertBox,
};

type Story = StoryObj<typeof AlertBox>;

const argTypes: Partial<ArgTypes<AlertBoxProps>> = {
  title: {
    description: 'Alert box title',
    type: 'string',
  },
  children: {
    description: 'Alert box description',
  },
  variant: {
    description: 'Alert box variant',
    options: AlertBoxVariants,
    control: { type: 'select' },
  },
  type: {
    description: 'Alert box type',
    options: AlertBoxTypes,
    control: { type: 'select' },
  },
  showClosingIcon: {
    description: 'Show close icon',
    type: 'boolean',
  },
  onCloseIconClick: {
    description: 'Handler when click on close icon',
    type: 'function',
  },
  onClickAction: {
    description: 'Handler when click on alert box',
    type: 'function',
  },
  dataTestId: {
    description: 'Id using for testing component',
    type: 'string',
  },
};

export const Hint: Story = {
  argTypes,
  args: {
    title:
      'Provide users with non-disruptive feedback or the status of an action',
    children:
      'Provide users with non-disruptive feedback or the status of an action',
    variant: 'hint',
    onClickAction: undefined,
  },
};

export const HintWithIcon: Story = {
  argTypes,
  args: {
    title:
      'Provide users with non-disruptive feedback or the status of an action',
    children:
      'Provide users with non-disruptive feedback or the status of an action',
    variant: 'hint',
    showClosingIcon: true,
    onClickAction: undefined,
  },
};

export const HintWithoutTitle: Story = {
  argTypes,
  args: {
    children:
      'Provide users with non-disruptive feedback or the status of an action',
    variant: 'hint',
    onClickAction: undefined,
  },
};

export const Info: Story = {
  argTypes,
  args: {
    title:
      'Provide users with non-disruptive feedback or the status of an action',
    children:
      'Provide users with non-disruptive feedback or the status of an action',
    variant: 'info',
    onClickAction: undefined,
  },
};

export const Success: Story = {
  argTypes,
  args: {
    title:
      'Provide users with non-disruptive feedback or the status of an action',
    children:
      'Provide users with non-disruptive feedback or the status of an action',
    variant: 'success',
    onClickAction: undefined,
  },
};

export const Upgrade: Story = {
  argTypes,
  args: {
    title:
      'Provide users with non-disruptive feedback or the status of an action',
    children:
      'Provide users with non-disruptive feedback or the status of an action and user can interact with the box',
    variant: 'upgrade',
  },
};

export const Error: Story = {
  argTypes,
  args: {
    title:
      'Provide users with non-disruptive feedback or the status of an action',
    children:
      'Provide users with non-disruptive feedback or the status of an action',
    variant: 'error',
    onClickAction: undefined,
  },
};

export const Warning: Story = {
  argTypes,
  args: {
    title:
      'Provide users with non-disruptive feedback or the status of an action',
    children:
      'Provide users with non-disruptive feedback or the status of an action',
    variant: 'warning',
    onClickAction: undefined,
  },
};

export default meta;
