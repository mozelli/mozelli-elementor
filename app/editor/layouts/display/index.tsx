"use client";

import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/app/editor/store/useEditorStore";

import { ElementRenderer } from "@/app/editor/rendreres/elementRenderer";

const Display = () => {
  const { elements, addElement, selectElement, selectedElementId } =
    useEditorStore();

  return (
    <div className="flex flex-col w-[85%]">
      {elements.map((element) => (
        <ElementRenderer key={element.id} element={element} />
      ))}
      <div className="flex items-center justify-center w-full min-h-0 overflow-y-auto">
        <div className="flex items-center gap-3 justify-center mt-4 py-5 px-5 border rounded-sm">
          <Button
            className="text-xs bg-slate-500 font-medium"
            onClick={() => addElement("container")}
          >
            Novo container
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Display;
