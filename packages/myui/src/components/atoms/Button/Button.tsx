import { Spinner } from '@atoms/Spinner/Spinner';
import classNames from 'classnames';
import { ButtonProps } from './Button.types';

const variantFontClasses = {
  primary: {
    base: 'myui-rounded-medium myui-bg-btn-primary myui-text-btn-primary-text myui-fill-btn-primary-text myui-px-200 hover:myui-bg-btn-primary-hov active:myui-bg-btn-primary-active disabled:hover:myui-bg-btn-primary disabled:active:myui-bg-btn-primary myui-h-[48px] myui-min-w-[176px]',
    font: {
      Brand: 'brand-lab-2',
      System: 'sys-lab-2-sb',
    },
  },
  secondary: {
    base: 'myui-rounded-medium myui-bg-btn-secondary myui-text-btn-secondary-text myui-fill-btn-secondary-text myui-px-200 hover:myui-bg-btn-secondary-hov active:myui-bg-btn-secondary-active disabled:hover:myui-bg-btn-secondary disabled:active:myui-bg-btn-secondary myui-h-[48px] myui-min-w-[176px]',
    font: {
      Brand: 'brand-lab-2',
      System: 'sys-lab-2-sb',
    },
  },
  tertiary: {
    base: 'myui-rounded-medium myui-bg-btn-tertiary myui-text-btn-tertiary-text myui-fill-btn-tertiary-text myui-px-200 hover:myui-bg-btn-tertiary-hov active:myui-bg-btn-tertiary-active disabled:hover:myui-bg-btn-tertiary disabled:active:myui-bg-btn-tertiary myui-h-[34px] myui-min-w-[176px]',
    font: {
      Brand: 'brand-lab-3',
      System: 'sys-lab-2-sb',
    },
  },
  text: {
    base: 'myui-text-btn-text myui-fill-btn-text hover:myui-text-btn-myui-text-hov hover:myui-fill-btn-myui-text-hov active:myui-text-btn-myui-text-active active:myui-fill-btn-myui-text-active disabled:hover:myui-text-btn-text  disabled:hover:myui-fill-btn-text disabled:active:myui-text-btn-text  disabled:active:myui-fill-btn-text myui-bg-transparent myui-p-0',
    font: {
      Brand: 'brand-lab-2',
      System: 'sys-lab-2-sb',
    },
  },
  header: {
    base: 'myui-rounded-small myui-bg-btn-primary myui-text-btn-primary-text myui-fill-btn-primary-text myui-px-100 hover:myui-bg-btn-primary-hov active:myui-bg-btn-primary-active disabled:hover:myui-bg-btn-primary disabled:active:myui-bg-btn-primary myui-h-[32px]',
    font: {
      Brand: 'brand-lab-3',
      System: 'sys-lab-2-sb',
    },
  },
};

export const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  font = 'Brand',
  onClick = () => {},
  disabled = false,
  isLoading = false,
  leftIcon = '',
  rightIcon = '',
}: ButtonProps) => {
  if (isLoading) {
    return (
      <span
        className={classNames(
          'myui-box-border myui-flex myui-w-[176px] myui-items-center myui-justify-center myui-px-200',
          {
            'myui-h-[48px]': variant !== 'tertiary',
            'myui-h-[34px]': variant === 'tertiary',
          }
        )}
      >
        <Spinner />
      </span>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={classNames(
        'myui-box-border myui-flex myui-cursor-pointer myui-items-center myui-justify-center myui-gap-[8px] myui-border-0 disabled:myui-cursor-not-allowed disabled:myui-opacity-50',
        variantFontClasses[variant].base,
        variantFontClasses[variant].font[font]
      )}
    >
      {leftIcon && leftIcon}
      <span>{children}</span>
      {rightIcon && rightIcon}
    </button>
  );
};
