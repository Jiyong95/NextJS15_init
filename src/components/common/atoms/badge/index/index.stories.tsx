import type { Meta, StoryObj } from '@storybook/react';

import Badge, { BadgeOption } from '.';

const meta = {
  title: 'atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: BadgeOption.type.DOT,
    color: BadgeOption.color.BRAND,
  },
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(BadgeOption.type),
    },
    color: {
      control: 'select',
      options: Object.values(BadgeOption.color),
    },
    numberValue: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

Default.storyName = 'Badge';
