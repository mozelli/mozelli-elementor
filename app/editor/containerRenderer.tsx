import { EditorElement } from "./types";
import { cn } from "@/lib/utils";
import { useEditorStore } from "./store/useEditorStore";

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
        element.props.paddingTop,
        element.props.paddingBottom,
        element.props.paddingLeft,
        element.props.paddingRight,
        element.props.width,
        element.props.maxWidth,
        element.props.center,
        isSelected && "ring-2 ring-red-200",
      )}
    ></div>
  );
}
