import classnames from 'classnames/bind';
import { FC } from 'react';

import { BackgroundColor, BackgroundColorType } from '@constant/styles/color/BackgroundColorType';
import { BorderColorType } from '@constant/styles/color/BorderColorType';
import { FontStyle, FontStyleType } from '@constant/styles/FontStyleType';

import { TextColor, TextColorType } from '@atoms/text/TextType';

import { BadgeContentSizeType, BadgeContentType } from './BadgeContentType';
import { getBadgeContentBorderStyle, getBadgeConetentRadiusStyle, getBadgeContentSpaceStyle } from './BadgeContentUtil';

import styles from './index.module.scss';

const cx = classnames.bind(styles);

export const BadgeContentOption = {
  type: BadgeContentType,
  size: BadgeContentSizeType,
  fontStyle: FontStyleType,
  color: TextColorType,
  backgroundColor: BackgroundColorType,
  borderColor: BorderColorType,
};

interface Props {
  className?: string;
  type?: BadgeContentType;
  size?: BadgeContentSizeType;
  fontStyle?: FontStyleType;
  color?: TextColorType;
  backgroundColor?: BackgroundColorType;
  borderColor?: BorderColorType;
  children?: React.ReactNode;
}

/**
 * @param {string} [className] - 추가 클래스를 설정.
 * @param {BadgeType} [type] - 뱃지 스타일 타입.
 * @param {ButtonSizeType} [size] - 뱃지 크기 타입.
 * @param {FontStyleType} [fontStyle] - 폰트 스타일 타입.
 * @param {TextColorType} [color] - 폰트 색상 타입.
 * @param {BackgroundColorType} [backgroundColor] - 뱃지 배경색.
 * @param {BorderColorType} [borderColor] - 뱃지 border 컬러.
 */

const BadgeContent: FC<Props> = ({
  className,
  type = BadgeContentType.FILL,
  size = BadgeContentSizeType.L,
  fontStyle = FontStyleType.BODY_1_B,
  color = TextColorType.DEFAULT,
  backgroundColor = BackgroundColorType.SURFACE_DEFAULT,
  borderColor,
  children,
}) => {
  const style = {
    ...FontStyle[fontStyle],
    color: TextColor[color],
    backgroundColor: backgroundColor ? BackgroundColor[backgroundColor] : undefined,
    ...getBadgeContentBorderStyle(type, borderColor),
    ...getBadgeConetentRadiusStyle(size),
    ...getBadgeContentSpaceStyle(size),
  };

  return (
    <div className={cx('badge', className)} style={style}>
      {children}
    </div>
  );
};

export default BadgeContent;
