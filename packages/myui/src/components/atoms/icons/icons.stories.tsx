import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import * as Icons from './index';

type SVGIcon = (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;

const typedIcons = Icons as Record<string, SVGIcon>;
const iconNames = Object.keys(typedIcons);

const meta: Meta = {
  title: 'atoms/Icons',
  render: () => (
    <div
      style={{
        display: 'myui-flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      {Object.entries(typedIcons).map(([name, IconComponent]) => (
        <IconComponent height={50} width={50} key={name} />
      ))}
    </div>
  ),
};

export default meta;

export const AllIcons: StoryObj = {};

export const SelectIcon: StoryObj<{
  iconName: string;
}> = {
  argTypes: {
    iconName: {
      control: { type: 'select' },
      options: iconNames,
      defaultValue: iconNames[0],
    },
  },
  render: ({ iconName }) => {
    const IconComponent = typedIcons[iconName];
    return IconComponent ? (
      <div style={{ padding: '10px' }}>
        <IconComponent width={50} height={50} />
      </div>
    ) : (
      <div />
    );
  },
};
