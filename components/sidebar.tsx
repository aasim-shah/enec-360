"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "./theme-toggle";
import {
  ChevronLeft,
  LayoutDashboard,
  FileText,
  Languages,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Videos",
    href: "/dashboard/videos",
    icon: FileText,
  },
  {
    title: "Languages",
    href: "/dashboard/languages",
    icon: Languages,
  },
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "relative flex flex-col h-screen border-r px-4 py-6 transition-all duration-300",
        isCollapsed ? "w-20" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between mb-6">
        <h1
          className={cn(
            "font-bold text-xl transition-opacity",
            isCollapsed && "opacity-0"
          )}
        >
          Admin
        </h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <Menu className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-2">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isCollapsed && "justify-center"
                )}
              >
                <item.icon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2">{item.title}</span>}
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="mt-auto pt-4">
        <ThemeToggle />
      </div>
    </div>
  );
}
