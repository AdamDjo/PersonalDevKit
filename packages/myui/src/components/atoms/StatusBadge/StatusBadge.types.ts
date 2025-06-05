export const StatusBadgeVariants = ['neutral', 'critical', 'warning', 'success', 'info'] as const;
export type StatusBadgeVariant = (typeof StatusBadgeVariants)[number];

export type StatusBadgeProps = {
    children: string;
    variant?: StatusBadgeVariant;
    pip?: boolean;
    important?: boolean;
};
