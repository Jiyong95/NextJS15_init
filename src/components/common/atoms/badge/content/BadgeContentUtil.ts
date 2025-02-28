import { BorderColor, BorderColorType } from '@constant/styles/color/BorderColorType';
import { Radius } from '@constant/styles/RadiusType';
import { Space, SpaceType } from '@constant/styles/SpaceType';

import { BadgeContentSizeType, BadgeContentType } from './BadgeContentType';

export const getBadgeConetentRadiusStyle = (size?: BadgeContentSizeType) => {
  switch (size) {
    default:
      return {
        borderRadius: `${Radius.S}px`,
      };
  }
};

export const getBadgeContentSpaceStyle = (size?: BadgeContentSizeType) => {
  switch (size) {
    case BadgeContentSizeType.L:
      return {
        padding: `${Space[SpaceType.XXXS]}px ${Space[SpaceType.XS]}px`,
      };

    case BadgeContentSizeType.M:
      return {
        padding: `${Space[SpaceType.NONE]}px ${Space[SpaceType.XXS]}px`,
      };
    default:
      return {};
  }
};

// *develope* fill에 따른 borderColor가 맵핑되어야함.
export const getBadgeContentBorderStyle = (type: BadgeContentType, borderColorType?: BorderColorType) => {
  if (!borderColorType) return;

  if (type === BadgeContentType.OUTLINE) {
    return {
      border: `1px solid ${BorderColor[borderColorType]}`,
    };
  }
  return {};
};
