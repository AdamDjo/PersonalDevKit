# Design System MYUI Components

## Develop a new component

To add a new component in library, please follow this folder architecture, for this exemple, we want to create a component named **Title** in the atoms folder.

I. Run ```pnpm component:new Title atoms``` to create folder and files name Title in `src/components/atoms`  
II. Go to your new component folder, and update following files:

- **Title.tsx**: contain component code, **please notice we are now using default export for component**

```tsx
export const Title = ({ children }: TitleProps) => {
  return (
    <div className="myui-tailwindcss-classes">
      <h2>{children}</h2>
    </div>
  );
};
```

- **Title.types.ts**: contains all type for Title component

```ts
import { ReactNode } from 'react';

export type TitleProps = {
  children: ReactNode;
};
```

- **Style**: **please notice we now use Tailwindcss.** It's important to note that we use a prefix in tailwind config, so, every classes should begin with this prefix (myui-). This is due to conflicts for the users of the lib who use also Tailwind in their own application with a different version.

- **Title.test.tsx**: contains all test case for Title component

```tsx
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Title } from './Title';

describe('Title components tests', () => {
  test('renders the Title component with h2 and text', () => {
    expect(container.innerHTML).toBe<string>('<h2>Hello</h2>');
  });
});
```

- **Title.stories.tsx**: contains all storybook preview

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
  title: 'atoms/Title',
  component: Title,
};

type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  argTypes: {
    children: {
      description: 'children node',
      type: 'string',
    },
  },
  args: {
    children: 'Helo Workd',
  },
};

export default meta;
```

III. Export your component

- Go to `src/components/atoms/index.ts`
- Add export for your component at end of already exported components:

```ts
export { Title } from './Title/Title';
```

- Go to `src/index.ts`
- Add export for your component types at end of already exported types:

```ts
/* types */
export * from './components/atoms/Title/Title.types';
```
