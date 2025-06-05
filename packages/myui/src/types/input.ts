// TODO maybe a duplicate type definition with ./Input.types.ts

import { ChangeEvent, FocusEvent } from 'react';
import { OnEvent } from './common';

type InputDefinition = {
    name: string;
    label: string;
    id: string;
    isDisabled?: boolean;
    isRequired?: boolean;
};

type InputAlerts = {
    error?: string;
    warning?: string;
    success?: string;
};

type InputHiddenProps = {
    isHidden?: boolean;
};

export type InputCommonProps = InputDefinition & InputAlerts & InputHiddenProps;

export type OnChangeInput = OnEvent<ChangeEvent<HTMLInputElement>>;

export type OnBlurInput = OnEvent<FocusEvent<HTMLInputElement>>;

export type OnChangeTextArea = OnEvent<ChangeEvent<HTMLTextAreaElement>>;

export type OnBlurTextArea = OnEvent<FocusEvent<HTMLTextAreaElement>>;
