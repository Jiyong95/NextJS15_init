import { useEffect } from 'react';

export function useKeydown(cb: Function, key: string = 'Escape') {
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
}
