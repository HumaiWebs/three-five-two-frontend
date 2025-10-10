"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { PiCaretRightDuotone } from "react-icons/pi";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import { useAuth } from "@/store/AuthProvider";
import { BiLogOut } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { routes } from "./../../lib/routes";

export type Route = {
  label: string;
  href?: string;
  icon: React.ElementType;
  children?: Route[];
};

export const LogoutButton = () => {
  const { logout } = useAuth();
  return (
    <Button
      onClick={logout}
      className="flex transition-colors duration-300 gap-2 items-center bg-red-100 text-red-600 hover:bg-red-600 hover:text-white w-full"
    >
      <BiLogOut /> Logout
    </Button>
  );
};


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
  const pathMatched = href
    ? pathname === href
    : subRoutes?.some((route) => pathname === route.href);
  const [showChildren, setShowChildren] = useState(false);

  if (href)
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href={href}
          className={twMerge(
            "flex text-yellow-800 rounded-md transition-colors duration-300 items-center gap-2 p-3 hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer",
            pathMatched && "bg-yellow-600 text-white font-semibold"
          )}
        >
          <Icon size={20} />
          <div>{label}</div>
        </Link>
      </motion.div>
    );

  if (subRoutes)
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onMouseOver={() => {
          setShowChildren(true);
        }}
        onMouseLeave={() => setShowChildren(false)}
        className={twMerge(
          "flex text-yellow-800 transition-colors duration-300 z-10 relative rounded-md items-center justify-between gap-2 p-3 hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer",
          pathMatched && "bg-yellow-600 text-white font-semibold"
        )}
      >
        {label}
        <motion.div
          animate={{ rotate: showChildren ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <PiCaretRightDuotone />
        </motion.div>

        {/* Dropdown for children */}
        <AnimatePresence>
          {showChildren && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              key={label}
              className="absolute z-10 top-0 p-2 left-[calc(100%_+_10px)] w-[300px] bg-white border border-gray-200 rounded-md shadow-lg mt-1"
            >
              {subRoutes?.map((child, index) => (
                <motion.div
                  key={child.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <SidebarOption {...child} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );

  return null;
};

const Sidebar = () => {
  return (
    <div className="w-[300px] flex flex-col gap-4 min-h-full rounded-md border border-gray-200 bg-gray-50">
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
      <div className="w-full p-2">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
