import { useRef, useEffect } from 'react';

type ParametersType = (...args: any[]) => any;

function useDebounce<F extends ParametersType>(callback: F, delay: number) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debounced = useRef(
    debounce((...args) => {
      callbackRef.current(...args);
    }, delay),
  );

  return debounced.current;
}

export const debounce = <F extends ParametersType>(func: F, ms: number) => {
  let timeoutId: NodeJS.Timeout | null = null;

  return function _debounced(...args: Parameters<F>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, ms);
  };
};

export default useDebounce;
