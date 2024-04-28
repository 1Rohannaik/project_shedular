import SideBar from "./components/SideBar";
import NextProject from "./components/NextProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [addProjects, setAddProjects] = useState(false)

  const handelAddProjects = () => {
    setAddProjects(addProjects=>!addProjects);
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar handelAddProjects={handelAddProjects} />
      {addProjects? <NextProject/>:<NoProjectSelected handelAddProjects={handelAddProjects} />}
    </main>
  );
}

export default App;
