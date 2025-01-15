import classnames from 'classnames/bind';
import React from 'react';
import { createRoot } from 'react-dom/client';

import Button, { ButtonOption } from '@atoms/button';
import Icon, { IconOption } from '@atoms/icon';
import { IconColorType } from '@atoms/icon/IconType';
import { IconNameType } from '@atoms/icon/IconUtil';
import Modal from '@atoms/modal';
import { ModalTemplateType } from '@atoms/modal/ModalType';
import Text, { TextOption } from '@atoms/text';

import styles from './index.module.scss';

const cx = classnames.bind(styles);

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export interface DialogProps {
  className?: string;
  title: string;
  description: React.ReactNode;
  iconName?: IconNameType.circleCheck_fill | IconNameType.circleError_fill;
  iconColor?: IconColorType.danger | IconColorType.information | IconColorType.success;
  closeBtnProps?: BtnProps;
  confirmBtnProps?: BtnProps;
}

/**
 * @param {string} [className] - 추가 클래스를 설정.
 * @param {ButtonType} [type=ButtonType.Fill] - 버튼 스타일 타입.
 * @param {ButtonSizeType} [size=ButtonSizeType.L] - 버튼 크기 타입.
 * @param {object} [aProps] - Link태그 속성.
 * @param {object} [buttonProps] - button태그 속성.
 * @param {string} [iconName] - 버튼에 들어갈 아이콘 이름.
 * @param {ButtonIconPositionType} [iconPosition] - 아이콘 위치.
 * @param {string} [iconColor] - 아이콘 색상.
 * @param {string} [fill] - 버튼 색상.
 * @param {boolean} [isLoading] - 버튼 로딩 여부.
 * @param {React.CSSProperties} [styles] - 추가 인라인 스타일.
 */

const Dialog = ({
  title,
  description,
  closeBtnProps,
  confirmBtnProps,
  iconName = IconNameType.circleError_fill,
  iconColor = IconColorType.danger,
}: DialogProps) => {
  const el = document.createElement('div');
  document.body.appendChild(el);

  const removeElement = () => {
    if (root) {
      root.unmount(); // Unmount the React component
      document.body.removeChild(el); // Remove the div from the body
    }
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    closeBtnProps?.onClick?.(e);
    removeElement();
  };

  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    confirmBtnProps?.onClick?.(e);
    removeElement();
  };

  const dialog = (
    <Modal visible={true} dimmed={true} template={ModalTemplateType.none}>
      <div className={cx('wrapper')}>
        <div className={cx('titleArea')}>
          <Icon name={iconName} size={IconOption.size.M} fill={iconColor} />
          <Text fontStyle={TextOption.fontStyle.title_2_b} color={TextOption.color.default}>
            {title}
          </Text>
        </div>
        <div className={cx('descriptionArea')}>
          <Text fontStyle={TextOption.fontStyle.body_1_m} color={TextOption.color.subtle}>
            {description}
          </Text>
        </div>
        <div className={cx('btnArea')}>
          <Button
            type={ButtonOption.type.OutLine}
            size={ButtonOption.size.M}
            fontStyle={ButtonOption.fontStyle.body_1_sb}
            color={ButtonOption.color.subtle}
            buttonProps={{ ...closeBtnProps, onClick: handleClose }}>
            {closeBtnProps?.text}
          </Button>
          <Button
            type={ButtonOption.type.Fill}
            size={ButtonOption.size.M}
            fill={ButtonOption.fill.brand_strong_default}
            fontStyle={ButtonOption.fontStyle.body_1_sb}
            color={ButtonOption.color.inverse}
            buttonProps={{ ...confirmBtnProps, onClick: handleConfirm }}>
            {confirmBtnProps?.text}
          </Button>
        </div>
      </div>
    </Modal>
  );

  const root = createRoot(el);
  root.render(dialog);
};

export default Dialog;
