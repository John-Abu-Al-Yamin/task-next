"use client";
import {
  Calendar,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import React from "react";
import SidebarButton from "./Sidebar-Button";
import { usePathname } from "next/navigation";

const AppSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/",
    },
    {
      id: "teams",
      label: "Teams",
      icon: Users,
      href: "/teams",
    },
    {
      id: "payments",
      label: "Payments",
      icon: CreditCard,
      href: "/payments",
    },
    {
      id: "attendance",
      label: "Attendance",
      icon: Calendar,
      href: "/attendance",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      href: "/settings",
    },
  ];


const hiddenRoutes = ["/not-found", "/error"]; 
if (hiddenRoutes.includes(pathname)) return null;


  return (
    <div className="relative h-screen  pt-14 w-56 rounded-3xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-white"></div>

      {/* Glass panel */}
      <div className="relative z-10 h-full w-full bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl text-sm font-semibold text-white flex flex-col gap-y-4 pl-3 py-3">
        {menuItems.map((item) => (
          <SidebarButton
            key={item.id}
            id={item.id}
            label={item.label}
            icon={item.icon}
            href={item.href}
            isActive={pathname === item.href}
          />
        ))}

        {/* 👇 Logout at the bottom */}
        <div className="flex items-center justify-center gap-x-2 mt-auto pb-10 text-center text-xs text-[#E32134] cursor-pointer hover:text-red-700 transition">
          <LogOut size={16} />
          Log out
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;
