import { ReactNode } from 'react';

export const IconTypes = ['movies', 'offer', 'rugby', 'footbal', 'race'] as const;
export type IconType = (typeof IconTypes)[number];

export type CountDownProps = {
    icon: ReactNode;
    label: ReactNode;
};
