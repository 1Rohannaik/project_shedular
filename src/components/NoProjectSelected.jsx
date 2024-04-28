import React from "react";
import noProjects from '../assets/no-projects.png'
import Buttons from "./Buttons";

const NoProjectSelected = ({handelAddProjects}) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjects}
        alt="an empty task left"
        className="w=16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        no project selected
      </h2>
      <p className="text-stone-400 mb-4">
        select a project or start with new one
      </p>
      <p className="mt-8">
        <Buttons onClick={handelAddProjects}>
          create a new project
        </Buttons>
      </p>
    </div>
  );
};

export default NoProjectSelected;
