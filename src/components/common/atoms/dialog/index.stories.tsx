import '@styles/reset.scss';
import type { Meta, StoryObj } from '@storybook/react';
import classnames from 'classnames/bind';
import { FC } from 'react';

import Button, { ButtonOption } from '@atoms/button';
import Text, { TextOption } from '@atoms/text';

import { Props } from '.';
import { DialogType } from './DialogType';
import { getDialogIcon } from './DialogUtil';

import styles from './index.module.scss';

const cx = classnames.bind(styles);

/**
 * Modal Component는 따로 컨텐츠를 분리해서 렌더링해야함.
 * StoryBook에서 이동시 Modal visible을 따로 컨트롤할 수 없음.
 */

const Dialog: FC<Props> = ({ type = DialogType.DEFAULT, title, description, closeBtnProps, confirmBtnProps }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('titleArea')}>
        {getDialogIcon(type)}
        <Text fontStyle={TextOption.fontStyle.TITLE_2_B} color={TextOption.color.DEFAULT}>
          {title}
        </Text>
      </div>
      <div className={cx('descriptionArea')}>
        <Text fontStyle={TextOption.fontStyle.BODY_1_M} color={TextOption.color.SUBTLE}>
          {description}
        </Text>
      </div>
      <div className={cx('btnArea')}>
        <Button
          type={ButtonOption.type.OUTLINE}
          size={ButtonOption.size.M}
          fontStyle={ButtonOption.fontStyle.BODY_1_SB}
          color={ButtonOption.color.SUBTLE}>
          {closeBtnProps?.text}
        </Button>
        <Button
          type={ButtonOption.type.FILL}
          size={ButtonOption.size.M}
          fill={ButtonOption.fill.BRAND_STRONG_DEFAULT}
          fontStyle={ButtonOption.fontStyle.BODY_1_SB}
          color={ButtonOption.color.INVERSE}>
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
    type: DialogType.DEFAULT,
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
    type: {
      control: 'select',
      options: Object.values(DialogType),
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Dialog';
