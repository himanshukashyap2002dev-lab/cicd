"use client";
import React, { createContext, useContext, useMemo } from "react";
import { BaseContextType, ENVVARIABLES } from "../types/types";

export const BaseContext = createContext<null | BaseContextType>(null);

export function BaseContextProvider({
  children,
  appconfig,
}: {
  children: React.ReactNode;
  appconfig: ENVVARIABLES;
}) {
  const baseContextValue = useMemo<BaseContextType>(() => {
    return { appconfig };
  }, [appconfig]);

  return <BaseContext value={baseContextValue}>{children}</BaseContext>;
}

export function useBaseContext() {
  const context = useContext(BaseContext);
  if (context === null) {
    throw new Error("useBaseContext must be used within a BaseContextProvider");
  }
  return context;
}
