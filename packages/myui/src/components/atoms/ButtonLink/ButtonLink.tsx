import { ChevronRightIcon } from '@atoms/icons';
import classNames from 'classnames';
import { ButtonLinkProps } from './ButtonLink.types';

const variantClasses = {
  standalone: {
    base: '',
    size: {
      small: {
        content: 'myui-text-xs myui-leading-4',
        icon: 16,
      },
      medium: {
        content: 'myui-text-sm myui-leading-[18px]',
        icon: 18,
      },
      large: {
        content: 'myui-text-base myui-leading-5',
        icon: 20,
      },
    },
    font: {
      Brand: 'myui-font-brand-lab-2',
      System: 'myui-font-sys-lab-2-sb',
    },
    colors: {
      primary:
        'myui-text-txt-text-button-link hover:myui-text-txt-text-button-link-hover active:myui-text-txt-text-button-link-pressed disabled:!myui-text-txt-text-button-link',
      black:
        'myui-text-txt-text-button-link-black hover:myui-text-txt-text-button-link-black-hover active:myui-text-txt-text-button-link-black-pressed disabled:!myui-text-txt-text-button-link-black',
    },
  },
  inline: {
    base: 'myui-underline myui-decoration-solid myui-decoration-skip-ink-none myui-decoration-auto myui-underline-offset-auto',
    size: {
      small: {
        content: 'myui-text-xs myui-leading-4',
        icon: 16,
      },
      medium: {
        content: 'myui-text-sm myui-leading-[18px]',
        icon: 18,
      },
      large: {
        content: 'myui-text-base myui-leading-5',
        icon: 20,
      },
    },
    font: {
      Brand: 'myui-font-brand-lab-2',
      System: 'myui-font-sys-lab-2-sb',
    },
    colors: {
      primary:
        'myui-text-txt-text-button-link hover:myui-text-txt-text-button-link-hover active:myui-text-txt-text-button-link-pressed disabled:!myui-text-txt-text-button-link',
      black:
        'myui-text-txt-text-button-link-black hover:myui-text-txt-text-button-link-black-hover active:myui-text-txt-text-button-link-black-pressed disabled:!myui-text-txt-text-button-link-black',
    },
  },
};

export const ButtonLink = ({
  children,
  variant = 'standalone',
  disabled = false,
  font = 'System',
  icon = false,
  href = '',
  size = 'medium',
  color = 'primary',
  target = '_self',
}: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className={classNames(
        'myui-flex myui-w-fit myui-cursor-pointer myui-items-center myui-justify-center myui-font-semibold',
        variantClasses[variant].base,
        variantClasses[variant].size[size].content,
        variantClasses[variant].font[font],
        variantClasses[variant].colors[color],
        {
          'myui-pointer-events-none myui-opacity-50': disabled,
        }
      )}
      target={target}
      rel="noreferrer"
    >
      <span>{children}</span>
      {icon && (
        <ChevronRightIcon
          width={variantClasses[variant].size[size].icon}
          height={variantClasses[variant].size[size].icon}
          className={classNames('myui-fill-current')}
          data-testid="icon"
        />
      )}
    </a>
  );
};
