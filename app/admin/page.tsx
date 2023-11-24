import React from "react";
import Card from "./ui/card";
import Tableau from "./ui/Tableau";
import FormUi from "./formui";

export default function page() {
  return (
    <div className="hidden md:flex flex-col mr-16  lg:block ">
      <Card />
      <FormUi />
      <Tableau />
    </div>
  );
}
