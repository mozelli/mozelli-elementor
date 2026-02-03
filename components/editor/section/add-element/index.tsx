"use client";

import { useEditorStore } from "@/app/editor/store/useEditorStore";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

const AddElement = () => {
  const selectElement = useEditorStore((state) => state.selectElement);

  return (
    <div className="p-5">
      <Button size="xs" onClick={() => selectElement("")}>
        <Plus /> Novo Elemento
      </Button>
    </div>
  );
};

export default AddElement;
