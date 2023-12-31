"use client";

import SidebarSettings from "@/components/SidebarSettings";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-0 p-7">
      <SidebarSettings />
      <div className="w-[1px] min-h-screen ml-10 bg-gray-600" />
      {children}
    </div>
  );
}
