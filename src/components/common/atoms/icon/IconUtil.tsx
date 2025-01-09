import { IconProps } from '.';
import { IconColors, IconColorType, IconSizeType } from './IconType';

// SVG icons
import CirCleCheck from '@svg/icon_circle_check.svg';
import CircleError from '@svg/icon_circle_error.svg';
import Close from '@svg/icon_close.svg';

export enum IconNameType {
  circleCheck = 'circleCheck',
  circleError = 'circleError',
  close = 'close',
}

export const getElement = ({ name, size, fill, disabled }: IconProps) => {
  const svgProps = {
    ...getIconSize(size),
    fill: disabled ? IconColors[IconColorType.disabled] : IconColors[fill ?? IconColorType.default],
    viewBox: '0 0 32 32',
  };

  /**
   * @description viewBox가 다른 경우 직접 입력
   * 보통 0 0 32 32
   */
  switch (name) {
    case 'circleCheck':
      return <CirCleCheck {...svgProps} />;
    case 'circleError':
      return <CircleError {...svgProps} />;
    case 'close':
      return <Close {...svgProps} />;
  }
};

const getIconSize = (size: IconSizeType) => {
  switch (size) {
    case IconSizeType.XL:
      return {
        width: '48px',
        height: '48px',
      };
    case IconSizeType.L:
      return {
        width: '40px',
        height: '40px',
      };
    case IconSizeType.M:
      return {
        width: '32px',
        height: '32px',
      };
    case IconSizeType.S:
      return {
        width: '24px',
        height: '24px',
      };
    default:
      return {
        width: '20px',
        height: '20px',
      };
  }
};
