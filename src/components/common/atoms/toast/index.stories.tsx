import type { Meta, StoryObj } from '@storybook/react';
import { ToastDom, ToastProps } from '.';
import { IconOption } from '@atoms/icon';

/**TODO : useToast로 가져다쓰면 BASE_URL undefined발생. 환경 변수 설정해야함. */
const meta = {
  title: 'atoms/Toast',
  component: ToastDom,

  parameters: {
    layout: 'centered',
  },
  args: {
    content: '토스트 메세지',
  },
  argTypes: {
    iconName: {
      control: 'select',
      options: Object.keys(IconOption.name), // 타입 옵션들 지정
    },
  },
} satisfies Meta<ToastProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Toast';
