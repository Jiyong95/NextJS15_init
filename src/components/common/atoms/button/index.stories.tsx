import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonOption } from '.';

const meta = {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: ButtonOption.type.Fill,
    size: ButtonOption.size.L,
    fontStyle: ButtonOption.fontStyle.body_1_b,
    color: ButtonOption.color.brand,
    isLoading: false,
    children: 'button',
  },
  argTypes: {
    type: {
      control: 'select',
      options: Object.keys(ButtonOption.type), // 타입 옵션들 지정
    },
    size: {
      control: 'select',
      options: Object.keys(ButtonOption.size), // 사이즈 값 지정
    },
    fontStyle: {
      control: 'select',
      options: Object.keys(ButtonOption.fontStyle),
    },
    color: {
      control: 'select',
      options: Object.keys(ButtonOption.color),
    },
    fill: {
      control: 'select',
      options: Object.keys(ButtonOption.fill),
    },
    iconName: {
      control: 'select',
      options: Object.keys(ButtonOption.iconName),
    },
    iconPosition: {
      control: 'select',
      options: Object.keys(ButtonOption.iconPosition),
    },
    iconColor: {
      control: 'select',
      options: Object.keys(ButtonOption.iconColor),
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Button';
