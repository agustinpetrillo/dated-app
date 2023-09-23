"use client";

import { createContext, useState } from "react";
import { UserData } from "@/types";

export const Global = createContext({});

type Props = {
  children: React.ReactNode;
};

export const GlobalProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    last_name: "",
    name: "",
  });

  const [loggingProvider, setLoggingProvider] = useState<boolean>(false);

  const value = { userData, setUserData, loggingProvider, setLoggingProvider };
  return <Global.Provider value={value}>{children}</Global.Provider>;
};
