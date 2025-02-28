import classnames from 'classnames/bind';
import { FC } from 'react';

import { SwitchSizeType } from './SwitchType';

import styles from './index.module.scss';

const cx = classnames.bind(styles);

export const SwitchOption = {
  size: SwitchSizeType,
};

interface Props {
  className?: string;
  size?: SwitchSizeType;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Switch: FC<Props> = ({ size = SwitchSizeType.L, onClick, selected, disabled }) => {
  return (
    <button className={cx('switch', [size], { selected }, { disabled })} onClick={onClick} disabled={disabled}>
      <span className={cx('slider')} />
    </button>
  );
};

export default Switch;
