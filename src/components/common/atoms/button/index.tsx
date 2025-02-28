import classnames from 'classnames/bind';
import Link, { LinkProps } from 'next/link';
import React from 'react';

import { FillColorType } from '@constant/styles/color/FillColorType';
import { FontStyle, FontStyleType } from '@constant/styles/FontStyleType';
import useDebounce from '@hooks/useDebounce';

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

interface customAPropsType extends LinkProps {
  target?: React.HTMLAttributeAnchorTarget;
}

interface customButtomPropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  debounce?: number;
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
  aProps?: customAPropsType;
  buttonProps?: customButtomPropsType;
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
 */

const Button = ({
  children,
  className,
  type = ButtonType.FILL,
  size = ButtonSizeType.L,
  aProps,
  buttonProps,
  fontStyle = FontStyleType.BODY_1_B,
  color = TextColorType.DEFAULT,
  iconName,
  iconPosition,
  iconColor,
  fill,
  isLoading,
}: Props) => {
  const style = {
    ...FontStyle[fontStyle],
    color: TextColor[color],
    ...getButtonRadiusStyle(size),
    ...getButtonSpaceStyle(size, iconPosition),
    ...getButtonBorderStyle(type),
  };

  // 버튼 클릭 디바운스 처리
  const handleButtonClick = useDebounce((e: React.MouseEvent<HTMLButtonElement>) => {
    buttonProps?.onClick?.(e);
  }, buttonProps?.debounce || 500);

  if (aProps) {
    return (
      <Link className={cx('button', className, type, fill)} {...aProps} style={style}>
        <div className={cx('inner')}>
          {iconName && iconPosition === ButtonIconPositionType.LEFT && (
            <Icon name={iconName} size={getButtonIconSize(size)} fill={iconColor} />
          )}
          {children}
          {iconName && iconPosition === ButtonIconPositionType.RIGHT && (
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
      onClick={handleButtonClick}
      disabled={buttonProps?.disabled || isLoading}
      type={buttonProps?.type}
      style={style}>
      <div className={cx('inner')}>
        {iconName && iconPosition === ButtonIconPositionType.LEFT && (
          <Icon name={iconName} size={getButtonIconSize(size)} fill={iconColor} disabled={buttonProps?.disabled} />
        )}
        {isLoading ? <span className={cx('spinner')} style={{ borderColor: TextColor[color] }} /> : children}
        {iconName && iconPosition === ButtonIconPositionType.RIGHT && (
          <Icon name={iconName} size={getButtonIconSize(size)} fill={iconColor} disabled={buttonProps?.disabled} />
        )}
      </div>
    </button>
  );
};

export default Button;
