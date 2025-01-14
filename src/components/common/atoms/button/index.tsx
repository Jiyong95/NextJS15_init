import classnames from 'classnames/bind';
import Link, { LinkProps } from 'next/link';
import React from 'react';

import { FillColorType } from '@constant/styles/color/FillColorType';
import { FontStyle, FontStyleType } from '@constant/styles/FontStyleType';

import { IconColorType } from '@atoms/icon/IconType';
import { IconNameType } from '@atoms/icon/IconUtil';
import { TextColor, TextColorType } from '@atoms/text/TextType';

import Icon from '../icon';
import { ButtonIconPositionType, ButtonSizeType, ButtonType } from './ButtonType';
import { getButtonBorderStyle, getButtonIconSize, getButtonRadiusStyle, getButtonSpaceStyle } from './ButtonUtil';

import styles from './index.module.scss';

const cx = classnames.bind(styles);

export const ButtonOption = {
  type: ButtonType,
  size: ButtonSizeType,
  fill: FillColorType,
  fontStyle: FontStyleType,
  color: TextColorType,
  iconName: IconNameType,
  iconPosition: ButtonIconPositionType,
  iconColor: IconColorType,
};

interface aPropsType extends LinkProps {
  target?: string;
}

interface Props {
  className?: string;
  type?: ButtonType;
  size?: ButtonSizeType;
  fill?: FillColorType;
  fontStyle?: FontStyleType;
  color?: TextColorType;
  iconName?: IconNameType;
  iconPosition?: ButtonIconPositionType;
  iconColor?: IconColorType;
  isLoading?: boolean;
  aProps?: aPropsType;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * @param {string} [className] - 추가 클래스를 설정.
 * @param {ButtonType} [type=ButtonType.Fill] - 버튼 스타일 타입.
 * @param {ButtonSizeType} [size=ButtonSizeType.L] - 버튼 크기 타입.
 * @param {object} [aProps] - Link태그 속성.
 * @param {object} [buttonProps] - button태그 속성.
 * @param {FontStyleType} [fontStyle=FontStyleType.body_1_b] - 폰트 스타일 타입.
 * @param {TextColorsType} [color=TextColorsType.default] - 폰트 색상 타입.
 * @param {string} [iconName] - 버튼에 들어갈 아이콘 이름.
 * @param {ButtonIconPositionType} [iconPosition] - 아이콘 위치.
 * @param {string} [iconColor] - 아이콘 색상.
 * @param {string} [fill] - 버튼 색상.
 * @param {boolean} [isLoading] - 버튼 로딩 여부.
 * @param {React.CSSProperties} [styles] - 추가 인라인 스타일.
 */

const Button = ({
  children,
  className,
  type = ButtonType.Fill,
  size = ButtonSizeType.L,
  aProps,
  buttonProps,
  fontStyle = FontStyleType.body_1_b,
  color = TextColorType.default,
  iconName,
  iconPosition,
  iconColor,
  fill,
  isLoading,
  styles,
}: Props) => {
  const style = {
    ...FontStyle[fontStyle],
    color: TextColor[color],
    ...getButtonRadiusStyle(size),
    ...getButtonSpaceStyle(size, iconPosition),
    ...getButtonBorderStyle(type),
    ...styles,
  };

  if (aProps) {
    return (
      <Link className={cx('button', className, type, fill)} {...aProps} style={style}>
        <div className={cx('inner')}>
          {iconName && iconPosition === 'left' && (
            <Icon name={iconName} size={getButtonIconSize(size)} fill={iconColor} />
          )}
          {children}
          {iconName && iconPosition === 'right' && (
            <Icon name={iconName} size={getButtonIconSize(size)} fill={iconColor} />
          )}
        </div>
      </Link>
    );
  }

  return (
    <button
      className={cx('button', className, type, fill, {
        isLoading,
      })}
      {...buttonProps}
      disabled={buttonProps?.disabled || isLoading}
      type={buttonProps?.type}
      style={style}>
      <div className={cx('inner')}>
        {iconName && iconPosition === 'left' && (
          <Icon name={iconName} size={getButtonIconSize(size)} fill={iconColor} disabled={buttonProps?.disabled} />
        )}
        {isLoading ? <span className={cx('spinner')} style={{ borderColor: TextColor[color] }} /> : children}
        {iconName && iconPosition === 'right' && (
          <Icon name={iconName} size={getButtonIconSize(size)} fill={iconColor} disabled={buttonProps?.disabled} />
        )}
      </div>
    </button>
  );
};

export default Button;
