import { CreateUser, UserLogin } from "@/types";

export const createUser = async (dataUser: CreateUser) => {
  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL_API}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(dataUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const loginUser = async (dataUser: UserLogin) => {
  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL_API}/auth/login`, {
    method: "POST",
    body: JSON.stringify(dataUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
