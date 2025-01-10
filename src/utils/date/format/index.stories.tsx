import DateFormat from '.';
import type { Meta, StoryObj } from '@storybook/react';
import DateUtil from '@utils/date/util';
import UtilTemplate from '@utils/template';

const meta = {
  title: 'Utils/date/format',
  component: UtilTemplate,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    description: {
      table: {
        disable: true,
      },
    },
    func: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof UtilTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Format: Story = {
  name: 'format',
  argTypes: {
    date: {
      control: 'date',
    },
  },
  args: {
    func: DateFormat.format,
    description: 'date를 원하는 format에 맞춰 반환하는 함수',
    date: DateUtil.getNow(),
    format: 'yyyy-mm-dd [AP]HH:MM:SS[week]',
  },
  render: (args) => <UtilTemplate {...args} date={new Date(args.date)} />,
};
