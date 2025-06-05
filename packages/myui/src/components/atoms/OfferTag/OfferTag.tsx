import classNames from 'classnames';
import { OfferTagProps } from './OfferTag.types';

export const OfferTag = ({ children, variant = 'default' }: OfferTagProps) => {
  return (
    <div
      className={classNames(
        'brand-lab-4 myui-w-max myui-rounded-small myui-border-thin myui-border-solid myui-px-50 myui-py-25',
        {
          'myui-border-border-accent myui-text-txt-prim-accent':
            variant === 'brand',
          'myui-border-border-offer-tag myui-text-txt-offer-tag':
            variant === 'default',
        }
      )}
    >
      {children}
    </div>
  );
};
