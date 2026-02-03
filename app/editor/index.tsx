import Display from "./display";
import SideBar from "./sidebar";

const Editor = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <Display />
    </div>
  );
};

export default Editor;
