import { getServerSession } from "next-auth";
import SessionProvider from "./providers/SessionProvider";
import NavbarMenu from "@/components/NavbarMenu";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import { GlobalProvider } from "@/context/GlobalContext";

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Date Me",
  description: "Find your media naranja",
  icons: {
    icon: "favicon.ico",
  },
  // keywords: [
  //   "videoclips",
  //   "videos musicales",
  //   "producción de videoclips",
  //   "edicion de videos musicales",
  //   "edicion de videoclips",
  //   "directores de videoclips",
  //   "directores de videos musicales",
  //   "productoras de videoclips",
  //   "productoras de videos musicales",
  //   "grabacion de videoclips",
  //   "grabacion de videos musicales",
  //   "postproduccion de videoclips",
  //   "postproduccion de videos musicales",
  //   "efectos visuales en videoclips",
  //   "efectos visuales en videos musicales",
  //   "estudio de videoclips",
  //   "estudio de videos musicales",
  //   "camaras para videoclips",
  //   "camaras para videos musicales",
  //   "escenarios de videoclips",
  //   "escenarios de videos musicales",
  //   "actores en videoclips",
  //   "actores en videos musicales",
  //   "vestuario en videoclips",
  //   "vestuario en videos musicales",
  //   "coreografia en videoclips",
  //   "coreografia en videos musicales",
  //   "lanzamiento de videoclips",
  //   "lanzamiento de videos musicales",
  //   "promocion de videoclips",
  //   "promocion de videos musicales",
  //   "making of de videoclips",
  //   "making of de videos musicales",
  //   "storyboard de videoclips",
  //   "storyboard de videos musicales",
  //   "concepto visual de videoclips",
  //   "concepto visual de videos musicales",
  // ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={robotoFlex.className}>
        <SessionProvider session={session}>
          <GlobalProvider>
            <NavbarMenu />
            {children}
          </GlobalProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
