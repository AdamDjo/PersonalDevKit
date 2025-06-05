import classNames from 'classnames';
import { ButtonTabProps } from './ButtonTab.types';

export const ButtonTab = ({
  children,
  isHidden,
  isActive = false,
  disabled = false,
  type = 'button',
  ...rest
}: ButtonTabProps) =>
  isHidden ? null : (
    <button
      className={classNames(
        'sys-title-6 myui-bg-background myui-flex myui-w-full myui-cursor-pointer myui-items-center myui-justify-center myui-rounded-b-none myui-rounded-t-small myui-border-ultra-thin myui-border-solid myui-pb-spc-175 myui-pt-spc-175 myui-text-btn-tabs-default myui-transition-all myui-delay-300',
        {
          'myui-border-border-opaque': !isActive,
          'myui-bg-global-palette-grey-5 myui-text-txt-50': disabled,
          'myui-border-border-active': isActive,
        }
      )}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
