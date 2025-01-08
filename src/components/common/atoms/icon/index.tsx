import { FC } from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import { getElement, IconNameType } from "./IconUtil";
import { IconColorType, IconSizeType } from "./IconType";
const cx = classnames.bind(styles);

export const IconOption = {
  name: IconNameType,
  size: IconSizeType,
  fill: IconColorType,
};

export interface IconProps {
  name: IconNameType;
  size: IconSizeType;
  fill?: IconColorType;
  disabled?: boolean;
}

const Icon: FC<IconProps> = (props) => {
  return <span className={cx("icon")}>{getElement(props)}</span>;
};

export default Icon;
