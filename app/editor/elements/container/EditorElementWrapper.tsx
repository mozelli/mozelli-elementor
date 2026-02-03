import { EditorElement } from "@/app/editor/types/types";
import { useEditorStore } from "@/app/editor/store/useEditorStore";
import { cn } from "@/lib/utils";

interface Props {
  element: EditorElement;
  children: React.ReactNode;
}

export const EditorElementWrapper = ({ element, children }: Props) => {
  const selectElement = useEditorStore((state) => state.selectElement);
  const selectedElementId = useEditorStore((state) => state.selectedElementId);

  const isSelected = selectedElementId === element.id;

  return (
    <div
      className={cn(
        "relative transition-all",
        "hover:ring-2 ring-red-200",
        isSelected && "ring-2 ring-red-300",
      )}
      onClick={(e) => {
        e.stopPropagation();
        selectElement(element.id);
      }}
    >
      {children}
    </div>
  );
};
