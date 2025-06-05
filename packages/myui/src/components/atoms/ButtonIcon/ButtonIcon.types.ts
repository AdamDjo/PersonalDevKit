import { ReactNode } from 'react';
import { OnClickButton } from '@custom-types/button.types';
import { FontVariant } from '@custom-types/common';

export type ButtonIconProps = {
    icon: ReactNode;
    label?: string;
    font?: FontVariant;
    onClick?: OnClickButton;
    arialLabel?: string;
};
