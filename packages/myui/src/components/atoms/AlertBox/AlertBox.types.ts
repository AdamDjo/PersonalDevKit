import { OnClickButton, OnClickDiv } from '@custom-types/button.types';
import { PropsWithChildren } from 'react';

export const AlertBoxVariants = [
  'hint',
  'error',
  'success',
  'warning',
  'info',
  'upgrade',
] as const;
export const AlertBoxTypes = ['alert', 'attached'] as const;
export type AlertBoxVariant = (typeof AlertBoxVariants)[number];
export type AlertBoxType = (typeof AlertBoxTypes)[number];

export type AlertBoxProps = PropsWithChildren<{
  title?: string;
  type?: AlertBoxType;
  variant?: AlertBoxVariant;
  showClosingIcon?: boolean;
  onCloseIconClick?: OnClickButton;
  dataTestId?: string;
  onClickAction?: OnClickDiv;
}>;
