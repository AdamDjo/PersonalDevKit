import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Stepper } from './Stepper';

describe('Stepper tests', () => {
  const onClickOne = jest.fn();
  const onClickTwo = jest.fn();
  const onClickThree = jest.fn();
  const mockSteps = [
    {
      id: 1,
      label: 'A',
      value: 'A',
      isCompleted: false,
      onClick: onClickOne,
    },
    {
      id: 2,
      label: 'B',
      value: 'B',
      isCompleted: true,
      onClick: onClickTwo,
    },
    {
      id: 3,
      label: 'C',
      value: 'C',
      isCompleted: false,
      onClick: onClickThree,
    },
  ];
  test('Stepper renders correctly', () => {
    render(<Stepper steps={[]} isVertical />);
    const componentElement = screen.getByTestId('StepperDataTestId');
    expect(componentElement).toBeInTheDocument();
  });

  test('can correctly click on each steps', async () => {
    render(<Stepper steps={mockSteps} isVertical />);
    const steps = screen.getAllByRole('button');

    await userEvent.click(steps[0]);

    await userEvent.click(steps[1]);

    await userEvent.click(steps[2]);

    expect(onClickOne).toHaveBeenCalled();
    expect(onClickTwo).toHaveBeenCalled();
    expect(onClickThree).toHaveBeenCalled();
  });
  test('renders in vertical mode with correct styling', () => {
    render(<Stepper steps={mockSteps} isVertical />);
    const stepper = screen.getByTestId('StepperDataTestId');
    expect(stepper).toHaveClass('myui-flex-col');

    const stepItems = screen.getAllByRole('listitem');
    expect(stepItems[0]).toHaveClass('myui-flex-row');
  });
});
