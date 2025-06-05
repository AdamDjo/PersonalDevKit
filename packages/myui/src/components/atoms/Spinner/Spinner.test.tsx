import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner tests', () => {
  test('renders the Spinner component with default props', () => {
    render(<Spinner />);
    const spinner = screen.getByRole('progressbar');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('myui-w-[24px] myui-h-[24px]');
  });
  test('renders the Spinner component with medium size', () => {
    render(<Spinner size="medium" />);
    const spinner = screen.getByRole('progressbar');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('myui-w-[64px] myui-h-[64px]');
  });
  test('renders the Spinner component with large size', () => {
    render(<Spinner size="large" />);
    const spinner = screen.getByRole('progressbar');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('myui-w-[128px] myui-h-[128px]');
  });
});
