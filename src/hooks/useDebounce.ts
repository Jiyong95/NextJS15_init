import { useCallback } from 'react';

type ParametersType = (...args: any[]) => any;

const useDebounce = <F extends ParametersType>(callback: F, delay: number) => {
  // 렌더링될때마다 debounced 함수가 초기화되는 것 방지
  const debounced = useCallback(
    debounce((...args) => {
      callback(...args);
    }, delay),
    [callback, delay],
  );

  return debounced;
};

const debounce = <F extends ParametersType>(func: F, ms: number) => {
  let isCooldown = false; // 첫 클릭 후 ms가 지났는지 판별
  let timeoutId: NodeJS.Timeout | null = null;

  return function _debounced(...args: Parameters<F>) {
    if (isCooldown) {
      // 클릭 후 ms이전에 클릭이 발생한 경우
      if (timeoutId) clearTimeout(timeoutId); // setTimeout을 삭제하여 isCooldown이 false가 안되게 처리.
    } else {
      isCooldown = true; // 첫 클릭 즉시 실행
      func(...args);
    }

    timeoutId = setTimeout(() => {
      isCooldown = false; // ms 동안 클릭 없으면 쿨다운 해제
      timeoutId = null;
    }, ms);
  };
};

export default useDebounce;
