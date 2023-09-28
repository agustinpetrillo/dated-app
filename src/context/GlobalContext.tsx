"use client";

import { createContext, useState } from "react";
import { UserData } from "@/types";

export const Global = createContext({});

type Props = {
  children: React.ReactNode;
};

export default function GlobalProvider({ children }: Props) {
  const [userData, setUserData] = useState<UserData>({
    _id: "",
    email: "",
    last_name: "",
    name: "",
  });
  const [loggingProvider, setLoggingProvider] = useState<boolean>(false);
  const [openPopUp, setOpenPopUp] = useState({
    email: false,
    password: false,
  });

  const value = {
    userData,
    setUserData,
    loggingProvider,
    setLoggingProvider,
    openPopUp,
    setOpenPopUp,
  };
  return <Global.Provider value={value}>{children}</Global.Provider>;
}
