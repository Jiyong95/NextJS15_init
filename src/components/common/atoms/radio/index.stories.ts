import type { Meta, StoryObj } from '@storybook/react';

import RadioGroup from './';
import { RadioSizeType } from './RadioType';

const meta = {
  title: 'atoms/Radio',
  component: RadioGroup.Radio,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: RadioSizeType.L,
    selected: false,
    disabled: false,
    value: '1',
  },
  argTypes: {
    size: { control: 'select', options: Object.values(RadioSizeType) },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof RadioGroup.Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Radio';
