import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonIcon } from './ButtonIcon';

const MockIcon = () => <svg data-testid="icon" />;

describe('ButtonIcon', () => {
    test('should render a button with the provided icon component', () => {
        render(<ButtonIcon icon={<MockIcon />} label="Test Button" />);

        const button = screen.getByRole('button', { name: 'Test Button' });
        expect(button).toBeInTheDocument();

        const iconElement = screen.getByTestId('icon');
        expect(iconElement).toBeInTheDocument();
    });

    test('should apply the "Brand" font variant when specified in the font prop', () => {
        render(<ButtonIcon icon={<MockIcon />} label="Brand Button" font="Brand" />);

        const button = screen.getByRole('button', { name: 'Brand Button' });
        expect(button).toHaveClass('brand-lab-2');

        const label = screen.getByText('Brand Button');
        expect(label).toHaveClass('brand-lab-2');
    });
});
