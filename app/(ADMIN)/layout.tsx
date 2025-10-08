import Sidebar from "@/components/admin/sidebar";
import React, { ReactNode } from "react";

const AdminLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className="w-full min-h-screen flex gap-4 p-4">
      <Sidebar />
      <div className="p-4 overflow-hidden bg-white rounded-md border border-gray-200 flex-1 flex flex-col">
      {children}
      </div>
    </div>
  );
};

export default AdminLayout;
