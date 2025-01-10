'use client';
import { ReactNode, createContext, useContext, useRef, useState } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames/bind';
import { IconNameType } from '@atoms/icon/IconUtil';
import Icon, { IconOption } from '@atoms/icon';
import Text, { TextOption } from '@atoms/text';

const cx = classnames.bind(styles);

interface ToastProps {
  iconName?: IconNameType;
  content: ReactNode;
}

const ToastDom = ({ iconName = IconNameType.circleInfo_fill, content }: ToastProps) => (
  <div className={cx('toastArea')}>
    <Icon name={iconName} size={IconOption.size.S} fill={IconOption.fill.inverse} />
    <Text fontStyle={TextOption.fontStyle.body_2_m} color={TextOption.color.inverse} styles={{ whiteSpace: 'nowrap' }}>
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
  const [toastProps, setToastProps] = useState<ToastProps>({ iconName: IconNameType.circleInfo, content: '' });
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
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {open && <ToastDom {...toastProps} />}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('ToastProvider를 찾을 수 없습니다.');
  return context.showToast;
};
