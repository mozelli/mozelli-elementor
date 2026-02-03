import { EditorElement } from "@/app/editor/types";
import { renderers } from "./rendreres";

interface Props {
  element: EditorElement;
}

export function ElementRenderer({ element }: Props) {
  const Renderer = renderers[element.type];

  return <Renderer element={element} />;
}
