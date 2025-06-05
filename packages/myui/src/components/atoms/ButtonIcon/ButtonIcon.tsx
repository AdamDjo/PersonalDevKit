import classNames from 'classnames';
import { ButtonIconProps } from './ButtonIcon.types';

const variantFontClasses = {
  font: {
    Brand: 'brand-lab-2',
    System: 'sys-lab-2-sb',
  },
};

export const ButtonIcon = ({
  icon,
  label,
  arialLabel,
  onClick,
  font = 'System',
}: ButtonIconProps) => {
  return (
    <div className="myui-flex myui-cursor-pointer myui-flex-col myui-items-center myui-justify-center">
      <button
        type="button"
        aria-label={label ?? arialLabel}
        onClick={onClick}
        className={classNames(
          'myui-flex myui-items-center myui-justify-center',
          'myui-h-[28px] myui-w-[28px] myui-min-w-[0]',
          'myui-rounded-full myui-p-0',
          'myui-transition-colors myui-duration-200',
          'myui-bg-background-icon-btn',
          variantFontClasses.font[font]
        )}
      >
        <div className="myui-flex myui-h-4 myui-w-4 myui-items-center myui-justify-center">
          {icon}
        </div>
      </button>
      <span
        className={classNames(
          'myui-mt-1 myui-text-center !myui-text-xs myui-font-normal myui-leading-4',
          'myui-text-txt-icon-btn',
          variantFontClasses.font[font]
        )}
      >
        {label}
      </span>
    </div>
  );
};
