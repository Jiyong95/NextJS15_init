import Icon, { IconName } from '.';
import type { Meta, StoryObj } from '@storybook/react';
import classnames from 'classnames/bind';
import styles from './stories.module.scss';
const cx = classnames.bind(styles);

interface IconObjType {
  name: keyof typeof IconName;
}

const IconItem = ({ name }: IconObjType) => {
  return (
    <div className={cx('item')}>
      <Icon name={name} />
      <span>{name}</span>
    </div>
  );
};

const IconList = () => {
  const IconObjArray = Object.keys(IconName).filter((key) => {
    return isNaN(Number(key)) && key !== 'displayName' && key !== '__docgenInfo';
  }) as (keyof typeof IconName)[];

  const itemListEl = IconObjArray.map((name, idx) => <IconItem key={idx} name={name} />);

  return <div className={cx('wrapper')}>{itemListEl}</div>;
};

const meta = {
  title: 'Icon/Icon',
  component: IconList,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Icon';
