import { useState } from 'react';

type StringUnion<T extends readonly string[]> = T[number];

const useModals = <T extends readonly string[]>(keys: T, defaultValue?: T[number]) => {
  const [modalState, setModalState] = useState<StringUnion<T> | null>(defaultValue ?? null);

  const openModal = (key: Exclude<StringUnion<T>, undefined>) => {
    setModalState(key);
  };

  const closeModal = () => {
    setModalState(null);
  };

  const isVisible = (key: Exclude<StringUnion<T>, undefined>) => {
    return modalState === key;
  };

  return { modalState, openModal, closeModal, isVisible };
};

export default useModals;
