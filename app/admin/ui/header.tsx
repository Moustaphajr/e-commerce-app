import React from "react";
import { Avatar } from "@radix-ui/themes";
import { CiShoppingCart } from "react-icons/ci";
export default function Header() {
  return (
    <div className=" flex justify-between items-center ">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl px-3 font-bold">Kay Dieund</h1>
        <CiShoppingCart size={30} />
      </div>
      <div className="flex justify-end space-x-2 md:mr-8 ">
        <Avatar
          size="2"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="A"
        />
      </div>
    </div>
  );
}
