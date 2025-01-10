import { useState } from 'react';

const useModal = (initialState?: boolean) => {
  const [isVisible, setIsVisible] = useState(initialState ?? false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return { isVisible, openModal, closeModal };
};

export default useModal;
