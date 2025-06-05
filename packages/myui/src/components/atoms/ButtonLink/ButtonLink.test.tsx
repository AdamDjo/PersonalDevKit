import { render, screen } from '@testing-library/react';
import { ButtonLink } from './ButtonLink';

describe('ButtonLink Component', () => {
    it('render the ButtonLink with an icon', () => {
        render(<ButtonLink icon>Click Me</ButtonLink>);
        const iconElement = screen.getByTestId('icon');
        expect(iconElement).toBeInTheDocument();
    });

    it('renders the ButtonLink as a link with href', () => {
        render(<ButtonLink href="https://example.com">Go to Example</ButtonLink>);
        const linkElement = screen.getByRole('link', { name: /go to example/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', 'https://example.com');
    });
});
