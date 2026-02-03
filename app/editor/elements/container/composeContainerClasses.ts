import { EditorElement } from "@/app/editor/types/types";

export function composeContainerClasses(element: EditorElement) {
  const {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    width,
    maxWidth,
    center,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    gridCols,
    gridRows,
  } = element.props;

  return [
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    width,
    maxWidth,
    center,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    gridCols,
    gridRows,
  ]
    .filter(Boolean)
    .join(" ");
}
