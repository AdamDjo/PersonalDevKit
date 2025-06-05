import { OnClickButton } from '@custom-types/button.types';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

let onClickSpy: OnClickButton;

beforeEach(() => {
  onClickSpy = jest.fn();
});
const children = 'Click';
const leftIcon = 'Left Icon Text';
const rightIcon = 'Right Icon Text';

describe('Button', () => {
  test('renders the Button component with default props', () => {
    render(<Button>{children}</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toHaveAttribute('type', 'button');
    expect(buttonEl).toHaveClass('myui-bg-btn-primary');
    expect(buttonEl).toHaveClass('brand-lab-2');
    expect(buttonEl).toBeEnabled();
  });

  test('renders the Button component with secondary variant', () => {
    render(<Button variant="secondary">{children}</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toHaveClass('myui-bg-btn-secondary');
    expect(buttonEl).toHaveClass('brand-lab-2');
  });

  test('renders the Button component with tertiary variant', () => {
    render(<Button variant="tertiary">{children}</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toHaveClass('myui-bg-btn-tertiary');
    expect(buttonEl).toHaveClass('brand-lab-3');
  });

  test('renders the Button component with text variant', () => {
    render(<Button variant="text">{children}</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toHaveClass('myui-text-btn-text');
    expect(buttonEl).toHaveClass('brand-lab-2');
  });

  test('renders the Button component with submit type', () => {
    render(<Button type="submit">{children}</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toHaveAttribute('type', 'submit');
  });

  test('renders the Button component with reset type', () => {
    render(<Button type="reset">{children}</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toHaveAttribute('type', 'reset');
  });

  test('renders the Button component with System font', () => {
    render(<Button font="System">{children}</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toHaveClass('sys-lab-2-sb');
  });

  test('renders the Button component with disable', () => {
    render(<Button disabled>{children}</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeDisabled();
  });

  test('renders the Button component with isLoading', () => {
    render(<Button isLoading>{children}</Button>);
    const spinner = screen.getByRole('progressbar');
    expect(spinner).toBeInTheDocument();
  });

  test('renders the Button component with left and right icon', () => {
    const LeftIcon = <div>{leftIcon}</div>;
    const RightIcon = <div>{rightIcon}</div>;
    render(
      <Button leftIcon={LeftIcon} rightIcon={RightIcon}>
        {children}
      </Button>
    );
    const leftIconEl = screen.getByText(leftIcon);
    const rightIconEl = screen.getByText(rightIcon);
    expect(leftIconEl).toBeInTheDocument();
    expect(rightIconEl).toBeInTheDocument();
  });

  test('renders the Button component with onClick action', async () => {
    render(<Button onClick={onClickSpy}>{children}</Button>);

    await userEvent.click(screen.getByRole('button'));
    expect(onClickSpy).toHaveBeenCalled();
  });
});
