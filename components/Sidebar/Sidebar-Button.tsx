"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  isActive: boolean;
  onClick?: () => void;
}

const SidebarButton = ({
  id,
  label,
  icon: Icon,
  href,
  isActive,
  onClick,
}: SidebarItemProps) => {
  return (
    <div className="relative">
      {isActive && (
        <>
          {/* Top Slanted Curve */}
          <div
            className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-br-3xl transform rotate-45 shadow-md"
          />

          {/* Bottom Slanted Curve */}
          <div
            className="absolute -bottom-3 -right-3 w-6 h-6 bg-blue-500 rounded-tr-3xl transform -rotate-45 shadow-md"
          />
        </>
      )}

      <Link
        href={href}
        onClick={onClick}
        className={`relative w-full flex items-center gap-3 px-4 py-4
          text-left transition-all duration-200
          rounded-tl-xl rounded-bl-xl overflow-hidden
          ${
            isActive
              ? "bg-blue-500 text-white shadow-lg"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          }
        `}
      >
        <Icon size={20} />
        <span className="font-medium">{label}</span>
      </Link>
    </div>
  );
};

export default SidebarButton;
