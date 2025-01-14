import type { Meta, StoryObj } from '@storybook/react';

import Badge, { BadgeOption } from '.';

const meta = {
  title: 'atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: BadgeOption.type.Fill,
    size: BadgeOption.size.L,
    fontStyle: BadgeOption.fontStyle.body_1_b,
    color: BadgeOption.color.brand,
    backgroundColor: BadgeOption.backgroundColor.accent_cobaltblue_strong,
    borderColor: BadgeOption.borderColor.default,
    children: 'badge',
  },
  argTypes: {
    type: {
      control: 'select',
      options: Object.keys(BadgeOption.type), // 타입 옵션들 지정
    },
    size: {
      control: 'select',
      options: Object.keys(BadgeOption.size), // 사이즈 값 지정
    },
    fontStyle: {
      control: 'select',
      options: Object.keys(BadgeOption.fontStyle),
    },
    color: {
      control: 'select',
      options: Object.keys(BadgeOption.color),
    },
    backgroundColor: {
      control: 'select',
      options: Object.keys(BadgeOption.backgroundColor),
    },
    borderColor: {
      control: 'select',
      options: Object.keys(BadgeOption.borderColor),
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Badge';
