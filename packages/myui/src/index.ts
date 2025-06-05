import './index.css';


// Atomic Design
export * from './components/atoms';


// Types
export type { AlertBoxProps, AlertBoxVariant } from './components/atoms/AlertBox/AlertBox.types';

export type { ExpandableCardProps } from './components/atoms/ExpandableCard/ExpandableCard.type';
export type { OnClickButton } from './types/button.types';

export type {
    StatusBadgeProps,
    StatusBadgeVariant,
} from './components/atoms/StatusBadge/StatusBadge.types';
export type { StepperProps, StepperStep } from './components/atoms/Stepper/Stepper.types';


// Config

export { tailwindConfig } from './config/tailwind-global-config';
