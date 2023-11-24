import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Searchbutton() {
  return (
    <div>
      <button className="py-3 px-4 bg-gray-200 rounded-lg text-black">
        <FaSearch />
      </button>
    </div>
  );
}
