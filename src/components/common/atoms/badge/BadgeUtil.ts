import { Radius } from '@constant/styles/RadiusType';
import { BadgeSizeType, BadgeType } from './BadgeType';
import { BorderColor, BorderColorType } from '@constant/styles/color/BorderColorType';
import { Space, SpaceType } from '@constant/styles/SpaceType';

export const getBadgeRadiusStyle = (size?: BadgeSizeType) => {
  switch (size) {
    default:
      return {
        borderRadius: `${Radius.S}px`,
      };
  }
};

export const getBadgeSpaceStyle = (size?: BadgeSizeType) => {
  switch (size) {
    case BadgeSizeType.L:
      return {
        padding: `${Space[SpaceType.XXXS]}px ${Space[SpaceType.XS]}px`,
      };

    case BadgeSizeType.M:
      return {
        padding: `${Space[SpaceType.NONE]}px ${Space[SpaceType.XXS]}px`,
      };
    default:
      return {};
  }
};

// *develope* fill에 따른 borderColor가 맵핑되어야함.
export const getBadgeBorderStyle = (type: BadgeType, borderColorType?: BorderColorType) => {
  if (!borderColorType) return;

  if (type === BadgeType.OutLine) {
    return {
      border: `1px solid ${BorderColor[borderColorType]}`,
    };
  }
  return {};
};
