import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './';
import { CheckboxSizeType } from './CheckboxType';

const meta = {
  title: 'atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: CheckboxSizeType.L,
    selected: false,
    disabled: false,
    indeterminate: false,
  },
  argTypes: {
    size: { control: 'select', options: Object.keys(CheckboxSizeType) },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Checkbox';
