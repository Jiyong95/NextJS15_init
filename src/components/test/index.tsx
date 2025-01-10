'use client';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import Icon, { IconOption } from '@atoms/icon';
import Button, { ButtonOption } from '@atoms/button';
import Text, { TextOption } from '@atoms/text';
import Badge, { BadgeOption } from '@atoms/badge';
import Fennel, { useFennel } from '@atoms/fennel';
import Modal from '@atoms/modal';
import { useState } from 'react';
import Dialog from '@atoms/dialog';
import { useToast } from '@atoms/toast';

const cx = classnames.bind(styles);

const FennelItemss = ({ step }: { step: number }) => {
  const { nextStep } = useFennel();

  return <button onClick={nextStep}>스텝:{step}</button>;
};

const Test = () => {
  const [test, setTest] = useState(false);
  const Toast = useToast();

  return (
    <div className={cx('test')}>
      <h1>scss</h1>
      <button className={cx('button')}>scssTest</button>
      <h1>Icon</h1>
      <Icon name={IconOption.name.circleInfo_fill} size={IconOption.size.XL} fill={IconOption.fill.accent_red} />
      <Icon name={IconOption.name.circleInfo_fill} size={IconOption.size.XL} fill={IconOption.fill.default} disabled />
      <h1>Button</h1>
      <Button
        type={ButtonOption.type.OutLine}
        size={ButtonOption.size.M}
        fontStyle={ButtonOption.fontStyle.body_1_sb}
        color={ButtonOption.color.subtle}>
        아웃라인
      </Button>
      <Button
        fontStyle={ButtonOption.fontStyle.body_1_b}
        fill={ButtonOption.fill.accent_orange_strong_default}
        iconName={ButtonOption.iconName.circleInfo_fill}
        iconPosition={ButtonOption.iconPosition.right}
        buttonProps={{
          onClick: () => setTest(!test),
        }}>
        모달버튼
      </Button>
      <Button
        fontStyle={ButtonOption.fontStyle.body_1_b}
        fill={ButtonOption.fill.accent_gold_strong_default}
        buttonProps={{
          onClick: () => {
            Dialog({
              title: '타이틀',
              description: '설명',
              closeBtnProps: {
                text: '닫기',
              },
              confirmBtnProps: {
                text: '확인',
              },
            });
          },
        }}>
        Dialog버튼
      </Button>
      <Button
        fontStyle={ButtonOption.fontStyle.body_1_b}
        fill={ButtonOption.fill.accent_gold_strong_default}
        buttonProps={{
          onClick: () => {
            Toast({
              content:
                '토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트',
            });
          },
        }}>
        토스트버튼
      </Button>
      <h1>Text</h1>
      <Text
        fontStyle={TextOption.fontStyle.body_1_b}
        color={TextOption.color.default}
        ellipsis={3}
        styles={{ width: 40 }}>
        텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
      </Text>
      <h1>Badge</h1>
      <Badge backgroundColor={BadgeOption.backgroundColor.accent_cyan_default}>뱃지</Badge>

      <h1>Fennel</h1>
      <Fennel>
        <Fennel.Item>
          <FennelItemss step={1} />
          <Icon name={IconOption.name.circleInfo} size={IconOption.size.S} fill={IconOption.fill.accent_pink} />
        </Fennel.Item>
        <Fennel.Item>
          <FennelItemss step={2} />
        </Fennel.Item>
        <Fennel.Item>
          <FennelItemss step={3} />
          <FennelItemss step={3} />
        </Fennel.Item>
        <Fennel.Item>
          <FennelItemss step={4} />
        </Fennel.Item>
        <Fennel.Item>
          <FennelItemss step={5} />
        </Fennel.Item>
      </Fennel>

      <Modal visible={test} dimmed clickBg={() => setTest(!test)} onClose={() => setTest(!test)}>
        <div className={cx('modalTest')}>
          <Button
            fontStyle={ButtonOption.fontStyle.body_1_b}
            fill={ButtonOption.fill.accent_gold_strong_default}
            iconName={ButtonOption.iconName.circleError_fill}
            iconPosition={ButtonOption.iconPosition.left}
            buttonProps={{
              onClick: () => {
                setTest(!test);
              },
            }}>
            버튼
          </Button>
          <Button
            fontStyle={ButtonOption.fontStyle.body_1_b}
            fill={ButtonOption.fill.accent_gold_strong_default}
            buttonProps={{
              disabled: true,
            }}>
            버튼
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Test;
