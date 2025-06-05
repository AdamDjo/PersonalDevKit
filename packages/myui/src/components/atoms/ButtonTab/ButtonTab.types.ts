import { ButtonHTMLAttributes } from 'react';

export type ButtonTabProps = {
    isActive?: boolean;
    isHidden?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
