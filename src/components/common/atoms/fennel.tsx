import React, { ReactNode, useState, Children, isValidElement, useContext, createContext, FC } from 'react';

interface FennelContextType {
  step: number;
  prevStep: () => void;
  nextStep: () => void;
}

const defaultFennelContext: FennelContextType = {
  step: 0,
  prevStep: () => {},
  nextStep: () => {},
};

const FennelContext = createContext<FennelContextType>(defaultFennelContext);

export const useFennel = () => {
  const context = useContext(FennelContext);
  if (!context) {
    throw new Error('FennelProvider를 찾을 수 없습니다.');
  }
  return context;
};

interface FennelItemProps {
  children: ReactNode;
}

const FennelItem: React.FC<FennelItemProps> = ({ children }) => {
  return <>{children}</>;
};

interface FennelProps {
  startStep?: number;
  layout?: React.FC<{ children: ReactNode }>;
  children: ReactNode;
}

const Fennel: FC<FennelProps> & { Item: typeof FennelItem } = ({ startStep, layout: LayoutComponent, children }) => {
  const [step, setStep] = useState(startStep ?? 0);

  const prevStep = () => setStep(Math.max(0, step - 1));
  const nextStep = () => setStep(step + 1);

  // findFennelItems 함수의 node 타입을 ReactNode로 지정
  const findFennelItems = (node: ReactNode) => {
    const items: ReactNode[] = [];

    Children.forEach(node, (child) => {
      if (isValidElement(child)) {
        if (child.type === FennelItem) {
          items.push(child);
        }
      }
    });

    return items;
  };

  const steps = findFennelItems(children);
  const currentStepContent = steps[step];
  const contentToRender = LayoutComponent ? (
    <LayoutComponent>{currentStepContent}</LayoutComponent>
  ) : (
    currentStepContent
  );

  return <FennelContext value={{ step, prevStep, nextStep }}>{contentToRender}</FennelContext>;
};

Fennel.Item = FennelItem;

export default Fennel;
