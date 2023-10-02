"use client";

import { createContext, useState } from "react";

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
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const value = {
    userData,
    setUserData,
    loggingProvider,
    setLoggingProvider,
    openPopUp,
    setOpenPopUp,
    openChat,
    setOpenChat,
    loading,
    setLoading,
  };
  return <Global.Provider value={value}>{children}</Global.Provider>;
}
