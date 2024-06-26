import React, { useState } from "react";

const Input = ({ textarea, label, ...props }) => {

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-700 ">
        {label}
      </label>
      {textarea ? (
        <textarea
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 text-stone -600 focus:outline-none focus:border-stone-600 bg-stone-50"
          {...props}
        />
      ) : (
        <input
          type="text"
          {...props}
          className="bg-stone-200 h-10"
        />
      )}
    </p>
  );
};

export default Input;
