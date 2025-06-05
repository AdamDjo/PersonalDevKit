import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SidebarItem } from './SidebarItem';

const children = 'Children';
const expandedChildren = 'expandedChildren';

describe('SidebarItem', () => {
    it('should display the component with default props', () => {
        render(<SidebarItem>{children}</SidebarItem>);
        expect(screen.getByText(children)).toBeInTheDocument();
    });
    it('should display the children content if expanded and if there is no extended content', () => {
        render(<SidebarItem isExpanded>{children}</SidebarItem>);
        expect(screen.getByText(children)).toBeInTheDocument();
    });
    it('should display the expanded children content if expanded and if there is extended content', () => {
        render(
            <SidebarItem isExpanded expandedContent={expandedChildren}>
                {children}
            </SidebarItem>
        );
        expect(screen.getByText(expandedChildren)).toBeInTheDocument();
    });
    it('should display the close button if expanded and if there is a close action', () => {
        render(
            <SidebarItem isExpanded expandedContent={expandedChildren} closeItem={() => {}}>
                {children}
            </SidebarItem>
        );
        expect(screen.getByText(expandedChildren)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it('should trigger the action of the close button', async () => {
        const onClickSpy = jest.fn();
        render(
            <SidebarItem isExpanded expandedContent={expandedChildren} closeItem={onClickSpy}>
                {children}
            </SidebarItem>
        );
        await userEvent.click(screen.getByRole('button'));
        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
});
