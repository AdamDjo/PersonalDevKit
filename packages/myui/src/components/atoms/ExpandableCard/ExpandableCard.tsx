import { ArrowDownIcon } from '@icons/index';
import classNames from 'classnames';
import { useState } from 'react';
import { ExpandableCardProps } from './ExpandableCard.type';

export const ExpandableCard = ({
  header,
  subHeader,
  children,
  expanded = false,
  selected = false,
  disabled = false,
}: ExpandableCardProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(expanded);
  return (
    <div
      className={classNames(
        'myui-box-border myui-w-full myui-rounded-small myui-border-thin myui-border-solid myui-bg-background-global myui-px-spc-100 myui-pb-0 myui-pt-spc-200',
        {
          'myui-border-border-opaque': !selected,
          'myui-border-border-active': selected,
          'myui-cursor-not-allowed myui-opacity-50': disabled,
        }
      )}
    >
      <div className="myui-relative">
        <div className="myui-flex myui-items-center">{header}</div>
        {subHeader &&
          !isToggled && ( // Maybe need a rework, there's a glitch when we collapse or expanse
            <div className={classNames('myui-flex myui-flex-row')}>
              {subHeader}
            </div>
          )}
        <div
          className={classNames(
            'myui-transition-max-height myui-overflow-hidden myui-duration-300 myui-ease-in-out',
            {
              'max-h-fit myui-py-spc-200': isToggled,
              'myui-max-h-0': !isToggled,
            }
          )}
        >
          {children}
        </div>
        <button
          className="myui-flex myui-w-full myui-cursor-pointer myui-items-center myui-justify-center"
          onClick={() => setIsToggled(!isToggled)}
          aria-label={isToggled ? 'Collapse' : 'Expand'}
        >
          <span
            className={classNames('myui-duration-300 myui-ease-in-out', {
              'myui-rotate-180': isToggled,
            })}
          >
            <ArrowDownIcon />
          </span>
        </button>
      </div>
    </div>
  );
};
