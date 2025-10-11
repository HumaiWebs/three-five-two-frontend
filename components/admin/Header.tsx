import React from "react";
import Backbutton from "./Backbutton";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <div className="pb-2 w-full flex justify-between items-center border-b mb-4">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <Backbutton />
    </div>
  );
};

export default Header;
