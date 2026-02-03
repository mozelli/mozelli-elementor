import { EditorElement } from "./types";
import { cn } from "@/lib/utils";
import { useEditorStore } from "./store/useEditorStore";
import { composeContainerClasses } from "./composeContainerClasses";

interface Props {
  element: EditorElement;
}

export function ContainerRenderer({ element }: Props) {
  const selectElement = useEditorStore((state) => state.selectElement);
  const selecElementId = useEditorStore((state) => state.selectedElementId);

  const isSelected = selecElementId === element.id;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        selectElement(element.id);
      }}
      className={cn(
        "min-h-20 border rounded-md transition hover:ring-2 ring-red-200",
        composeContainerClasses,
        isSelected && "ring-2 ring-red-200",
      )}
    ></div>
  );
}
