"use client";

import { createContext, useContext, useState } from "react";

const AnimationContext = createContext({
  isLoaded: false,
  setLoaded: (v: boolean) => {},
});

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }: any) => {
  const [isLoaded, setLoaded] = useState(false);

  return (
    <AnimationContext.Provider value={{ isLoaded, setLoaded }}>
      {children}
    </AnimationContext.Provider>
  );
};