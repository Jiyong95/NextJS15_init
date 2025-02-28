// SVG icons
/**
 * @description icon추가시 아이콘안에 배경색이 있으면 fill을 추가하여 파일명을 작성한다.
 */

import classnames from 'classnames/bind';

// A
import ArrowBottom from '@svg/icon_arrow_bottom.svg';
import ArrowTop from '@svg/icon_arrow_top.svg';
// B
import Bell from '@svg/icon_bell.svg';
// C
import ChatLogo from '@svg/icon_chat_logo.svg';
import Check from '@svg/icon_check.svg';
import CirCleCheck_fill from '@svg/icon_circle_check_fill.svg';
import CircleClear_fill from '@svg/icon_circle_clear_fill.svg';
import CircleError_fill from '@svg/icon_circle_error_fill.svg';
import CircleInfo from '@svg/icon_circle_info.svg';
import CircleInfo_fill from '@svg/icon_circle_info_fill.svg';
import Close from '@svg/icon_close.svg';
// F
import File from '@svg/icon_file.svg';
// N
// H
import Heart_fill from '@svg/icon_heart_fill.svg';
// R
import Menu from '@svg/icon_menu.svg';
import NewLink from '@svg/icon_new_link.svg';
// R
import Remove from '@svg/icon_remove.svg';
// S
import Search from '@svg/icon_search.svg';

// L
// M

import { IconProps } from '.';
import { IconColors, IconColorType, IconSizeType } from './IconType';

import styles from './index.module.scss';

const cx = classnames.bind(styles);

export enum IconNameType {
  // A
  ARROW_BOTTOM = 'ARROW_BOTTOM',
  ARROW_TOP = 'ARROW_TOP',
  // B
  BELL = 'BELL',
  // C
  CIRCLE_CHECK_FILL = 'CIRCLE_CHECK_FILL',
  CIRCLE_ERROR_FILL = 'CIRCLE_ERROR_FILL',
  CIRCLE_INFO = 'CIRCLE_INFO',
  CIRCLE_INFO_FILL = 'CIRCLE_INFO_FILL',
  CLOSE = 'CLOSE',
  CHECK = 'CHECK',
  CIRCLE_CLEAR_FILL = 'CIRCLE_CLEAR_FILL',
  CHAT_LOGO = 'CHAT_LOGO',
  // F
  FILE = 'FILE',

  // H
  HEART_FILL = 'HEART_FILL',
  // N
  NEW_LINK = 'NEW_LINK',
  // R
  REMOVE = 'REMOVE',

  //S
  SEARCH = 'SEARCH',
  // L
  // M
  MENU = 'MENU',
}

export const getElement = ({ name, size = IconSizeType.M, fill, disabled }: IconProps) => {
  const svgProps = {
    className: cx('icon'),
    ...getIconSize(size),
    fill: disabled ? IconColors[IconColorType.DISABLED] : IconColors[fill ?? IconColorType.DEFAULT],
    viewBox: '0 0 32 32',
  };

  const notOneColorProps = {
    ...getIconSize(size),
    viewBox: '0 0 32 32',
  };

  /**
   * @description icon추가시 width, height가 32인 svg파일을 추가한다.
   * 다르게 작성해야하는 경우.
   * 1. icon 추가시 viewBox가 32가 아닌경우(close_fill 참고)
   * 2. 아이콘에 2가지 이상의 색으로 되어있는 경우
   *  notOneColorProps로 추가
   * 3. size를 안쓰는 경우
   *    png 로 해당 컴포넌트에서 import 해서 사용
   */

  switch (name) {
    // A
    case IconNameType.ARROW_BOTTOM:
      return <ArrowBottom {...svgProps} />;
    case IconNameType.ARROW_TOP:
      return <ArrowTop {...svgProps} />;
    // B
    case IconNameType.BELL:
      return <Bell {...svgProps} />;
    // C
    case IconNameType.CIRCLE_CHECK_FILL:
      return <CirCleCheck_fill {...svgProps} />;
    case IconNameType.CIRCLE_ERROR_FILL:
      return <CircleError_fill {...svgProps} />;
    case IconNameType.CIRCLE_INFO:
      return <CircleInfo {...svgProps} />;
    case IconNameType.CIRCLE_INFO_FILL:
      return <CircleInfo_fill {...svgProps} />;
    case IconNameType.CLOSE:
      return <Close {...svgProps} />;
    case IconNameType.CHECK:
      return <Check {...svgProps} />;
    case IconNameType.CIRCLE_CLEAR_FILL:
      return <CircleClear_fill {...svgProps} />;
    case IconNameType.CHAT_LOGO:
      return <ChatLogo {...notOneColorProps} viewBox='0 0 40 40' />;
    // F
    case IconNameType.FILE:
      return <File {...svgProps} />;
    // H
    case IconNameType.HEART_FILL:
      return <Heart_fill {...svgProps} />;

    // N
    case IconNameType.NEW_LINK:
      return <NewLink {...svgProps} />;
    // R
    case IconNameType.REMOVE:
      return <Remove {...svgProps} />;

    // S
    case IconNameType.SEARCH:
      return <Search {...svgProps} />;

    // L
    // M
    case IconNameType.MENU:
      return <Menu {...svgProps} />;
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
