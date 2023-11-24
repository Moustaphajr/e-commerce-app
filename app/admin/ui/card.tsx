import React from "react";
import { cardList } from "../cardList";
import { GrUserNew } from "react-icons/gr";

export default function Card() {
  return (
    <div className="md:flex md:justify-center ">
      <div className=" lg:flex items-center gap-10 mt-4  ">
        {cardList.map((item) => (
          <div
            key={item.title}
            className="md:w-80 md:mt-8  h-36 lg:w-96 border rounded-lg p-4  bg-gray-100 shadow-md hover:shadow-xl scale-100 hover:scale-105 duration-300"
          >
            <div className="flex justify-center items-center">
              <GrUserNew />
              <h1 className="ml-2 text-2xl font-semibold">{item.title}</h1>
            </div>
            <div>
              <p className="mt-4 text-center text-lg text-green-600 font-bold">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
