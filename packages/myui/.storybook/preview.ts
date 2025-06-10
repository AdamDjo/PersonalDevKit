import type { Preview } from '@storybook/react';
import '../src/index.css';
import './reset.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0e0e0e',
        },
      ],
    },
  },
  // decorators: [
  //   (Story, context) => (
  //     <div data-theme={context.globals.theme} className="svg-preview">
  //       <Story />
  //     </div>
  //   ),
  // ]
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light-theme',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light-theme', icon: 'circlehollow', title: 'light-theme' },
        { value: 'dark-theme', icon: 'circle', title: 'dark-theme' },
      ],
      showName: true,
    },
  },
};

export default preview;
