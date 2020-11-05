import React from "react";
import { Nullable } from "../lib/constants/types";

// via https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export default function useInterval(
  callback: () => void,
  delay: Nullable<number>
) {
  const savedCallback = React.useRef<any>(null);

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      const func: () => void = savedCallback.current;
      if (typeof func === "function") {
        func();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
