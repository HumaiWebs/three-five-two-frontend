"use client";
import { usePathname } from "next/navigation";

const useIsProtectedPage = () => {
  const pathname = usePathname();
  return pathname.startsWith("/admin");
};

export default useIsProtectedPage;
