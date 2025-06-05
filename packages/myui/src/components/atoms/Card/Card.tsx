import classNames from 'classnames';
import { CardProps } from './Card.types';

export const Card = ({ children, active = false }: CardProps) => {
  return (
    <div
      className={classNames(
        'myui-flex myui-w-full myui-rounded-small myui-border-solid myui-bg-background-global myui-p-150',
        {
          'myui-border-thin myui-border-border-opaque': !active,
          'myui-border-regular myui-border-border-active': active,
        }
      )}
    >
      {children}
    </div>
  );
};
