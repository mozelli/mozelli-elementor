import { EditorElement } from "@/app/editor/types/types";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/app/editor/store/useEditorStore";
import { composeContainerClasses } from "@/app/editor/elements/container/composeContainerClasses";

interface Props {
  element: EditorElement;
}

export const ContainerRenderer = ({ element }: Props) => {
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
        composeContainerClasses(element),
        isSelected && "ring-2 ring-red-200",
      )}
    >
      container
    </div>
  );
};
