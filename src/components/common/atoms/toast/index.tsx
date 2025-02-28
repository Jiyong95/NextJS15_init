'use client';
import classnames from 'classnames/bind';
import { ReactNode, createContext, useContext, useRef, useState } from 'react';

import Icon, { IconOption } from '@atoms/icon';
import { IconNameType } from '@atoms/icon/IconUtil';
import Text, { TextOption } from '@atoms/text';

import styles from './index.module.scss';

const cx = classnames.bind(styles);

export const ToastOption = {
  iconName: IconNameType,
};

export interface ToastProps {
  iconName?: IconNameType;
  content: ReactNode;
}

export const ToastDom = ({ iconName = IconNameType.CIRCLE_INFO_FILL, content }: ToastProps) => (
  <div className={cx('toastArea')}>
    <Icon name={iconName} size={IconOption.size.S} fill={IconOption.fill.INVERSE} />
    <Text className={cx('content')} fontStyle={TextOption.fontStyle.BODY_2_M} color={TextOption.color.INVERSE}>
      {content}
    </Text>
  </div>
);

interface ToastContextProps {
  showToast: (props: ToastProps) => void;
}

const ToastContext = createContext<ToastContextProps | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [toastProps, setToastProps] = useState<ToastProps>({ iconName: IconNameType.CIRCLE_INFO, content: '' });
  const toastTimer = useRef<NodeJS.Timeout | null>(null);

  const hide = () => {
    if (!toastTimer.current) return;
    setOpen(false);
    clearTimeout(toastTimer.current);
  };

  const showToast = ({ iconName, content }: ToastProps) => {
    if (toastTimer.current) hide();

    /* 
    setState가 한 Context 안에 여러개 있을 때 한 번에 업데이트함.(Batch)
    setTimeout이 끝나고 업데이트 됨 <= 그래서 여러번 showToast를 호출해도 마지막 호출만 실행됨.
    그래서 즉시 실행시키기 위해 reqeustAnimationFrame으로 감싸줌
    */
    requestAnimationFrame(() => {
      setOpen(true);
      setToastProps({ iconName, content });
    });

    toastTimer.current = setTimeout(() => {
      hide();
    }, 3000);
  };

  return (
    <ToastContext value={{ showToast }}>
      {children}
      {open && <ToastDom {...toastProps} />}
    </ToastContext>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('ToastProvider를 찾을 수 없습니다.');
  return context.showToast;
};
