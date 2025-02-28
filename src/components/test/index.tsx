'use client';
import classnames from 'classnames/bind';
import { useState } from 'react';

import { useAdsMainBanners, useAdsMainBanners2 } from '@repository/ads/useAds';

import Accordion from '@atoms/accordion';
import BadgeContent, { BadgeContentOption } from '@atoms/badge/content';
import Badge, { BadgeOption } from '@atoms/badge/index';
import Button, { ButtonOption } from '@atoms/button';
import Checkbox from '@atoms/checkbox';
import Dialog from '@atoms/dialog';
import Fennel, { useFennel } from '@atoms/fennel';
import Icon, { IconOption } from '@atoms/icon';
import Modal from '@atoms/modal';
import RadioGroup from '@atoms/radio';
import Switch from '@atoms/switch';
import { SwitchSizeType } from '@atoms/switch/SwitchType';
import Text, { TextOption } from '@atoms/text';
import TextArea from '@atoms/textArea';
import TextField from '@atoms/textField';
import { TextFieldSizeType } from '@atoms/textField/TextFieldType';
import { useToast } from '@atoms/toast';
import Profile from '@components/matchingProfile/content/profile';

import styles from './index.module.scss';

const cx = classnames.bind(styles);

const FennelItemss = ({ step }: { step: number }) => {
  const { nextStep } = useFennel();

  return <button onClick={nextStep}>스텝:{step}</button>;
};

const Test = () => {
  const {} = useAdsMainBanners({
    enabled: false,
  });
  const [selected, setSelected] = useState(false);

  const { mutateAsync } = useAdsMainBanners2();
  const onClick = () => {
    mutateAsync(undefined, {
      onSuccess: (data) => {
        console.log('mutate', data);
      },
    });
  };

  const [test, setTest] = useState(false);
  const Toast = useToast();
  const [radioValue, setRadioValue] = useState<string | undefined>('');

  return (
    <div className={cx('test')}>
      <h1>scss</h1>
      <button className={cx('button')}>scssTest</button>
      <h1>Icon</h1>
      <Icon name={IconOption.name.CIRCLE_INFO_FILL} size={IconOption.size.XL} fill={IconOption.fill.ACCENT_RED} />
      <Icon name={IconOption.name.CIRCLE_INFO_FILL} size={IconOption.size.XL} fill={IconOption.fill.DEFAULT} disabled />
      <h1>Button</h1>
      <Button
        type={ButtonOption.type.FILL}
        fill={ButtonOption.fill.ACCENT_COBALTBLUE_DEFAULT}
        fontStyle={ButtonOption.fontStyle.BODY_1_SB}
        color={ButtonOption.color.SUBTLE}
        buttonProps={{
          onClick,
        }}>
        아웃라인
      </Button>
      <Button
        fontStyle={ButtonOption.fontStyle.BODY_1_B}
        fill={ButtonOption.fill.ACCENT_ORANGE_STRONG_DEFAULT}
        iconName={ButtonOption.iconName.CIRCLE_INFO_FILL}
        iconPosition={ButtonOption.iconPosition.RIGHT}
        buttonProps={{
          onClick: () => setTest(!test),
        }}>
        모달버튼
      </Button>
      <Button
        fontStyle={ButtonOption.fontStyle.BODY_1_B}
        fill={ButtonOption.fill.ACCENT_GOLD_STRONG_DEFAULT}
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
        fontStyle={ButtonOption.fontStyle.BODY_1_B}
        fill={ButtonOption.fill.ACCENT_GOLD_STRONG_DEFAULT}
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
        fontStyle={TextOption.fontStyle.BODY_1_B}
        color={TextOption.color.DEFAULT}
        ellipsis={3}
        styles={{ width: 40 }}>
        텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
      </Text>
      <h1>Badge</h1>
      <BadgeContent backgroundColor={BadgeContentOption.backgroundColor.ACCENT_CYAN_DEFAULT}>뱃지</BadgeContent>

      <h1>Fennel</h1>
      <Fennel>
        <Fennel.Item>
          <FennelItemss step={1} />
          <Icon name={IconOption.name.CIRCLE_INFO} size={IconOption.size.S} fill={IconOption.fill.ACCENT_PINK} />
        </Fennel.Item>
        <Fennel.Item>
          <div>이건나오냐</div>
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
        <div>
          <h1>모달</h1>
          <Modal.ScrollArea maxHeight={400}>
            <h1>모달 스크롤 영역</h1>
            <Profile />
          </Modal.ScrollArea>
          <Button
            type={ButtonOption.type.FILL}
            fill={ButtonOption.fill.ACCENT_COBALTBLUE_DEFAULT}
            fontStyle={ButtonOption.fontStyle.BODY_1_SB}
            color={ButtonOption.color.SUBTLE}
            buttonProps={{
              onClick,
            }}>
            아웃라인
          </Button>
        </div>
      </Modal>

      <h1>체쿠박수</h1>
      <Checkbox
        selected={selected}
        onClick={() => {
          console.log('do');
          setSelected(!selected);
        }}
      />
      <Checkbox
        disabled
        selected={selected}
        onClick={() => {
          console.log('do');
          setSelected(!selected);
        }}
      />

      <h1>스위치</h1>
      <Switch
        selected={selected}
        onClick={() => {
          console.log('do');
          setSelected(!selected);
        }}
      />
      <Switch
        selected={selected}
        size={SwitchSizeType.M}
        onClick={() => {
          console.log('do');
          setSelected(!selected);
        }}
      />
      <h1>Radio</h1>

      <RadioGroup
        value={radioValue}
        onChange={(value) => {
          setRadioValue(value);
        }}>
        <RadioGroup.Radio value={'1'} />
        <RadioGroup.Radio value={'2'} />
      </RadioGroup>

      <h1>TextField</h1>
      <TextField helperText={'기본입니다.'} />
      <TextField helperText={'기본입니다.'} searchIcon isSuccess size={TextFieldSizeType.S} />

      <h1>TextArea</h1>
      <TextArea textAreaOptions={{ maxLength: 100 }} helperText='안녕하ㅔ요' />

      <Accordion initialOpen>
        <Accordion.Title>Click to Toggle</Accordion.Title>
        <Accordion.Content>
          <Button
            fontStyle={ButtonOption.fontStyle.BODY_1_B}
            fill={ButtonOption.fill.ACCENT_GOLD_STRONG_DEFAULT}
            buttonProps={{
              onClick: () => {
                Toast({
                  content:
                    '토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트토스트',
                });
              },
            }}>
            토스트버튼
          </Button>{' '}
        </Accordion.Content>
      </Accordion>

      <Badge type={BadgeOption.type.NEW} />

      <Button
        fontStyle={ButtonOption.fontStyle.BODY_1_B}
        fill={ButtonOption.fill.ACCENT_GOLD_STRONG_DEFAULT}
        buttonProps={{
          onClick: update,
          debounce: 1000,
        }}>
        디바운스 버튼
      </Button>
    </div>
  );
};

export default Test;

// 업데이트 함수 - 성공
const update = (): Promise<boolean> => {
  return new Promise((resolve) => {
    console.log('do');
    resolve(true);
  });
};
