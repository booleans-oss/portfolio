import { useEffect } from "react";

type OnResizeOptions = {
  triggerOnInit?: boolean;
};

export default function useOnResize(
  callback: () => void,
  { triggerOnInit = false }: OnResizeOptions = {}
) {
  useEffect(() => {
    if (triggerOnInit) {
      callback();
    }

    window.addEventListener("resize", callback);

    return () => {
      window.removeEventListener("resize", callback);
    };
  }, [callback, triggerOnInit]);
}
