import { AlertBoxVariant } from '@atoms/AlertBox/AlertBox.types';
import { ErrorIcon, InfoIcon, InfoHintIcon, WarningIcon, SuccessIcon, UpgradeIcon } from '../index';

export type AlertIconProps = {
    variant: AlertBoxVariant;
    height?: string;
    width?: string;
};

const iconsMap = {
    error: ErrorIcon,
    warning: WarningIcon,
    hint: InfoHintIcon,
    info: InfoIcon,
    success: SuccessIcon,
    upgrade: UpgradeIcon,
};

export const AlertIcon = ({ variant, height = '20', width = '20' }: AlertIconProps) => {
    const IconComponent = iconsMap[variant];
    return IconComponent ? <IconComponent width={width} height={height} /> : null;
};
