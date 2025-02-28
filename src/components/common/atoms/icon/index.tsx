import { FC } from 'react';

import { IconColorType, IconSizeType } from './IconType';
import { getElement, IconNameType } from './IconUtil';

export const IconOption = {
  name: IconNameType,
  size: IconSizeType,
  fill: IconColorType,
};

export interface IconProps {
  name: IconNameType;
  size?: IconSizeType;
  fill?: IconColorType;
  disabled?: boolean;
}

/**
 * @param name - 아이콘 이름.
 * @param size - 아이콘 사이즈.
 * @param fill - 아이콘 색상.
 * @param disabled - 아이콘  disabled 색상 적용.
 */

const Icon: FC<IconProps> = (props) => {
  return getElement(props);
};

export default Icon;
