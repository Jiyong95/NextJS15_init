import { FC } from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { BadgeSizeType, BadgeType } from "./BadgeType";
import { FontStyle, FontStyleType } from "@atoms/types/FontStyleType";
import { TextColor, TextColorType } from "@atoms/text/TextType";
import { BackgroundColor, BackgroundColorType } from "@atoms/types/color/BackgroundColorType";
import { BorderColorType } from "@atoms/types/color/BorderColorType";
import { getBadgeBorderStyle, getBadgeRadiusStyle, getBadgeSpaceStyle } from "./BadgeUtil";

const cx = classnames.bind(styles);

export const BadgeOption = {
  type: BadgeType,
  size: BadgeSizeType,
  fontStyle: FontStyleType,
  color: TextColorType,
  backgroundColor: BackgroundColorType,
  borderColor: BorderColorType,
};

interface Props {
  className?: string;
  type?: BadgeType;
  size?: BadgeSizeType;
  fontStyle?: FontStyleType;
  color?: TextColorType;
  backgroundColor?: BackgroundColorType;
  borderColor?: BorderColorType;
  styles?: React.CSSProperties;
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
 * @param {React.CSSProperties} [styles] - 추가 인라인 스타일.
 */

const Badge: FC<Props> = ({
  className,
  type = BadgeType.Fill,
  size = BadgeSizeType.L,
  fontStyle = FontStyleType.body_1_b,
  color = TextColorType.default,
  backgroundColor = BackgroundColorType.surface_default,
  borderColor,
  styles,
  children,
}) => {
  const style = {
    ...FontStyle[fontStyle],
    color: TextColor[color],
    backgroundColor: backgroundColor ? BackgroundColor[backgroundColor] : undefined,
    ...getBadgeBorderStyle(type, borderColor),
    ...getBadgeRadiusStyle(size),
    ...getBadgeSpaceStyle(size),
    ...styles,
  };

  return (
    <div className={cx("badge", className)} style={style}>
      {children}
    </div>
  );
};

export default Badge;
