// SVG icons
/**
 * @description icon추가시 아이콘안에 배경색이 있으면 fill을 추가하여 파일명을 작성한다.
 */
import CirCleCheck_fill from '@svg/icon_circle_check_fill.svg';
import CircleError_fill from '@svg/icon_circle_error_fill.svg';
import CircleInfo from '@svg/icon_circle_info.svg';
import CircleInfo_fill from '@svg/icon_circle_info_fill.svg';
import Close from '@svg/icon_close.svg';

import { IconProps } from '.';
import { IconColors, IconColorType, IconSizeType } from './IconType';

export enum IconNameType {
  //C
  circleCheck_fill = 'circleCheck_fill',
  circleError_fill = 'circleError_fill',
  circleInfo = 'circleInfo',
  circleInfo_fill = 'circleInfo_fill',
  close = 'close',
}

export const getElement = ({ name, size, fill, disabled }: IconProps) => {
  const svgProps = {
    ...getIconSize(size),
    fill: disabled ? IconColors[IconColorType.disabled] : IconColors[fill ?? IconColorType.default],
    viewBox: '0 0 32 32',
  };

  /**
   * @description icon추가시 width, height가 32인 svg파일을 추가한다.
   * 불가능할 경우 추가 후 viewBox가 다르면 직접 입력
   */
  switch (name) {
    case 'circleCheck_fill':
      return <CirCleCheck_fill {...svgProps} />;
    case 'circleError_fill':
      return <CircleError_fill {...svgProps} />;
    case 'circleInfo':
      return <CircleInfo {...svgProps} />;
    case 'circleInfo_fill':
      return <CircleInfo_fill {...svgProps} />;
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
