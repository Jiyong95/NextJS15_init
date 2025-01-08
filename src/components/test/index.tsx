import classnames from "classnames/bind";
import styles from "./index.module.scss";
import Icon, { IconOption } from "@atoms/icon";
import Button from "@atoms/button";
import { ButtonOption } from "@atoms/button/ButtonType";

const cx = classnames.bind(styles);

const Test = () => {
  return (
    <div className={cx("test")}>
      <h1>scss</h1>
      <button className={cx("button")}>scssTest</button>
      <h1>Icon</h1>
      <Icon name={IconOption.name.vercel_fill} size={IconOption.size.XL} fill={IconOption.fill.default} />
      <Icon name={IconOption.name.vercel_fill} size={IconOption.size.XL} fill={IconOption.fill.default} disabled />
      <h1>Button</h1>
      <Button
        fontStyle={ButtonOption.fontStyle.body_1_b}
        fill={ButtonOption.fill.accent_gold_strong_default}
        isLoading={true}>
        버튼
      </Button>
    </div>
  );
};

export default Test;
