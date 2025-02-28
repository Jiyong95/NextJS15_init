import classnames from 'classnames/bind';
import React from 'react';

import { FontStyle, FontStyleType } from '@constant/styles/FontStyleType';

import { TextColor, TextColorType, TextElementType } from './TextType';

import styles from './index.module.scss';

const cx = classnames.bind(styles);

export const TextOption = {
  element: TextElementType,
  fontStyle: FontStyleType,
  color: TextColorType,
};

interface TextProps {
  element?: TextElementType;
  className?: string;
  fontStyle?: FontStyleType;
  color?: TextColorType;
  ellipsis?: number;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * @param {TextElementType} [element] - 사용할 태그 지정.
 * @param {string} [className] - 추가 클래스를 설정.
 * @param {FontStyleType} [fontStyle] - 폰트 스타일 타입.
 * @param {TextColorType} [color] - 폰트 색상 타입.
 * @param {number} [ellipsis] - 말 줄임 효과 적용.
 * @param {React.CSSProperties} [styles] - 추가 인라인 스타일.
 */

const Text = ({
  element = TextElementType.P,
  children,
  className,
  fontStyle = FontStyleType.BODY_1_B,
  color = TextColorType.DEFAULT,
  styles,
  ellipsis,
}: TextProps) => {
  const Element = element;
  const style = {
    ...FontStyle[fontStyle],
    color: TextColor[color],
    ...styles,
  };

  return (
    <Element className={cx(className, { [`ellipsis-${ellipsis}`]: ellipsis })} style={style}>
      {children}
    </Element>
  );
};

export default Text;
