"use client";
import classnames from "classnames/bind";
import styles from "./index.module.scss";
import Icon, { IconOption } from "@atoms/icon";
import Button, { ButtonOption } from "@atoms/button";
import Text, { TextOption } from "@atoms/text";
import Badge, { BadgeOption } from "@atoms/badge";
import Fennel, { useFennel } from "@atoms/Fennel";

const cx = classnames.bind(styles);

const FennelItemss = ({ step }: { step: number }) => {
  const { nextStep } = useFennel();

  return <button onClick={nextStep}>스텝:{step}</button>;
};

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
        iconName={ButtonOption.iconName.vercel_fill}
        iconPosition={ButtonOption.iconPosition.left}>
        버튼
      </Button>
      <Button
        fontStyle={ButtonOption.fontStyle.body_1_b}
        fill={ButtonOption.fill.accent_gold_strong_default}
        buttonProps={{
          disabled: true,
        }}>
        버튼
      </Button>
      <h1>Text</h1>
      <Text
        fontStyle={TextOption.fontStyle.body_1_b}
        color={TextOption.color.default}
        ellipsis={3}
        styles={{ width: 40 }}>
        텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
      </Text>
      <h1>Badge</h1>
      <Badge backgroundColor={BadgeOption.backgroundColor.accent_cyan_default}>뱃지</Badge>

      <Fennel>
        <Fennel.Item>
          <FennelItemss step={1} />
        </Fennel.Item>
        <Fennel.Item>
          <FennelItemss step={2} />
        </Fennel.Item>
        <Fennel.Item>
          <FennelItemss step={3} />
          <FennelItemss step={3} />
        </Fennel.Item>
        <Fennel.Item>
          <FennelItemss step={4} />
        </Fennel.Item>
        <Fennel.Item>
          <FennelItemss step={5} />
        </Fennel.Item>
      </Fennel>
    </div>
  );
};

export default Test;
