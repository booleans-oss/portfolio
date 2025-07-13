import { useEffect, useState } from "react";

const DESKTOP_BREAKPOINT = 1024;

export default function useIsDesktop(breakpoint: number = DESKTOP_BREAKPOINT) {
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    // Handle SSR - assume desktop by default
    if (typeof window === "undefined") return true;
    return window.innerWidth >= breakpoint;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isDesktop;
}
