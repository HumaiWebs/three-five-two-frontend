import Sidebar from "@/components/admin/sidebar";
import React from "react";

const AdminLayout = () => {
  return (
    <div className="w-full min-h-screen flex gap-4 p-4">
      <Sidebar />
    </div>
  );
};

export default AdminLayout;
