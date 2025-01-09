import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import Icon, { IconOption } from '@atoms/icon';
import { ModalTemplateType } from './ModalType';
const cx = classnames.bind(styles);

interface Props {
  className?: string;
  visible: boolean;
  dimmed?: boolean;
  template?: ModalTemplateType;
  clickBg?: React.MouseEventHandler;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({
  className,
  visible,
  dimmed,
  template = ModalTemplateType.default,
  clickBg,
  onClose,
  children,
}) => {
  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [visible]);

  const modal = (
    <div className={cx('wrap', { dimmed })} onClick={clickBg}>
      <div className={cx(className, 'content', ModalTemplateType[template])} onClick={(e) => e.stopPropagation()}>
        {!!onClose && (
          <button className={cx('closeBtn')} onClick={onClose}>
            <Icon name={IconOption.name.close} size={IconOption.size.M} />
          </button>
        )}
        {children}
      </div>
    </div>
  );

  return visible && ReactDOM.createPortal(modal, document.body);
};

export default Modal;
