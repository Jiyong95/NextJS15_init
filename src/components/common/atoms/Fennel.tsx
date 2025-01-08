import React, { ReactNode, useState, Children, isValidElement, ReactElement, useContext, createContext } from "react";

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
    throw new Error("FennelProvider를 찾을 수 없습니다.");
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
  children: ReactNode; // 수정: children의 타입을 ReactNode로 지정
}

const Fennel = ({ startStep, layout: LayoutComponent, children }: FennelProps) => {
  const [step, setStep] = useState(startStep ?? 0);

  const prevStep = () => setStep(Math.max(0, step - 1));
  const nextStep = () => setStep(step + 1);

  // findFennelItems 함수의 node 타입을 ReactNode로 지정
  const findFennelItems = (node: ReactNode): ReactElement<FennelItemProps>[] => {
    let items: ReactElement<FennelItemProps>[] = [];

    Children.forEach(node, (child) => {
      //child는 <Fennel.Item>
      if (isValidElement(child)) {
        if (child.type === FennelItem) {
          items.push(child as ReactElement<FennelItemProps>);
        } else if (child.props && (child.props as FennelItemProps).children) {
          items = [...items, ...findFennelItems((child.props as FennelItemProps).children)];
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

  return <FennelContext.Provider value={{ step, prevStep, nextStep }}>{contentToRender}</FennelContext.Provider>;
};

Fennel.Item = FennelItem;

export default Fennel;
