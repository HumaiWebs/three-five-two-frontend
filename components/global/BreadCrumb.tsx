"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { PiCaretRight } from "react-icons/pi";

const BreadCrumb = () => {
  const path = usePathname();
  return (
    <div className="text-sm text-gray-800 px-3 py-1 rounded-full border border-gray-100 bg-gray-50 max-w-max flex gap-1 items-center">
      {path
        .split("/")
        .filter(Boolean)
        .map((segment, index, arr) => {
          const href = "/" + arr.slice(0, index + 1).join("/");
          const isLast = index === arr.length - 1;
          return (
            <span key={index} className="flex gap-1 items-center">
              {index > 0 && <PiCaretRight />}
              {isLast ? (
                <span className="capitalize flex gap-1 items-center">
                  {segment.replace(/-/g, " ")}
                </span>
              ) : (
                <Link
                  href={href}
                  className="capitalize text-amber-800 hover:underline flex gap-1 items-center"
                >
                  {segment.replace(/-/g, " ")}
                </Link>
              )}
            </span>
          );
        })}
    </div>
  );
};

export default BreadCrumb;
