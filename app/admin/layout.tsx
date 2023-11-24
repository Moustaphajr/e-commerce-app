import React from "react";
import { GrOrganization, GrUser, GrProductHunt } from "react-icons/gr";
import Header from "./ui/header";

interface navList {
  title: string;
  link: string;
  logo: React.ReactNode;
}

export default function layout({ children }: { children: React.ReactNode }) {
  const navList: navList[] = [
    {
      title: "User",
      link: "/user",
      logo: <GrUser />,
    },
    {
      title: "Product",
      link: "/product",
      logo: <GrProductHunt />,
    },
  ];

  return (
    <div>
      <div className=" w-full py-2 bg-slate-100 ">
        <Header />
      </div>
      <div className=" lg:flex lg:gap-10 md:flex gap-8 ">
        <div className=" hidden md:block lg:block md:w-[30%] lg:w-[20%] border bg-gray-800 h-screen rounded-md ">
          <h1 className="text-white px-2 flex items-center space-x-2 mt-6 cursor-pointer">
            <GrOrganization />
            <span>Dashboard</span>
          </h1>
          <ul>
            {navList.map((items) => (
              <li
                key={items.title}
                className="text-white px-2 flex items-center space-x-2 mt-4 hover:bg-gray-600 rounded-md h-10 w-full"
              >
                <span>{items.logo}</span>
                <a href={items.link}>{items.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-[70%] mx-auto">{children}</div>
      </div>
    </div>
  );
}
