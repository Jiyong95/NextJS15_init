import type { Meta, StoryObj } from '@storybook/react';

import BadgeContent, { BadgeContentOption } from '.';

const meta = {
  title: 'atoms/Badge',
  component: BadgeContent,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: BadgeContentOption.type.FILL,
    size: BadgeContentOption.size.L,
    fontStyle: BadgeContentOption.fontStyle.BODY_1_B,
    color: BadgeContentOption.color.BRAND,
    backgroundColor: BadgeContentOption.backgroundColor.ACCENT_COBALTBLUE_STRONG,
    borderColor: BadgeContentOption.borderColor.DEFAULT,
    children: 'badge',
  },
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(BadgeContentOption.type), // 타입 옵션들 지정
    },
    size: {
      control: 'select',
      options: Object.values(BadgeContentOption.size), // 사이즈 값 지정
    },
    fontStyle: {
      control: 'select',
      options: Object.values(BadgeContentOption.fontStyle),
    },
    color: {
      control: 'select',
      options: Object.values(BadgeContentOption.color),
    },
    backgroundColor: {
      control: 'select',
      options: Object.values(BadgeContentOption.backgroundColor),
    },
    borderColor: {
      control: 'select',
      options: Object.values(BadgeContentOption.borderColor),
    },
  },
} satisfies Meta<typeof BadgeContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'BadgeContent';
