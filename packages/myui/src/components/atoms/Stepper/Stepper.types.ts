export type StepperStep = {
    id: number | string;
    label: string;
    value?: string;
    isCompleted?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type StepperProps = {
    steps: StepperStep[];
    isVertical: boolean;
};
