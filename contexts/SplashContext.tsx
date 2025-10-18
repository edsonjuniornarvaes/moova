import React, { createContext, useContext, useState, ReactNode } from "react";

interface SplashContextType {
  splashComplete: boolean;
  setSplashComplete: (complete: boolean) => void;
}

const SplashContext = createContext<SplashContextType | undefined>(undefined);

export const useSplash = () => {
  const context = useContext(SplashContext);
  if (context === undefined) {
    throw new Error("useSplash must be used within a SplashProvider");
  }
  return context;
};

interface SplashProviderProps {
  children: ReactNode;
}

export const SplashProvider: React.FC<SplashProviderProps> = ({ children }) => {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <SplashContext.Provider value={{ splashComplete, setSplashComplete }}>
      {children}
    </SplashContext.Provider>
  );
};
