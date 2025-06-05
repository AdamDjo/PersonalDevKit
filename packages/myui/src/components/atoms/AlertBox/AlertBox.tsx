import { AlertIcon } from '@icons/Alert/AlertIcon';
import { StatusCrossIcon } from '@icons/index';
import classNames from 'classnames';
import { AlertBoxProps, AlertBoxType, AlertBoxVariant } from './AlertBox.types';

const typeCss: Record<AlertBoxType, string> = {
  alert: 'myui-gap-100 myui-p-spc-200',
  attached: '',
};

const variantCss: Record<AlertBoxVariant, string> = {
  hint: 'myui-bg-alert-box-surface-hint',
  error: 'myui-bg-alert-box-surface-error',
  info: 'myui-bg-alert-box-surface-info',
  warning: 'myui-bg-alert-box-surface-warning',
  success: 'myui-bg-alert-box-surface-success',
  upgrade: 'myui-bg-alert-box-surface-success',
};

export const AlertBox = ({
  title,
  children = '',
  showClosingIcon,
  onCloseIconClick,
  variant = 'hint',
  type = 'alert',
  dataTestId = 'AlertBoxTestId',
  onClickAction,
}: AlertBoxProps) => {
  const clickActionsProps = onClickAction
    ? {
        onClick: onClickAction,
        role: 'button',
      }
    : {};
  return (
    <div
      data-testid={dataTestId}
      className={classNames(
        `myui-text-alert-box ${variantCss[variant]} myui-box-border myui-rounded-small myui-p-8 ${typeCss[type]}`,
        {
          'myui-min-h-[52px]': !title && type !== 'attached',
          'myui-cursor-pointer': !!onClickAction,
        }
      )}
      {...clickActionsProps}
    >
      <div className="myui-relative myui-grid myui-w-full myui-grid-cols-alert-box myui-gap-100">
        <AlertIcon variant={variant} />
        <div className="sys-body-2 myui-text-justify">
          {title && <h6 className="sys-title-6-sb">{title}</h6>}
          {children}
        </div>
        {showClosingIcon && (
          <button
            type="button"
            aria-label="Close"
            className="myui-absolute myui-right-0 myui-top-0 myui-cursor-pointer myui-border-none myui-bg-none"
            onClick={onCloseIconClick}
          >
            <StatusCrossIcon width={20} height={20} />
          </button>
        )}
      </div>
    </div>
  );
};
