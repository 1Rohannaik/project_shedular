import React from "react";
import Buttons from "./Buttons";

const SideBar = ({ handelAddProjects }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <div>
        <Buttons onClick={handelAddProjects}>+ AddProjects</Buttons>
      </div>
    </aside>
  );
};

export default SideBar;
