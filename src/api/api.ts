const API = "http://localhost:4000/api";

interface User {
  email: string;
  password: string | number;
  username: string;
}

export const createUser = async (dataUser: User) => {
  await fetch(`${API}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(dataUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
