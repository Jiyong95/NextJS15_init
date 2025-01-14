import ColorType from './ColorType';

export enum BorderColorType {
  strong = 'strong',
  default = 'default',
  subtle = 'subtle',
  inverse = 'inverse',
  disabled = 'disabled',
  brand = 'brand',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  information = 'information',
  accent_green = 'accent_green',
  accent_springgreen = 'accent_springgreen',
  accent_olivegreen = 'accent_olivegreen',
  accent_yellow = 'accent_yellow',
  accent_gold = 'accent_gold',
  accent_orange = 'accent_orange',
  accent_red = 'accent_red',
  accent_pink = 'accent_pink',
  accent_purple = 'accent_purple',
  accent_violet = 'accent_violet',
  accent_cobaltblue = 'accent_cobaltblue',
  accent_skyblue = 'accent_skyblue',
  accent_cyan = 'accent_cyan',
  accent_teal = 'accent_teal',
}

export const BorderColor: Record<BorderColorType, ColorType> = {
  strong: ColorType.C_GRAY_300,
  default: ColorType.C_GRAY_200,
  subtle: ColorType.C_GRAY_100,
  inverse: ColorType.C_GRAY_WHITE,
  disabled: ColorType.C_GRAY_100,
  brand: ColorType.C_GREEN_500,
  success: ColorType.C_GREEN_500,
  danger: ColorType.C_RED_500,
  warning: ColorType.C_YELLOW_500,
  information: ColorType.C_SKYBLUE_500,
  accent_green: ColorType.C_GREEN_500,
  accent_springgreen: ColorType.C_SPRINGGREEN_500,
  accent_olivegreen: ColorType.C_OLIVEGREEN_500,
  accent_yellow: ColorType.C_YELLOW_500,
  accent_gold: ColorType.C_GOLD_500,
  accent_orange: ColorType.C_ORANGE_500,
  accent_red: ColorType.C_RED_500,
  accent_pink: ColorType.C_PINK_500,
  accent_purple: ColorType.C_PURPLE_500,
  accent_violet: ColorType.C_VIOLET_500,
  accent_cobaltblue: ColorType.C_COBALTBLUE_500,
  accent_skyblue: ColorType.C_SKYBLUE_500,
  accent_cyan: ColorType.C_CYAN_500,
  accent_teal: ColorType.C_TEAL_500,
};
