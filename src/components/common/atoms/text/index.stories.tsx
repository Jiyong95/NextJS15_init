import type { Meta, StoryObj } from '@storybook/react';

import { TextOption } from '.';
import Text from '.';

const meta = {
  title: 'atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  args: {
    element: TextOption.element.P,
    fontStyle: TextOption.fontStyle.BODY_1_B,
    color: TextOption.color.BRAND,
    children: 'text',
  },
  argTypes: {
    element: {
      control: 'select',
      options: Object.keys(TextOption.element), // 타입 옵션들 지정
    },
    fontStyle: {
      control: 'select',
      options: Object.keys(TextOption.fontStyle),
    },
    color: {
      control: 'select',
      options: Object.keys(TextOption.color),
    },
    ellipsis: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Text';
