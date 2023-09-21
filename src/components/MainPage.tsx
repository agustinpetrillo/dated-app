import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BackgroundPhone from "./reutilizable/BackgroundPhone";
import LikeOrNot from "./LikeOrNot";

const MainPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <BackgroundPhone className="grid items-center justify-between w-full min-h-screen grid-cols-2 bg-primary">
      <div className="p-4 m-auto bg-red-700 rounded-lg">
        <h1>Matches</h1>
      </div>
      <LikeOrNot />
    </BackgroundPhone>
  );
};

export default MainPage;
