import classNames from 'classnames';
import { TabItemProps } from './TabItem.types';

export const TabItem = ({
  label,
  category = '',
  onClick = () => {},
  isActive = false,
}: TabItemProps) => (
  <button
    type="button"
    onClick={() => onClick(category)}
    className={classNames(
      'sys-lab-4-sb myui-box-border myui-flex myui-h-9 myui-cursor-pointer myui-items-center myui-justify-center myui-text-nowrap myui-rounded-spc-250 myui-border-none myui-bg-tab-item-default myui-px-spc-200 myui-py-spc-100 myui-text-txt-filter-tabs-default myui-transition-all myui-duration-300 hover:myui-bg-tab-item-hover hover:myui-text-txt-filter-tabs-hover hover:myui-ease-in-out',
      {
        'myui-bg-tab-item-selected myui-text-txt-filter-tabs-selected':
          isActive,
      }
    )}
  >
    {label}
  </button>
);
