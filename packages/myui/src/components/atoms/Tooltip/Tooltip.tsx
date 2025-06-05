import { TooltipIcon } from '@icons/index';
import classNames from 'classnames';
import { useState } from 'react';
import { TooltipProps } from './Tooltip.types';

const getClassesByPosition = {
  top: classNames(
    'before:myui-border-t-tooltip before:myui-top-[99%] before:myui-left-[50%] before:-myui-translate-x-[50%] myui-bottom-[165%] myui-left-[50%] -myui-translate-x-[50%] myui-translate-y-[30%]'
  ),
  right: classNames(
    'before:myui-border-r-tooltip before:myui-top-[50%] before:myui-right-[99%] before:-myui-translate-y-[50%] myui-top-[40%] myui-left-[300%] -myui-translate-x-[40%] -myui-translate-y-[50%]'
  ),
  left: classNames(
    'before:myui-border-l-tooltip before:myui-top-[50%] before:myui-left-[99%] before:-myui-translate-y-[50%] myui-top-[40%] myui-right-[300%] myui-translate-x-[40%] -myui-translate-y-[50%]'
  ),
  bottom: classNames(
    'before:myui-border-b-tooltip before:myui-bottom-[99%] before:myui-left-[50%] before:-myui-translate-x-[50%] myui-top-[180%] myui-left-[50%] -myui-translate-x-[50%] -myui-translate-y-[70%]'
  ),
};

export const Tooltip = ({
  children,
  position = 'top',
  toolTipContent = <TooltipIcon />,
}: TooltipProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  return (
    <div
      className="sys-body-3 myui-relative myui-inline-block myui-cursor-help"
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
      data-testid="TooltipDataTestId"
    >
      {toolTipContent}
      {isTooltipVisible && (
        <div
          className={classNames(
            'myui-z[1] myui-absolute myui-whitespace-nowrap myui-rounded-small myui-bg-tooltip myui-p-100 myui-text-txt-tooltip',
            "before:myui-absolute before:myui-border-strong before:myui-border-solid before:myui-border-transparent before:myui-content-['']",
            getClassesByPosition[position]
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
