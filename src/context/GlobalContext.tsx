"use client";

import { createContext } from "react";

export const Utils = createContext({});

type Props = {
  children: React.ReactNode;
};

export const UtilsProvider = ({ children }: Props) => {
  const value = {};
  return <Utils.Provider value={value}>{children}</Utils.Provider>;
};
