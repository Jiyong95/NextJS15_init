import classnames from 'classnames/bind';
import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';

import useKeydown from '@hooks/useKeydown';

import Icon, { IconOption } from '@atoms/icon';

import { ModalTemplateType } from './ModalType';

import styles from './index.module.scss';
const cx = classnames.bind(styles);

interface Props {
  className?: string;
  visible: boolean;
  dimmed?: boolean;
  template?: ModalTemplateType;
  clickBg?: React.MouseEventHandler;
  onClose?: () => void; //x 버튼 노출하지 않으려면 ScrollArea에서 닫기 버튼 구현
  children: React.ReactNode;
}

const Modal: FC<Props> & {
  ScrollArea: FC<ScrollAreaProps>;
} = ({ className, visible, dimmed, template = ModalTemplateType.DEFAULT, clickBg, onClose, children }) => {
  // bgArea를 클릭한 이벤트가 modalArea에 전파되지 않도록 설정.
  const handleModalAreaClickEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [visible]);

  // esc 눌렀을때 닫기
  useKeydown('Escape', () => onClose?.());

  const modal = (
    <div className={cx('bgArea', { dimmed })} onClick={clickBg}>
      <div className={cx(className, 'modalArea', ModalTemplateType[template])} onClick={handleModalAreaClickEvent}>
        {!!onClose && (
          <button className={cx('closeBtn')} onClick={onClose}>
            <Icon name={IconOption.name.CLOSE} size={IconOption.size.M} />
          </button>
        )}
        {children}
      </div>
    </div>
  );

  return visible && ReactDOM.createPortal(modal, document.body);
};

interface ScrollAreaProps {
  ref?: React.RefObject<HTMLDivElement>;
  className?: string;
  innerClassName?: string;
  maxHeight?: string | number;
  children: React.ReactNode;
}
const ScrollArea: FC<ScrollAreaProps> = ({ ref, className, innerClassName, maxHeight, children }) => {
  return (
    <div ref={ref} className={cx('scrollArea', className)}>
      <div className={cx('scrollInner', innerClassName)} style={{ maxHeight }}>
        {children}
      </div>
    </div>
  );
};

Modal.ScrollArea = ScrollArea;

export default Modal;
