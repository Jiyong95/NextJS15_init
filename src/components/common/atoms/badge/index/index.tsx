import classnames from 'classnames/bind';
import { FC } from 'react';

import Text, { TextOption } from '@atoms/text';

import { BadgeColor, BadgeType } from './BadgeType';

import styles from './index.module.scss';
const cx = classnames.bind(styles);

export const BadgeOption = {
  type: BadgeType,
  color: BadgeColor,
};

interface Props {
  className?: string;
  type?: BadgeType;
  color?: BadgeColor;
  numberValue?: number;
}

const Badge: FC<Props> = ({ className, type = BadgeType.DOT, color = BadgeColor.BRAND, numberValue }) => {
  const getContent = () => {
    switch (type) {
      case BadgeType.DOT:
        return <span />;
      case BadgeType.NUMBER:
        return (
          <Text fontStyle={TextOption.fontStyle.CAPTION_2_SB} color={TextOption.color.INVERSE}>
            {numberValue}
          </Text>
        );
      case BadgeType.NEW:
        return (
          <Text fontStyle={TextOption.fontStyle.CAPTION_2_SB} color={TextOption.color.INVERSE}>
            N
          </Text>
        );
    }
  };

  return <span className={cx('badge', className, type, color)}>{getContent()}</span>;
};

export default Badge;
