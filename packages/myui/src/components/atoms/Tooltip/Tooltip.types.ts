import { ReactNode } from 'react';

export const TooltipPositions = ['left', 'right', 'bottom', 'top'] as const;
export type TooltipPosition = (typeof TooltipPositions)[number];

export type TooltipProps = {
    children: ReactNode;
    position?: TooltipPosition;
    toolTipContent?: ReactNode;
};
