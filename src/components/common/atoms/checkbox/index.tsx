// Created by kdw0601 on 2021-07-26
import classNames from 'classnames/bind';
import { FC } from 'react';

import Icon, { IconOption } from '@atoms/icon';

import { CheckboxSizeType } from './CheckboxType';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

interface Props {
  className?: string;
  size?: CheckboxSizeType;
  selected?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onClick?: () => void;
}

const Checkbox: FC<Props> = ({
  className,
  size = CheckboxSizeType.L,
  onClick,
  selected = false,
  disabled,
  indeterminate,
}) => {
  return (
    <button
      className={cx('wrap', className, [size], { selected }, { disabled }, { indeterminate })}
      onClick={onClick}
      disabled={disabled}>
      {(selected || indeterminate) && (
        <Icon
          name={indeterminate ? IconOption.name.remove : IconOption.name.check}
          size={IconOption.size.XS}
          fill={disabled ? IconOption.fill.disabled : IconOption.fill.inverse}
        />
      )}
    </button>
  );
};

export default Checkbox;
