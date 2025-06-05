import classNames from 'classnames';
import { SpinnerProps } from './Spinner.types';

export const Spinner = ({ size = 'small' }: SpinnerProps) => (
  <span
    role="progressbar"
    aria-label="loader"
    className={classNames(
      'myui-box-border myui-inline-block myui-animate-spin myui-rounded-circle myui-border-medium myui-border-solid myui-border-progressbar-circle myui-border-b-progressbar-bg',
      {
        'myui-h-[24px] myui-w-[24px]': size === 'small',
        'myui-h-[64px] myui-w-[64px]': size === 'medium',
        'myui-h-[128px] myui-w-[128px]': size === 'large',
      }
    )}
  />
);
