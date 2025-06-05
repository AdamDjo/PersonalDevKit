import { OfferIcon } from '@atoms/icons';
import classNames from 'classnames';
import { CountDownProps } from './CountDown.types';

export const CountDown = ({ icon = <OfferIcon />, label }: CountDownProps) => {
  return (
    <div
      className={classNames(
        'myui-flex myui-w-fit myui-max-w-[306px] myui-items-center myui-justify-center myui-gap-1 myui-rounded-md myui-bg-background-countdown myui-p-1 myui-text-sm'
      )}
    >
      {icon} {label}
    </div>
  );
};
