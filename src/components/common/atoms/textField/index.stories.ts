import type { Meta, StoryObj } from '@storybook/react';

import TextField from './';
import { TextFieldSizeType } from './TextFieldType';

const meta = {
  title: 'atoms/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: TextFieldSizeType.L,
    helperText: '가이드 텍스트',
  },
  argTypes: {
    size: { control: 'select', options: Object.values(TextFieldSizeType) },
    searchIcon: { control: 'boolean' },
    isError: { control: 'boolean' },
    isSuccess: { control: 'boolean' },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'TextField';
