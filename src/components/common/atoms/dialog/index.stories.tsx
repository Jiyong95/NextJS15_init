import '@styles/reset.scss';
import type { Meta, StoryObj } from '@storybook/react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import Text, { TextOption } from '@atoms/text';
import { DialogProps } from '.';
import { FC } from 'react';
import Icon, { IconOption } from '@atoms/icon';
import { IconNameType } from '@atoms/icon/IconUtil';
import Button, { ButtonOption } from '@atoms/button';
import { IconColorType } from '@atoms/icon/IconType';
const cx = classnames.bind(styles);

const Dialog: FC<DialogProps> = ({
  iconName = IconNameType.circleError_fill,
  title,
  description,
  iconColor = IconColorType.danger,
  closeBtnProps,
  confirmBtnProps,
}) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('titleArea')}>
        <Icon name={iconName} size={IconOption.size.M} fill={iconColor} />
        <Text fontStyle={TextOption.fontStyle.title_2_b} color={TextOption.color.default}>
          {title}
        </Text>
      </div>
      <div className={cx('descriptionArea')}>
        <Text fontStyle={TextOption.fontStyle.body_1_m} color={TextOption.color.subtle}>
          {description}
        </Text>
      </div>
      <div className={cx('btnArea')}>
        <Button
          type={ButtonOption.type.OutLine}
          size={ButtonOption.size.M}
          fontStyle={ButtonOption.fontStyle.body_1_sb}
          color={ButtonOption.color.subtle}>
          {closeBtnProps?.text}
        </Button>
        <Button
          type={ButtonOption.type.Fill}
          size={ButtonOption.size.M}
          fill={ButtonOption.fill.brand_strong_default}
          fontStyle={ButtonOption.fontStyle.body_1_sb}
          color={ButtonOption.color.inverse}>
          {confirmBtnProps?.text}
        </Button>
      </div>
    </div>
  );
};

const meta = {
  title: 'atoms/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Dialog Title',
    description: 'Dialog Description',
    closeBtnProps: {
      text: '취소',
    },
    confirmBtnProps: {
      text: '확인',
    },
  },
  argTypes: {
    iconName: {
      control: 'select',
      options: Object.keys(IconOption.name),
    },
    iconColor: {
      control: 'select',
      options: Object.keys(IconOption.fill),
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Dialog';
