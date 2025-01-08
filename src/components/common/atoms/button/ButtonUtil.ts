import { SpaceType, Space } from "@atoms/types/SpaceType";
import { ButtonIconPositionType, ButtonSizeType, ButtonType } from "./ButtonType";
import { BorderColorType } from "@atoms/types/color/BorderColorType";
import { IconSizeType } from "@atoms/icon/IconType";
import { Radius } from "@atoms/types/RadiusType";

export const getButtonSpaceStyle = (buttonType?: ButtonSizeType, iconPosition?: ButtonIconPositionType) => {
  switch (buttonType) {
    case ButtonSizeType.L:
      if (iconPosition === ButtonIconPositionType.left) {
        return {
          padding: `${Space[SpaceType.M]}px ${Space[SpaceType.L]}px ${Space[SpaceType.M]}px ${Space[SpaceType.S]}px`,
        };
      } else if (iconPosition === ButtonIconPositionType.right) {
        return {
          padding: `${Space[SpaceType.M]}px ${Space[SpaceType.S]}px ${Space[SpaceType.M]}px ${Space[SpaceType.L]}px`,
        };
      } else {
        return {
          padding: `${Space[SpaceType.M]}px ${Space[SpaceType.L]}px`,
        };
      }
    case ButtonSizeType.M:
      if (iconPosition === ButtonIconPositionType.left) {
        return {
          padding: `${Space[SpaceType.XS]}px ${Space[SpaceType.M]}px ${Space[SpaceType.XS]}px ${
            Space[SpaceType.XXS]
          }px`,
        };
      } else if (iconPosition === ButtonIconPositionType.right) {
        return {
          padding: `${Space[SpaceType.XS]}px ${Space[SpaceType.XXS]}px ${Space[SpaceType.XS]}px ${
            Space[SpaceType.M]
          }px`,
        };
      } else {
        return {
          padding: `${Space[SpaceType.XS]}px ${Space[SpaceType.M]}px`,
        };
      }
    case ButtonSizeType.S:
      if (iconPosition === ButtonIconPositionType.left) {
        return {
          padding: `${Space[SpaceType.XXS]}px ${Space[SpaceType.XS]}px ${Space[SpaceType.XXS]}px ${
            Space[SpaceType.XXXS]
          }px`,
        };
      } else if (iconPosition === ButtonIconPositionType.right) {
        return {
          padding: `${Space[SpaceType.XXS]}px ${Space[SpaceType.XXXS]}px ${Space[SpaceType.XXS]}px ${
            Space[SpaceType.XS]
          }px`,
        };
      } else {
        return {
          padding: `${Space[SpaceType.XXS]}px ${Space[SpaceType.XS]}px`,
        };
      }
    case ButtonSizeType.XS:
      if (iconPosition === ButtonIconPositionType.left) {
        return {
          padding: `${Space[SpaceType.XXXS]}px ${Space[SpaceType.XXS]}px ${Space[SpaceType.XXXS]}px ${
            Space[SpaceType.XXXXS]
          }px`,
        };
      } else if (iconPosition === ButtonIconPositionType.right) {
        return {
          padding: `${Space[SpaceType.XXXS]}px ${Space[SpaceType.XXXXS]}px ${Space[SpaceType.XXXS]}px ${
            Space[SpaceType.XXS]
          }px`,
        };
      } else {
        return {
          padding: `${Space[SpaceType.XXXS]}px ${Space[SpaceType.XXS]}px`,
        };
      }
  }
};

export const getButtonBorderStyle = (buttonType: ButtonType) => {
  if (buttonType === ButtonType.OutLine) {
    return {
      border: `1px solid ${BorderColorType.default}`,
    };
  }
  return {};
};

export const getButtonIconSize = (buttonSize?: ButtonSizeType): IconSizeType => {
  switch (buttonSize) {
    case ButtonSizeType.L:
      return IconSizeType.S;
    case ButtonSizeType.M:
      return IconSizeType.S;
    case ButtonSizeType.S:
      return IconSizeType.XS;
    case ButtonSizeType.XS:
      return IconSizeType.XS;
    default:
      return IconSizeType.M;
  }
};

export const getButtonRadiusStyle = (size?: ButtonSizeType) => {
  switch (size) {
    case ButtonSizeType.L:
    case ButtonSizeType.M:
      return {
        borderRadius: `${Radius.M}px`,
      };
    case ButtonSizeType.S:
    case ButtonSizeType.XS:
      return {
        borderRadius: `${Radius.S}px`,
      };

    default:
      return {
        borderRadius: `${Radius.NONE}px`,
      };
  }
};
