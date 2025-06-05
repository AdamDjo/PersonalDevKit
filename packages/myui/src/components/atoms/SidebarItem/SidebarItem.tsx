import classNames from 'classnames';
import { CloseIcon } from '../icons';
import { SidebarItemType } from './SidebarItem.types';

export const SidebarItem = ({
  isExpanded = false,
  isActive = false,
  closeItem,
  children,
  expandedContent = null,
}: SidebarItemType) => {
  return (
    <div
      className={classNames(
        'myui-relative myui-box-border myui-flex myui-h-[56px] myui-w-full myui-cursor-pointer myui-items-center myui-overflow-auto myui-truncate myui-rounded-small myui-border-thin myui-border-solid myui-border-border-sidebar myui-text-center myui-font-sys-body-2-sb',
        {
          'myui-border-border-sidebar-active myui-bg-background-sidebar-active':
            isActive,
          'myui-border-border-sidebar myui-bg-background-sidebar hover:myui-border-border-sidebar-hover':
            !isActive,
        }
      )}
    >
      {closeItem && isExpanded && (
        <button
          onClick={closeItem}
          type="button"
          aria-label="close"
          className="myui-absolute myui-right-0 myui-top-0 myui-border-none myui-bg-transparent"
        >
          <CloseIcon width={16} height={16} />
        </button>
      )}
      {!isExpanded && children}
      {isExpanded && (expandedContent || children)}
    </div>
  );
};
