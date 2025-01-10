import { FC } from 'react';
import { ToastPopupProps } from './';
import type { Meta, StoryObj } from '@storybook/react';
import classnames from 'classnames/bind';
import styles from './toast.module.scss';
const cx = classnames.bind(styles);

/**TODO : useToast로 가져다쓰면 BASE_URL undefined발생. 환경 변수 설정해야함. */
const ToastExample: FC<ToastPopupProps> = (props) => {
  return (
    <div className={cx('toastArea', props.type, props.iconType, props.size, props.message)} style={{ opacity: 1 }}>
      {props.content}
    </div>
  );
};

const meta = {
  title: 'Components/Toast',
  component: ToastExample,

  parameters: {
    layout: 'centered',
  },

  argTypes: {
    size: { control: 'radio', options: ['xlarge', 'content'] },
    iconType: { control: 'radio', options: ['info', 'check', 'bookmark'] },
  },
  args: {
    content: '토스트 메세지',
  },
} satisfies Meta<ToastPopupProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Toast';
