"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GrDashboard, GrProductHunt } from "react-icons/gr";
import { PiCaretRightDuotone, PiPlusBold } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

export type Route = {
  label: string;
  href?: string;
  icon: React.ElementType;
  children?: Route[];
};

const routes = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: GrDashboard,
  },
  {
    label: "Products",
    icon: GrProductHunt,
    subRoutes: [
      { label: "All Products", href: "/admin/products", icon: GrProductHunt },
      { label: "Add Product", href: "/admin/add-product", icon: PiPlusBold},
    ],
  },
];

const SidebarOption = ({
  label,
  href,
  icon: Icon,
  subRoutes,
}: {
  label: string;
  href?: string;
  icon: React.ElementType;
  subRoutes?: Route[];
}) => {
  const pathname = usePathname();
  const pathMatched = pathname === href;
  const [showChildren, setShowChildren] = useState(false);
  if (href)
    return (
      <Link
        href={href}
        className={twMerge(
          "flex text-yellow-600 rounded-md items-center gap-2 p-3 hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer",
          pathMatched && "bg-yellow-600 text-white font-semibold"
        )}
      >
        <Icon size={20} />
        <div>{label}</div>
      </Link>
    );

  if (subRoutes)
    return (
      <div
        onMouseOver={() => {
          console.log("hovered");
          setShowChildren(true);
        }}
        className={twMerge(
          "flex text-yellow-600 z-10 relative rounded-md items-center justify-between gap-2 p-3 hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer",
          pathMatched && "bg-yellow-600 text-white font-semibold"
        )}
      >
        {label} <PiCaretRightDuotone />
        {/* Dropdown for children */}
        {showChildren && (
          <div
            onMouseLeave={() => setShowChildren(false)}
            key={label}
            className="absolute z-10 top-0 p-2 left-[calc(100%_+_10px)] w-[300px] bg-white border border-gray-200 rounded-md shadow-lg mt-1"
          >
            {subRoutes?.map((child) => (
              <SidebarOption key={child.label} {...child} />
            ))}
          </div>
        )}
      </div>
    );

  return null;
};

const Sidebar = () => {
  return (
    <div className="w-[300px] flex flex-col gap-4 min-h-full rounded-md border border-gray-200">
      <div className="flex gap-2 items-center p-3 border-b border-gray-200">
        <Image
          src={"/logo.jpg"}
          alt="Three-Five-Two"
          width={100}
          className="rounded-sm object-contain"
          height={100}
        />
        <div className="text-lg text-yellow-600 font-semibold">
          Admin Dashboard
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-1 p-2">
        {routes.map((route) => (
          <SidebarOption key={route.label} {...route} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
