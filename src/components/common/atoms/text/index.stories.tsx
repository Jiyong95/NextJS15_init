import V2Text from '@components/common/v2Design/text';
import type { Meta, StoryObj } from '@storybook/react';
import { V2TextOption } from '@domain/constant/v2Design/V2TextType';

const meta = {
  title: 'Components/V2/Text',
  component: V2Text,
  parameters: {
    layout: 'centered',
  },
  args: {
    element: V2TextOption.element.p,
    fontStyle: V2TextOption.fontStyle.body_1_b,
    color: V2TextOption.color.brand,
    ellipsis: false,
    children: 'text',
  },
  argTypes: {
    element: {
      control: 'select',
      options: V2TextOption.element, // 타입 옵션들 지정
    },
    fontStyle: {
      control: 'select',
      options: V2TextOption.fontStyle,
    },
    color: {
      control: 'select',
      options: V2TextOption.color,
    },
    ellipsis: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof V2Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Text';
