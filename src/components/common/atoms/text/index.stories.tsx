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
    element: TextOption.element.p,
    fontStyle: TextOption.fontStyle.body_1_b,
    color: TextOption.color.brand,
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
