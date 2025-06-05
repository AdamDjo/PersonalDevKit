import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('renders card component with children', () => {
    render(
        <Card>
            <p>Test Content</p>
        </Card>
    );

    const contentElement = screen.getByText(/Test Content/i);
    expect(contentElement).toBeInTheDocument();
});
