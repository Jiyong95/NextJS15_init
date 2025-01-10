import DateUtil from '.';
import type { Meta, StoryObj } from '@storybook/react';
import UtilTemplate from '@utils/template';

const meta = {
  title: 'Utils/date/util',
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

export const AddDays: Story = {
  name: 'addDays',
  argTypes: {
    date: {
      control: 'date',
    },
  },
  args: {
    func: DateUtil.addDays,
    description: 'date에 days를 더해 date를 반환하는 함수',
    date: new Date('2021-01-01'),
    days: 1,
  },
  render: (args) => <UtilTemplate {...args} date={new Date(args.date)} />,
};

export const Compare: Story = {
  name: 'compare',
  argTypes: {
    dateA: {
      control: 'date',
    },
    dateB: {
      control: 'date',
    },
  },
  args: {
    func: DateUtil.compare,
    description: 'dateA와 dateB를 비교하여 dateA가 이전이면 -1, 같으면 0, 이후면 1을 반환하는 함수',
    dateA: new Date('2021-01-01'),
    dateB: new Date('2021-01-04'),
  },
  render: (args) => <UtilTemplate {...args} dateA={new Date(args.dateA)} dateB={new Date(args.dateB)} />,
};

export const GetLeftDays: Story = {
  name: 'getLeftDays',
  argTypes: {
    startDate: {
      control: 'date',
    },
    endDate: {
      control: 'date',
    },
  },
  args: {
    func: DateUtil.getLeftDays,
    description: 'date, endDate를 비교하여 몇일 남았는지 반환하는 함수',
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-01-04'),
  },
  render: (args) => <UtilTemplate {...args} startDate={new Date(args.startDate)} endDate={new Date(args.endDate)} />,
};

export const GetNow: Story = {
  name: 'getNow',
  args: {
    func: DateUtil.getNow,
    description: '현재 시간을 반환하는 함수',
  },
};

export const GetWhetherIncludedInThePeriod: Story = {
  name: 'getWhetherIncludedInThePeriod',
  argTypes: {
    startDate: {
      control: 'date',
    },
    endDate: {
      control: 'date',
    },
    currentDate: {
      control: 'date',
    },
  },
  args: {
    func: DateUtil.getWhetherIncludedInThePeriod,
    description: 'currentDate가 startDate, endDate 사이에 있는지 확인하는 함수',
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-09-04'),
    currentDate: new Date('2021-06-04'),
  },
  render: (args) => (
    <UtilTemplate
      {...args}
      startDate={new Date(args.startDate)}
      endDate={new Date(args.endDate)}
      currentDate={new Date(args.currentDate)}
    />
  ),
};

export const IsPastDate: Story = {
  name: 'isPastDate',
  argTypes: {
    date: {
      control: 'date',
    },
    compareDate: {
      control: 'date',
    },
  },
  args: {
    func: DateUtil.isPastDate,
    description: 'date, compareDate를 비교하여 date가 지났는지 확인하는 함수',
    date: new Date('2021-01-01'),
    compareDate: new Date('2021-01-04'),
  },
  render: (args) => <UtilTemplate {...args} date={new Date(args.date)} compareDate={new Date(args.compareDate)} />,
};
