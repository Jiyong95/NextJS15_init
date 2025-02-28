import classNames from 'classnames/bind';
import React, { FC, ReactNode } from 'react';

import { RadioSizeType } from './RadioType';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

export const RadioOption = {
  size: RadioSizeType,
};

interface RadioProps {
  className?: string;
  size?: RadioSizeType;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  value: string;
}

const Radio: FC<RadioProps> = ({ className, size = RadioSizeType.L, onClick, selected, disabled }) => {
  return (
    <button
      className={cx('wrap', className, [size], { selected }, { disabled })}
      onClick={onClick}
      disabled={disabled}
    />
  );
};

interface RadioGroupProps {
  className?: string;
  value?: string;
  onChange?: (value?: string) => void;
  disabled?: boolean;
  children: ReactNode;
}

const RadioGroup: FC<RadioGroupProps> & { Radio: typeof Radio } = ({
  className,
  value,
  onChange,
  disabled,
  children,
}) => {
  const handleRadioClick = (props: RadioProps) => {
    if (props.value === value) onChange?.(undefined);
    else onChange?.(props.value);
  };

  return (
    <div className={cx(className)}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<RadioProps>(child)) return null;

        return React.cloneElement(child, {
          ...child.props,
          selected: child.props.value === value,
          onClick: () => handleRadioClick(child.props),
          disabled: disabled || child.props.disabled,
        });
      })}
    </div>
  );
};

RadioGroup.Radio = Radio;

export default RadioGroup;
