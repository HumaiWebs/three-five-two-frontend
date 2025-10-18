import Sidebar from "@/components/admin/sidebar";
import React, { ReactNode } from "react";
import AdminGuard from "@/guards/AdminGuard";

const AdminLayout = ({children}:{children:ReactNode}) => {
  return (
      <AdminGuard>
          <div className="w-full min-h-screen flex gap-2 p-2">
              <Sidebar />
              <div className="p-4 overflow-hidden rounded-md border border-gray-200 bg-gray-50 flex-1 flex flex-col">
                  {children}
              </div>
          </div>
      </AdminGuard>
 );
};

export default AdminLayout;
