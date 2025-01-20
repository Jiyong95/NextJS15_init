import type { Meta, StoryObj } from '@storybook/react';
import classnames from 'classnames/bind';
import { FC } from 'react';

import Icon, { IconOption } from '.';
import { IconColorType } from './IconType';
import { IconNameType } from './IconUtil';

import styles from './index.module.scss';
const cx = classnames.bind(styles);

interface IconObjType extends IconListProps {
  name: IconNameType;
}

const IconItem = ({ name, fill, disabled }: IconObjType) => {
  return (
    <div className={cx('item')}>
      <Icon name={name} size={IconOption.size.M} fill={fill} disabled={disabled} />
      <span>{name}</span>
    </div>
  );
};

interface IconListProps {
  fill?: IconColorType;
  disabled?: boolean;
}

const IconList: FC<IconListProps> = ({ fill, disabled }) => {
  const IconObjArray = Object.keys(IconNameType).sort();
  const itemListEl = IconObjArray.map((name, idx) => (
    <IconItem key={idx} name={name as IconNameType} fill={fill} disabled={disabled} />
  ));

  return <div className={cx('wrapper')}>{itemListEl}</div>;
};

const meta = {
  title: 'Icon/Icon',
  component: IconList,
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
  },
  argTypes: {
    fill: {
      control: 'select',
      options: Object.keys(IconOption.fill),
    },
  },
} satisfies Meta<typeof IconList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Icon';
