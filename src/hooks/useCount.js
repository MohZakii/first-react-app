import { useState, useCallback } from "react";

export const useCount = (init = 0) => {
  const [counter, setCounter] = useState(init);
  const increment = useCallback(() => {
    setCounter((oldCounter) => oldCounter + 1);
  }, []);
  return [counter, increment];
};
