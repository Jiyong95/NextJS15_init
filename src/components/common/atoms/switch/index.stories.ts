import type { Meta, StoryObj } from '@storybook/react';

import Switch from './';
import { SwitchSizeType } from './SwitchType';

const meta = {
  title: 'atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: SwitchSizeType.L,
    selected: false,
    disabled: false,
  },
  argTypes: {
    size: { control: 'select', options: Object.values(SwitchSizeType) },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Switch';
