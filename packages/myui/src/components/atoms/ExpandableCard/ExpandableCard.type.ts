import { ReactNode } from 'react';

export type ExpandableCardProps = {
    header: ReactNode;
    subHeader?: ReactNode;
    children: ReactNode;
    expanded?: boolean;
    selected?: boolean;
    disabled?: boolean;
};
