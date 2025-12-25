"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex gap-4 text-sm">
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-2 py-1 rounded
              ${
                active
                  ? "bg-gray-100 dark:bg-[#161b22] font-semibold"
                  : "dark:hover:bg-[#161b22] rounded-sm transition-colors duration-200"
              }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
