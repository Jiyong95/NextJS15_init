import '@styles/reset.scss';
import type { Meta, StoryObj } from '@storybook/react';
import classnames from 'classnames/bind';

import Accordion from '.';

import styles from './index.module.scss';

const cx = classnames.bind(styles);

/**
 * Modal Component는 따로 컨텐츠를 분리해서 렌더링해야함.
 * StoryBook에서 이동시 Modal visible을 따로 컨트롤할 수 없음.
 */

const AccordionPreview = () => {
  return (
    <Accordion initialOpen>
      <Accordion.Title>Title</Accordion.Title>
      <Accordion.Content>컨텐트</Accordion.Content>
    </Accordion>
  );
};

const meta = {
  title: 'atoms/Accordion',
  component: AccordionPreview,
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof AccordionPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.storyName = 'Accordion';
