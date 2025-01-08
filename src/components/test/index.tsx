import classnames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classnames.bind(styles);

const Test = () => {
  return (
    <div className={cx("test")}>
      <h1>Test</h1>
    </div>
  );
};

export default Test;
