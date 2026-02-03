import { ElementType } from "../types";
import { ContainerRenderer } from "../containerRenderer";
// futuramente:
// import { TextRenderer } from "./TextRenderer";
// import { ButtonRenderer } from "./ButtonRenderer";

type RendererProps = {
  element: any;
};

export const renderers: Record<ElementType, React.FC<RendererProps>> = {
  container: ContainerRenderer,
  // text: TextRenderer,
  // button: ButtonRenderer,
};
