import { useEffect } from 'react';

// useClickAway 훅 정의
const useClickAway = (handler: () => void, ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    // 이벤트 리스너: 클릭 이벤트가 발생하면 실행될 함수
    const listener = (event: MouseEvent) => {
      // ref.current가 존재하고, 클릭된 요소가 ref.current 내부에 없을 때 handler 함수 실행
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    // document에 클릭 이벤트 리스너 추가
    document.addEventListener('click', listener);

    // Cleanup 함수
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [handler, ref]); // 의존성 배열에 handler와 ref를 추가하여, 이들이 변경될 때마다 효과를 다시 적용
};

export default useClickAway;
