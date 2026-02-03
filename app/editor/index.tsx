import Display from "./layouts/display";
import SideBar from "@/app/editor/layouts/sidebar";

const Editor = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <Display />
    </div>
  );
};

export default Editor;
