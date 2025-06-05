import classNames from 'classnames';
import { StatusBadgeProps } from './StatusBadge.types';

const variantBgClasses = {
  neutral: {
    base: 'myui-bg-status-badge-default',
    pip: 'myui-bg-status-pip-default',
  },
  critical: {
    base: 'myui-bg-status-badge-critical',
    pip: 'myui-bg-status-pip-critical',
  },
  success: {
    base: 'myui-bg-status-badge-success',
    pip: 'myui-bg-status-pip-success',
  },
  warning: {
    base: 'myui-bg-status-badge-warning',
    pip: 'myui-bg-status-pip-warning',
  },
  info: {
    base: 'myui-bg-status-badge-info',
    pip: 'myui-bg-status-pip-info',
  },
};

export const StatusBadge = ({
  children,
  variant = 'neutral',
  pip = false,
  important = false,
}: StatusBadgeProps) => {
  return (
    <div
      className={classNames(
        'myui-flex myui-h-auto myui-w-max myui-items-center myui-rounded-small myui-px-100 myui-py-25',
        {
          [variantBgClasses[variant].base]: !pip,
          'sys-lab-4-sb': important,
          'sys-lab-4': !important,
        }
      )}
    >
      {pip && (
        <span
          className={classNames(
            'myui-mr-50 myui-inline-flex myui-h-[10px] myui-w-[10px] myui-rounded-full',
            variantBgClasses[variant].pip
          )}
        />
      )}
      {children}
    </div>
  );
};
