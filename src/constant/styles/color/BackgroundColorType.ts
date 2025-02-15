import ColorType from './ColorType';

export const COLOR_BACKGROUND_DIMMER_VALUE = 'rgba(24, 25, 27, 61)';

export enum BackgroundColorType {
  disabled = 'disabled',
  dimmer = 'dimmer',
  surface_default = 'surface_default',
  surface_alternative = 'surface_alternative',
  accent_green_default = 'accent_green_default',
  accent_green_strong = 'accent_green_strong',
  accent_green_subtle = 'accent_green_subtle',
  accent_springgreen_default = 'accent_springgreen_default',
  accent_springgreen_strong = 'accent_springgreen_strong',
  accent_springgreen_subtle = 'accent_springgreen_subtle',
  accent_olivegreen_default = 'accent_olivegreen_default',
  accent_olivegreen_strong = 'accent_olivegreen_strong',
  accent_olivegreen_subtle = 'accent_olivegreen_subtle',
  accent_yellow_default = 'accent_yellow_default',
  accent_yellow_strong = 'accent_yellow_strong',
  accent_yellow_subtle = 'accent_yellow_subtle',
  accent_gold_default = 'accent_gold_default',
  accent_gold_strong = 'accent_gold_strong',
  accent_gold_subtle = 'accent_gold_subtle',
  accent_orange_default = 'accent_orange_default',
  accent_orange_strong = 'accent_orange_strong',
  accent_orange_subtle = 'accent_orange_subtle',
  accent_red_default = 'accent_red_default',
  accent_red_strong = 'accent_red_strong',
  accent_red_subtle = 'accent_red_subtle',
  accent_pink_default = 'accent_pink_default',
  accent_pink_strong = 'accent_pink_strong',
  accent_pink_subtle = 'accent_pink_subtle',
  accent_purple_default = 'accent_purple_default',
  accent_purple_strong = 'accent_purple_strong',
  accent_purple_subtle = 'accent_purple_subtle',
  accent_violet_default = 'accent_violet_default',
  accent_violet_strong = 'accent_violet_strong',
  accent_violet_subtle = 'accent_violet_subtle',
  accent_cobaltblue_default = 'accent_cobaltblue_default',
  accent_cobaltblue_strong = 'accent_cobaltblue_strong',
  accent_cobaltblue_subtle = 'accent_cobaltblue_subtle',
  accent_skyblue_default = 'accent_skyblue_default',
  accent_skyblue_strong = 'accent_skyblue_strong',
  accent_skyblue_subtle = 'accent_skyblue_subtle',
  accent_cyan_default = 'accent_cyan_default',
  accent_cyan_strong = 'accent_cyan_strong',
  accent_cyan_subtle = 'accent_cyan_subtle',
  accent_teal_default = 'accent_teal_default',
  accent_teal_strong = 'accent_teal_strong',
  accent_teal_subtle = 'accent_teal_subtle',
  accent_gray_default = 'accent_gray_default',
  accent_gray_strong = 'accent_gray_strong',
  accent_gray_subtle = 'accent_gray_subtle',
}

export const BackgroundColor: Record<BackgroundColorType, ColorType | string> = {
  disabled: ColorType.C_GRAY_50,
  dimmer: COLOR_BACKGROUND_DIMMER_VALUE,
  surface_default: ColorType.C_GRAY_WHITE,
  surface_alternative: ColorType.C_GRAY_25,
  accent_green_default: ColorType.C_GREEN_500,
  accent_green_strong: ColorType.C_GREEN_800,
  accent_green_subtle: ColorType.C_GREEN_25,
  accent_springgreen_default: ColorType.C_SPRINGGREEN_500,
  accent_springgreen_strong: ColorType.C_SPRINGGREEN_800,
  accent_springgreen_subtle: ColorType.C_SPRINGGREEN_25,
  accent_olivegreen_default: ColorType.C_OLIVEGREEN_500,
  accent_olivegreen_strong: ColorType.C_OLIVEGREEN_800,
  accent_olivegreen_subtle: ColorType.C_OLIVEGREEN_25,
  accent_yellow_default: ColorType.C_YELLOW_500,
  accent_yellow_strong: ColorType.C_YELLOW_800,
  accent_yellow_subtle: ColorType.C_YELLOW_25,
  accent_gold_default: ColorType.C_GOLD_500,
  accent_gold_strong: ColorType.C_GOLD_800,
  accent_gold_subtle: ColorType.C_GOLD_25,
  accent_orange_default: ColorType.C_ORANGE_500,
  accent_orange_strong: ColorType.C_ORANGE_800,
  accent_orange_subtle: ColorType.C_ORANGE_25,
  accent_red_default: ColorType.C_RED_500,
  accent_red_strong: ColorType.C_RED_800,
  accent_red_subtle: ColorType.C_RED_25,
  accent_pink_default: ColorType.C_PINK_500,
  accent_pink_strong: ColorType.C_PINK_800,
  accent_pink_subtle: ColorType.C_PINK_25,
  accent_purple_default: ColorType.C_PURPLE_500,
  accent_purple_strong: ColorType.C_PURPLE_800,
  accent_purple_subtle: ColorType.C_PURPLE_25,
  accent_violet_default: ColorType.C_VIOLET_500,
  accent_violet_strong: ColorType.C_VIOLET_800,
  accent_violet_subtle: ColorType.C_VIOLET_25,
  accent_cobaltblue_default: ColorType.C_COBALTBLUE_500,
  accent_cobaltblue_strong: ColorType.C_COBALTBLUE_800,
  accent_cobaltblue_subtle: ColorType.C_COBALTBLUE_25,
  accent_skyblue_default: ColorType.C_SKYBLUE_500,
  accent_skyblue_strong: ColorType.C_SKYBLUE_800,
  accent_skyblue_subtle: ColorType.C_SKYBLUE_25,
  accent_cyan_default: ColorType.C_CYAN_500,
  accent_cyan_strong: ColorType.C_CYAN_800,
  accent_cyan_subtle: ColorType.C_CYAN_25,
  accent_teal_default: ColorType.C_TEAL_500,
  accent_teal_strong: ColorType.C_TEAL_800,
  accent_teal_subtle: ColorType.C_TEAL_25,
  accent_gray_default: ColorType.C_GRAY_500,
  accent_gray_strong: ColorType.C_GRAY_800,
  accent_gray_subtle: ColorType.C_GRAY_50,
};
