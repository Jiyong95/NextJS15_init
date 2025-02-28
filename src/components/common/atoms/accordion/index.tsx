import classnames from 'classnames/bind';
import { useRef } from 'react';
import { FC, ReactNode, useState, createContext, useContext, useEffect } from 'react';

import Icon, { IconOption } from '@atoms/icon';
import { IconColorType, IconSizeType } from '@atoms/icon/IconType';

import styles from './index.module.scss';
const cx = classnames.bind(styles);

interface AccordionContextType {
  isOpen: boolean;
  toggle: () => void;
}

const defaultAccordionContext: AccordionContextType = {
  isOpen: false,
  toggle: () => {},
};

const AccordionContext = createContext<AccordionContextType>(defaultAccordionContext);

interface AccordionProps {
  className?: string;
  initialOpen?: boolean;
  children: ReactNode;
}

const Accordion: FC<AccordionProps> & {
  Title: FC<AccordionTitleProps>;
  Content: FC<AccordionContentProps>;
} = ({ className, initialOpen = false, children }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AccordionContext value={{ isOpen, toggle }}>
      <div className={cx(className)}>{children}</div>
    </AccordionContext>
  );
};

interface AccordionTitleProps {
  className?: string;
  iconSize?: IconSizeType;
  iconFill?: IconColorType;
  children: ReactNode;
}

const AccordionTitle: FC<AccordionTitleProps> = ({ className, iconSize = IconOption.size.S, iconFill, children }) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionTitle must be used within an Accordion');

  return (
    <button className={cx('title', className)} onClick={context.toggle}>
      {children}
      <Icon
        name={context.isOpen ? IconOption.name.ARROW_TOP : IconOption.name.ARROW_BOTTOM}
        size={iconSize}
        fill={iconFill}
      />
    </button>
  );
};

interface AccordionContentProps {
  className?: string;
  children: ReactNode;
}

const AccordionContent: FC<AccordionContentProps> = ({ className, children }) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionContent must be used within an Accordion');
  const contentRef = useRef<HTMLDivElement>(null);
  const [isFirstRender, setIsFirstRender] = useState(context.isOpen);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    // 첫 렌더링시 스크롤 이동을 막기 위한 로직
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    // css애니메이션 효과가 끝나고 스크롤 이동.
    setTimeout(() => {
      if (!contentRef.current || !context.isOpen) return;
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  }, [context.isOpen]);

  useEffect(() => {
    if (!contentRef.current) return;
    setContentHeight(contentRef.current.scrollHeight);
  }, []);

  return (
    <div
      ref={contentRef}
      className={cx('content', { open: context.isOpen })}
      style={{
        height: isFirstRender ? 'auto' : context.isOpen ? `${contentHeight}px` : '0px',
      }}>
      <div className={cx(className)}>{children}</div>
    </div>
  );
};

Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default Accordion;
