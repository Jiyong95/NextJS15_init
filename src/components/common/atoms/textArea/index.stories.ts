import type { Meta, StoryObj } from '@storybook/react';

import TextField from './';
import TextArea from './';
import { TextAreaSizeType } from './TextAreaType';

const meta = {
  title: 'atoms/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: TextAreaSizeType.L,
    helperText: '가이드 텍스트',
    textAreaOptions: {
      maxLength: 10,
    },
  },
  argTypes: {
    size: { control: 'select', options: Object.values(TextAreaSizeType) },
    isError: { control: 'boolean' },
    isSuccess: { control: 'boolean' },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'TextArea';
