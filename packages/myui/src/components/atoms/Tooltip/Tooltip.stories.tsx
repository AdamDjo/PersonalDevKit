import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { TooltipPositions } from './Tooltip.types';

const meta: Meta<typeof Tooltip> = {
  title: 'atoms/Tooltip',
  component: Tooltip,
};

type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  argTypes: {
    position: {
      options: TooltipPositions,
      control: { type: 'select' },
      description: 'Tooltip start position',
    },
    children: {
      description: 'Content to display when hover on info icon',
    },
  },
  args: {
    children: 'This is a tooltip',
    position: 'top',
  },
  parameters: {
    layout: 'centered',
  },
};

export const CustomTooltipText: Story = {
  argTypes: {
    position: {
      options: TooltipPositions,
      control: { type: 'select' },
      description: 'Tooltip start position',
    },
    children: {
      description: 'Content to display when hover on info icon',
    },
  },
  args: {
    children: 'This is a tooltip',
    position: 'top',
    toolTipContent: <strong>Custom tooltip text</strong>,
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
