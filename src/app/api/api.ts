import { UserData } from "@/types";
import axios from "axios";

export const getUser = async () => {
  const controller = new AbortController();
  await axios
    .get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL_API}/user/profile/settings/me`,
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        signal: controller.signal,
      }
    )
    .then((data) => {
      return data.data as Promise<UserData>;
    })
    .catch((error) => {
      // if (error instanceof AxiosError) setError(error.response?.data.message);
    });
};
