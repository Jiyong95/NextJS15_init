import classnames from "classnames/bind";
import styles from "./index.module.scss";
import Icon, { IconOption } from "@atoms/icon";
const cx = classnames.bind(styles);

const Test = () => {
  return (
    <div className={cx("test")}>
      <h1>Test</h1>
      <Icon name={IconOption.name.vercel_fill} size={IconOption.size.XL} fill={IconOption.fill.default} />
      <Icon name={IconOption.name.vercel_fill} size={IconOption.size.XL} fill={IconOption.fill.default} disabled />
    </div>
  );
};

export default Test;
