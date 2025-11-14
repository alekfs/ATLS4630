import { useEffect, useState } from "react";

export function useTypewriter(
  text: string,
  delay: number,
  startDelay: number = delay * 3
): string {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!text) {
      setDisplayed("");
      return;
    }

    if (delay <= 0) {
      setDisplayed(text);
      return;
    }

    setDisplayed("");
    let index = 0;
    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length && intervalId !== undefined) {
          window.clearInterval(intervalId);
        }
      }, delay);
    }, startDelay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [text, delay, startDelay]);

  return displayed;
}
