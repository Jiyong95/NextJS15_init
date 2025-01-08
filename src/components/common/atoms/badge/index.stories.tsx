import V2Badge from '@common/v2Design/badge';
import type { Meta, StoryObj } from '@storybook/react';

import { V2BadgeOption } from '@domain/constant/v2Design/V2BadgeType';

const meta = {
  title: 'Components/V2/Badge',
  component: V2Badge,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: V2BadgeOption.type.Fill,
    size: V2BadgeOption.size.L,
    fontStyle: V2BadgeOption.fontStyle.body_1_b,
    color: V2BadgeOption.color.brand,
    backgroundColor: V2BadgeOption.backgroundColor.accent_cobaltblue_strong,
    borderColor: V2BadgeOption.borderColor.default,
    children: 'badge',
  },
  argTypes: {
    type: {
      control: 'select',
      options: V2BadgeOption.type, // 타입 옵션들 지정
    },
    size: {
      control: 'select',
      options: V2BadgeOption.size, // 사이즈 값 지정
    },
    fontStyle: {
      control: 'select',
      options: V2BadgeOption.fontStyle,
    },
    color: {
      control: 'select',
      options: V2BadgeOption.color,
    },
    backgroundColor: {
      control: 'select',
      options: V2BadgeOption.backgroundColor,
    },
    borderColor: {
      control: 'select',
      options: V2BadgeOption.borderColor,
    },
  },
} satisfies Meta<typeof V2Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Badge';
