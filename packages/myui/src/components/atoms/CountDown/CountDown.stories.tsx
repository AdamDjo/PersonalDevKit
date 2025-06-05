import { RugbyIcon, OfferIcon, FootIcon, RaceIcon } from '@atoms/icons';
import { CountDown } from './CountDown';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CountDown> = {
    title: 'atoms/CountDown',
    component: CountDown,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: ['race', 'foot', 'rugby', 'offer'],
            mapping: {
                race: <RaceIcon />,
                foot: <FootIcon />,
                rugby: <RugbyIcon />,
                offer: <OfferIcon />,
            },
        },
    },
} satisfies Meta<typeof CountDown>;

export default meta;
type Story = StoryObj<typeof CountDown>;

const Template: Story = {
    args: {
        icon: <OfferIcon />,
        label: 'Reste 02:02:02',
    },
};

export const Default: Story = {
    ...Template,
};
