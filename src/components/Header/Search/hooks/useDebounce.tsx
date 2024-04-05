import { useEffect, useRef } from 'react';

export const useDebounce = <Args extends unknown[] = unknown[]>(callback: (...args: Args) => void, delay: number) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const timeoutId = timeoutRef.current;

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const debouncedCallback = (...args: Args) => {
    const timeoutId = timeoutRef.current;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};
