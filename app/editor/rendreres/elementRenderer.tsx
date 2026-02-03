import { EditorElement } from "@/app/editor/types/types";
import { Renderer } from "@/app/editor/rendreres/Renderer";

interface Props {
  element: EditorElement;
}

export function ElementRenderer({ element }: Props) {
  const SelectRenderer = Renderer[element.type];

  return <SelectRenderer element={element} />;
}
