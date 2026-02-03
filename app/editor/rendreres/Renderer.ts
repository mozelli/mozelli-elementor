import { EditorElement, ElementType } from "../types/types";
import { ContainerRenderer } from "@/app/editor/elements/container/containerRenderer";
// futuramente:
// import { TextRenderer } from "./TextRenderer";
// import { ButtonRenderer } from "./ButtonRenderer";

type RendererProps = {
  element: EditorElement;
};

export const Renderer: Record<ElementType, React.FC<RendererProps>> = {
  container: ContainerRenderer,
  // text: TextRenderer,
  // button: ButtonRenderer,
};
