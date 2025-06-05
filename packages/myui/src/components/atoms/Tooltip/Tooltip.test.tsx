import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';

describe('Tooltip tests', () => {
    test('Tooltip renders correctly', () => {
        render(<Tooltip>Coucou</Tooltip>);
        const tooltip = screen.getByTestId('TooltipDataTestId');
        expect(tooltip).toBeInTheDocument();
    });

    test('Tooltip renders tooltip text correctly if prop is specified', () => {
        render(<Tooltip toolTipContent="dummy">Coucou</Tooltip>);
        const tooltip = screen.getByTestId('TooltipDataTestId');
        expect(tooltip).toBeInTheDocument();
        expect(screen.getByText('dummy')).toBeInTheDocument();
    });

    test('Tooltip renders light theme and hover display tooltip', async () => {
        render(<Tooltip>Coucou</Tooltip>);
        const tooltip = screen.getByTestId('TooltipDataTestId');
        await userEvent.hover(tooltip);
        const text = screen.getByText('Coucou');
        expect(text).toBeInTheDocument();
    });

    test('Tooltip renders dark theme and hover display tooltip on right', async () => {
        render(<Tooltip position="right">Coucou</Tooltip>);
        const tooltip = screen.getByTestId('TooltipDataTestId');
        await userEvent.hover(tooltip);
        const text = screen.getByText('Coucou');
        expect(text).toBeInTheDocument();
    });

    test('Tooltip renders light theme and hover display tooltip on right', async () => {
        render(<Tooltip position="right">Coucou</Tooltip>);
        const tooltip = screen.getByTestId('TooltipDataTestId');
        await userEvent.hover(tooltip);
        const text = screen.getByText('Coucou');
        expect(text).toBeInTheDocument();
    });

    test('Tooltip renders and hover in and hover out', async () => {
        render(<Tooltip position="right">Coucou</Tooltip>);
        const tooltip = screen.getByTestId('TooltipDataTestId');

        await userEvent.hover(tooltip);
        const text = screen.getByText('Coucou');
        expect(text).toBeInTheDocument();

        await userEvent.unhover(tooltip);
        expect(text).not.toBeInTheDocument();
    });
});
