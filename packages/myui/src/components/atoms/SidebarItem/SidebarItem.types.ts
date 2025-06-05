import { ReactNode, MouseEventHandler } from 'react';

export type SidebarItemType = {
    isExpanded?: boolean;
    isActive?: boolean;
    closeItem?: MouseEventHandler;
    children: ReactNode;
    expandedContent?: ReactNode;
};
