import { createContext, useContext, useState, useEffect } from "react";

// types
interface BreakpointProviderProps {
  children: React.ReactNode;
}

const BreakpointContext = createContext({
  width: 0,
  isMobile: false,
});

export const BreakpointProvider: React.FC<BreakpointProviderProps> = ({
  children,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const contextValue = {
    width,
    isMobile: width <= breakpoint,
  };

  return (
    <BreakpointContext.Provider value={contextValue}>
      {children}
    </BreakpointContext.Provider>
  );
};

export const useBreakpoint = () => {
  const context = useContext(BreakpointContext);

  if (!context) {
    throw new Error(
      "useBreakpoint must be used within a BreakpointWidthProvider"
    );
  }

  return context;
};
