import classNames from 'classnames';
import { StepperProps } from './Stepper.types';

export const Stepper = ({ steps, isVertical = false }: StepperProps) => {
  return (
    <ul
      data-testid="StepperDataTestId"
      className={classNames('sys-title-6', {
        'myui-flex-col': isVertical,
        'myui-flex': !isVertical,
      })}
    >
      {steps.map(({ id, label, isCompleted, value, onClick }) => {
        return (
          <li
            key={id}
            className={classNames(
              'myui-relative myui-flex myui-transition-all myui-delay-300 myui-ease-in-out before:myui-absolute after:myui-border-solid after:myui-content-[""] first:before:myui-content-none last:after:myui-content-none',

              {
                'myui-flex-row myui-place-items-start myui-py-spc-200 before:myui-left-200 before:myui-top-[-50%] before:myui-h-full before:myui-border-y-0 before:myui-border-l-regular before:myui-border-r-0 before:myui-border-solid before:myui-content-[""] after:myui-absolute after:myui-left-200 after:myui-top-[50%] after:myui-h-full after:myui-border-y-0 after:myui-border-l-regular after:myui-border-r-0':
                  isVertical,
                'myui-flex-1 myui-flex-col myui-items-center before:myui-left-[-50%] before:myui-top-200 before:myui-w-full before:myui-border-x-0 before:myui-border-b-regular before:myui-border-t-0 before:myui-border-solid before:myui-content-[""] after:myui-absolute after:myui-left-[50%] after:myui-top-200 after:myui-w-full after:myui-border-x-0 after:myui-border-b-regular after:myui-border-t-0':
                  !isVertical,
              },
              {
                'before:myui-z-[1] before:myui-border-border-active after:myui-z-[1] after:myui-border-border-active':
                  isCompleted,
                'before:myui-border-border-opaque after:myui-border-border-opaque':
                  !isCompleted,
              }
            )}
          >
            <button
              onClick={onClick}
              className="myui-cursor-pointer myui-border-none myui-bg-transparent"
            >
              <p
                className={classNames(
                  {
                    'myui-mr-50': isVertical,
                    'myui-mb-50': !isVertical,
                  },
                  'myui-relative myui-z-20 myui-flex myui-h-400 myui-w-400 myui-items-center myui-justify-center myui-rounded-full myui-text-white',
                  {
                    'myui-bg-border-active': isCompleted,
                    'myui-bg-border-opaque': !isCompleted,
                  }
                )}
              >
                {id}
              </p>
            </button>
            {isVertical ? (
              <p className="myui-ms-4 myui-inline-flex myui-flex-col myui-justify-items-start">
                {label}
                <span className="myui-clear-both myui-block myui-w-full myui-text-base myui-font-light myui-text-neutral-400">
                  {value}
                </span>
              </p>
            ) : (
              <p className="sys-title-6-sb myui-text-center">{label}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
};
