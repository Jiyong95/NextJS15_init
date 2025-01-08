import V2Button from '@common/v2Design/button';
import type { Meta, StoryObj } from '@storybook/react';
import { V2ButtonOption } from '@domain/constant/v2Design/V2ButtonType';

const meta = {
  title: 'Components/V2/Button',
  component: V2Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: V2ButtonOption.type.Fill,
    size: V2ButtonOption.size.L,
    fontStyle: V2ButtonOption.fontStyle.body_1_b,
    color: V2ButtonOption.color.brand,
    children: 'button',
  },
  argTypes: {
    type: {
      control: 'select',
      options: V2ButtonOption.type, // 타입 옵션들 지정
    },
    size: {
      control: 'select',
      options: V2ButtonOption.size, // 사이즈 값 지정
    },
    fontStyle: {
      control: 'select',
      options: V2ButtonOption.fontStyle,
    },
    color: {
      control: 'select',
      options: V2ButtonOption.color,
    },
    fill: {
      control: 'select',
      options: V2ButtonOption.fill,
    },
    iconName: {
      control: 'select',
      options: V2ButtonOption.iconName,
    },
    iconPosition: {
      control: 'select',
      options: V2ButtonOption.iconPosition,
    },
    iconColor: {
      control: 'select',
      options: V2ButtonOption.iconColor,
    },
  },
} satisfies Meta<typeof V2Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Button';
