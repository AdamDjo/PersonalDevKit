import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OnClickButton } from '../../..';
import { AlertBox } from './AlertBox';
import test, { beforeEach, describe } from 'node:test';

let onClickSpy: OnClickButton;

beforeEach(() => {
  onClickSpy = jest.fn();
});

describe('AlertBox', () => {
  test('AlertBox renders correctly', () => {
    render(<AlertBox title="AlertBox" />);
    const alertBox = screen.getByTestId('AlertBoxTestId');
    expect(alertBox).toBeInTheDocument();
  });

  test('AlertBox renders correctly with icon', () => {
    render(<AlertBox title="AlertBox" variant="hint" showClosingIcon />);
    const alertBoxCloseIcon = screen.getByRole('button');
    expect(alertBoxCloseIcon).toBeInTheDocument();
  });

  test('AlertBox renders correctly with icon handler test', async () => {
    render(
      <AlertBox title="AlertBox" showClosingIcon onCloseIconClick={onClickSpy}>
        <p>AlertBox</p>
      </AlertBox>
    );
    const alertBoxCloseIcon = screen.getByRole('button');
    expect(alertBoxCloseIcon).toBeInTheDocument();

    await userEvent.click(alertBoxCloseIcon);
    expect(onClickSpy).toHaveBeenCalled();
  });

  test('should display content', () => {
    render(
      <AlertBox title="AlertBox" showClosingIcon onCloseIconClick={onClickSpy}>
        <p>Alert</p>
      </AlertBox>
    );

    expect(screen.getByText('Alert')).toBeInTheDocument();
  });
});
