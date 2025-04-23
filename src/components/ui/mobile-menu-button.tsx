import { Menu } from "lucide-react";
import React from "react";

interface MobileMenuButtonProps {
  onClick: () => void;
  className?: string;
  label?: string;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ onClick, className = "", label = "Open menu" }) => (
  <button
    aria-label={label}
    onClick={onClick}
    className={`inline-flex items-center justify-center rounded-md p-2 transition hover:bg-mint/10 focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 ${className}`}
    type="button"
  >
    <Menu className="w-7 h-7 text-mint" />
  </button>
);
