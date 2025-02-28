import { useEffect } from 'react';

const useKeydown = (key: string = 'Escape', cb: () => void) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (key === e.code) {
        if (cb) cb();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [cb, key]);
};

export default useKeydown;
/**
 * key 종류
 *
 * 일반 키:
 * - 알파벳: KeyA ~ KeyZ
 * - 숫자: Digit0 ~ Digit9, Numpad0 ~ Numpad9
 * - 특수문자:
 *   - Enter
 *   - Space
 *   - Tab
 *   - Backspace
 *   - Delete
 *   - Escape
 *   - CapsLock
 *
 * 방향키:
 * - ArrowUp
 * - ArrowDown
 * - ArrowLeft
 * - ArrowRight
 *
 * 기능키:
 * - F1 ~ F12
 *
 * 보조키:
 * - ShiftLeft, ShiftRight
 * - ControlLeft, ControlRight
 * - AltLeft, AltRight
 * - MetaLeft, MetaRight
 */
