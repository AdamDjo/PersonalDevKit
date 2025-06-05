// TODO maybe a duplicate type definition with ./input.ts

export type InputDefinition = {
    name: string;
    label?: string;
    id: string;
    isDisabled?: boolean;
};

export type InputHiddenProps = {
    isHidden?: boolean;
};

export enum InputType {
    Radio = 'radio',
    Checkbox = 'checkbox',
}

export enum Status {
    Success,
    Error,
    Warning,
}
