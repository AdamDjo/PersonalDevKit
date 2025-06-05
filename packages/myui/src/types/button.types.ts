import { MouseEvent } from 'react';
import { OnEvent } from './common';

export type OnClickButton = OnEvent<MouseEvent<HTMLButtonElement>>;
export type OnClickDiv = OnEvent<MouseEvent<HTMLDivElement>>;
