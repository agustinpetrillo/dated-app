export const createUser = async (
  email: string,
  password: string | number,
  username: string
) => {
  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL_API}/auth/signup`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: username,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const loginUser = async (email: string, username: string) => {
  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL_API}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email: email, username: username }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
