// SVG icons
import VerCel_Fill from "@svg/vercel_fill.svg";
import VerCel_Line from "@svg/vercel_fill.svg";
import { IconProps } from ".";
import { IconColors, IconColorType, IconSizeType } from "./IconType";

export enum IconNameType {
  vercel_fill = "vercel_fill",
  vercel_line = "vercel_line",
}

export const getElement = ({ name, size, fill, disabled }: IconProps) => {
  const svgProps = {
    ...getIconSize(size),
    fill: disabled ? IconColors[IconColorType.disabled] : IconColors[fill ?? IconColorType.default],
  };

  /**
   * @description 아이콘 fill, line에 따라 명칭 설정.
   */
  switch (name) {
    case "vercel_fill":
      return <VerCel_Fill {...svgProps} />;
    case "vercel_line":
      return <VerCel_Line {...svgProps} />;
  }
};

const getIconSize = (size: IconSizeType) => {
  switch (size) {
    case IconSizeType.XL:
      return {
        width: "48px",
        height: "48px",
      };
    case IconSizeType.L:
      return {
        width: "40px",
        height: "40px",
      };
    case IconSizeType.M:
      return {
        width: "32px",
        height: "32px",
      };
    case IconSizeType.S:
      return {
        width: "24px",
        height: "24px",
      };
    default:
      return {
        width: "20px",
        height: "20px",
      };
  }
};
