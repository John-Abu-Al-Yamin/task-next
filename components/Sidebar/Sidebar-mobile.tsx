"use client";
import {
  Calendar,
  CreditCard,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const navItems = [
  { 
    href: "/", 
    icon: LayoutDashboard, 
    label: "Dashboard",
    id: "dashboard"
  },
  { 
    href: "/teams", 
    icon: Users, 
    label: "Teams",
    id: "teams"
  },
  { 
    href: "/payments", 
    icon: CreditCard, 
    label: "Payments",
    id: "payments"
  },
  { 
    href: "/attendance", 
    icon: Calendar, 
    label: "Attendance",
    id: "attendance"
  },
  { 
    href: "/settings", 
    icon: Settings, 
    label: "Settings",
    id: "settings"
  },
];

const SidebarMobile = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-2 pb-1">
      <div className="relative mx-auto max-w-md">
        {/* Background with curved shape */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Decorative curved top */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-white rounded-b-full"></div>
          
          {/* Main navigation container */}
          <div className="relative px-2 py-4 flex items-center justify-between">
            {navItems.map(({ href, icon: Icon, label, id }, index) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={id}
                  href={href}
                  className={`
                    relative flex flex-col items-center justify-center 
                    w-12 h-12 rounded-xl transition-all duration-300 ease-in-out
                    group hover:scale-110 transform
                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg scale-110"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }
                  `}
                >
                  <Icon 
                    size={24} 
                    className={`
                      transition-all duration-300
                      ${isActive ? "text-white" : "group-hover:text-blue-600"}
                    `}
                  />
                  
                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  )}
                  
                  {/* Tooltip */}
                  <div className={`
                    absolute -top-12 left-1/2 transform -translate-x-1/2
                    px-2 py-1 bg-gray-800 text-white text-xs rounded-md
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200
                    whitespace-nowrap pointer-events-none
                  `}>
                    {label}
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </div>
        
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default SidebarMobile;
