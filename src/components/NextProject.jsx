import { useState } from "react";
import Input from "./Input";

const NextProject = () => {
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const [tasks, setTasks] = useState([]);

  const handelAddItems = () => {
    setTasks((prevTasks) => [...prevTasks, userInput]);
    setUserInput({ title: "", description: "", dueDate: "" });
  };
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={() =>
              setUserInput({ title: "", description: "", dueDate: "" })
            }
            className="text-stone-800 hover:text-stone-900"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handelAddItems}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Add Task
          </button>
        </li>
      </menu>
      <div>
        <Input
          value={userInput.title}
          onChange={(e) =>
            setUserInput({ ...userInput, title: e.target.value })
          }
          label="Title"
        />
        <Input
          value={userInput.description}
          onChange={(e) =>
            setUserInput({ ...userInput, description: e.target.value })
          }
          label="Description"
          textarea
        />
        <Input
          value={userInput.dueDate}
          onChange={(e) =>
            setUserInput({ ...userInput, dueDate: e.target.value })
          }
          label="Due Date"
        />
      </div>
      <div>
        <h2>Tasks:</h2>
        <ul>
          
        </ul>
      </div>
    </div>
  );
};

export default NextProject;
