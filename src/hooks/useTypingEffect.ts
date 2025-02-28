import { useState, useEffect } from 'react';

/**
 * useTypingEffect - 문자열을 한 글자씩 타이핑하는 애니메이션 효과를 위한 커스텀 훅
 * @param text 출력할 문자열
 * @param speed 한 글자 출력 속도 (기본값: 50ms)
 * @returns 현재 출력된 텍스트
 */

const useTypingEffect = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!text) return;
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1)); // slice로 보장된 문자열 설정
        index++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return `${displayedText}${isTypingComplete ? '' : ' |'}`; // 커서 추가
};

export default useTypingEffect;
