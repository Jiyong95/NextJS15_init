// Created by kdw0601 on 2021-07-26
import classNames from 'classnames/bind';
import { FC } from 'react';

import Icon, { IconOption } from '@atoms/icon';

import { CheckboxSizeType } from './CheckboxType';

import styles from './index.module.scss';

const cx = classNames.bind(styles);

/* 아직 size에 대한 css 안정해졌음.
  size props는 사용 x
*/
export const CheckboxOption = {
  size: CheckboxSizeType,
};

interface Props {
  className?: string;
  size?: CheckboxSizeType;
  selected?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onClick?: () => void;
}

const Checkbox: FC<Props> = ({ className, size = CheckboxSizeType.L, onClick, selected, disabled, indeterminate }) => {
  return (
    <button
      className={cx('wrap', className, [size], { selected }, { disabled }, { indeterminate })}
      onClick={onClick}
      disabled={disabled}>
      {(selected || indeterminate) && (
        <Icon
          name={indeterminate ? IconOption.name.REMOVE : IconOption.name.CHECK}
          size={IconOption.size.XS}
          fill={disabled ? IconOption.fill.DISABLED : IconOption.fill.INVERSE}
        />
      )}
    </button>
  );
};

export default Checkbox;
