import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CountDown } from './CountDown';

const MockIcon = () => <svg data-testid="icon" />;

describe('CountDown', () => {
    test('should render a countdown with the provided icon component', () => {
        render(<CountDown icon={<MockIcon />} label="Lorem ipsum" />);

        const labelElement = screen.getByText('Lorem ipsum');
        expect(labelElement).toBeInTheDocument();

        const iconElement = screen.getByTestId('icon');
        expect(iconElement).toBeInTheDocument();
    });
});
