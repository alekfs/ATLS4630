import { useEffect, useState } from "react";

type DebouncedSetter<T> = (value: T | ((prev: T) => T)) => void;

export function useDebouncedState<T>(
  initialValue: T,
  delay: number
): [T, DebouncedSetter<T>] {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [value, delay]);

  // debouncedValue updates after `delay` ms
  // setValue updates the underlying value immediately
  return [debouncedValue, setValue];
}
