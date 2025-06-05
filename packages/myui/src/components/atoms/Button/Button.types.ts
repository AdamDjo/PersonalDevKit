import { ReactNode } from 'react';
import { OnClickButton } from '@custom-types/button.types';
import { FontVariant } from '@custom-types/common';

export const ButtonTypes = ['button', 'submit', 'reset'] as const;
export type ButtonType = (typeof ButtonTypes)[number];

export const ButtonVariants = ['primary', 'secondary', 'tertiary', 'text', 'header'] as const;
export type ButtonVariant = (typeof ButtonVariants)[number];

export type ButtonProps = {
    children: ReactNode;
    type?: ButtonType;
    variant?: ButtonVariant;
    font?: FontVariant;
    disabled?: boolean;
    onClick?: OnClickButton;
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
};

export type VariantClasses = {
    variant: ButtonVariant;
    font: FontVariant;
};
