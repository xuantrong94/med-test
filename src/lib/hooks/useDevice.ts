import { useState, useEffect } from "react";

export const useDevice = (breakpoint: number = 768) => {
  const [device, setDevice] = useState<string>("desktop");

  useEffect(() => {
    const checkDevice = () => {
      if (globalThis.window !== undefined) {
        if (window.innerWidth <= breakpoint) {
          setDevice("mobile");
        } else {
          setDevice("desktop");
        }
      }
    };

    // Check on mount
    checkDevice();

    // Add resize listener
    if (globalThis.window !== undefined) {
      window.addEventListener("resize", checkDevice);
      return () => window.removeEventListener("resize", checkDevice);
    }
  }, [breakpoint]);

  return device;
};
