import { ReactNode } from 'react';
import { FontVariant } from '@custom-types/common';

export const ButtonLinkTypes = ['button', 'link'] as const;
export type ButtonLinkType = (typeof ButtonLinkTypes)[number];

export const ButtonLinkVariants = ['inline', 'standalone'] as const;
export type ButtonLinkVariant = (typeof ButtonLinkVariants)[number];

export const SizeTypes = ['small', 'medium', 'large'] as const;
export type SizeType = (typeof SizeTypes)[number];

export const ColorTypes = ['primary', 'black'] as const;
export type ColorType = (typeof ColorTypes)[number];

export const targetTypes = ['_blank', '_self'] as const;
export type TargetType = (typeof targetTypes)[number];

export type ButtonLinkProps = {
    children: ReactNode;
    variant?: ButtonLinkVariant;
    disabled?: boolean;
    font?: FontVariant;
    icon?: boolean;
    size?: SizeType;
    color?: ColorType;
    href?: string;
    target?: TargetType;
};
