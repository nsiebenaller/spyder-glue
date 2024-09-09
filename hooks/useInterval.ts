import React from "react";

type UseIntervalOptions = {
  interval?: number;
};
export default function useInterval<T>(
  items: T[],
  opts?: UseIntervalOptions,
): T {
  const interval = opts?.interval || 3000;
  const [index, setIndex] = React.useState<number>(0);
  const indexRef = React.useRef<number>(index);
  indexRef.current = index;

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const currIndex = indexRef.current;
      if (currIndex >= items.length - 1) {
        setIndex(0);
        return;
      }
      setIndex(currIndex + 1);
    }, interval);
    return () => {
      clearInterval(intervalId);
    };
  }, [items.length, interval]);

  return items[index];
}
