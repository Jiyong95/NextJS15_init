import classnames from 'classnames/bind';
import React from 'react';
import { createRoot } from 'react-dom/client';

import Button, { ButtonOption } from '@atoms/button';
import Modal from '@atoms/modal';
import { ModalTemplateType } from '@atoms/modal/ModalType';
import Text, { TextOption } from '@atoms/text';

import { DialogType } from './DialogType';
import { getDialogIcon } from './DialogUtil';

import styles from './index.module.scss';

const cx = classnames.bind(styles);

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export interface Props {
  className?: string;
  type?: DialogType;
  title: string;
  description: React.ReactNode;
  closeBtnProps?: BtnProps;
  confirmBtnProps?: BtnProps;
}

const Dialog = ({ type = DialogType.DEFAULT, title, description, closeBtnProps, confirmBtnProps }: Props) => {
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
    <Modal visible={true} dimmed={true} template={ModalTemplateType.NONE}>
      <div className={cx('wrapper')}>
        <div className={cx('titleArea')}>
          {getDialogIcon(type)}
          <Text fontStyle={TextOption.fontStyle.TITLE_2_B} color={TextOption.color.DEFAULT}>
            {title}
          </Text>
        </div>
        <div className={cx('descriptionArea')}>
          <Text fontStyle={TextOption.fontStyle.BODY_1_M} color={TextOption.color.SUBTLE}>
            {description}
          </Text>
        </div>
        <div className={cx('btnArea')}>
          <Button
            type={ButtonOption.type.OUTLINE}
            size={ButtonOption.size.M}
            fontStyle={ButtonOption.fontStyle.BODY_1_SB}
            color={ButtonOption.color.SUBTLE}
            buttonProps={{ ...closeBtnProps, onClick: handleClose }}>
            {closeBtnProps?.text}
          </Button>
          <Button
            type={ButtonOption.type.FILL}
            size={ButtonOption.size.M}
            fill={ButtonOption.fill.BRAND_STRONG_DEFAULT}
            fontStyle={ButtonOption.fontStyle.BODY_1_SB}
            color={ButtonOption.color.INVERSE}
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
