import AppSidebar from "@/components/Sidebar/AppSidebar";
import SidebarMobile from "@/components/Sidebar/Sidebar-mobile";
import React from "react";

export default function WithSidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-x-10 w-full min-h-screen">
      {/* Sidebar desktop */}
      <div className="hidden md:block p-6">
        <AppSidebar />
      </div>

      {/* Sidebar mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-10">
        <SidebarMobile />
      </div>

      <main className="flex-1 pb-24 p-3 md:pb-6 md:p-6">
        {children}
      </main>
    </div>
  );
}
