import React from "react";
import { BiLoader } from "react-icons/bi";

const Loader = ({ message }: { message?: string }) => {
  return (
    <div className="w-full p-2 flex justify-center items-center">
      <div className="flex gap-4 items-center">
        <BiLoader className="animate-spin text-3xl" />
        {message && (
          <p className="text-lg font-semibold text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Loader;
