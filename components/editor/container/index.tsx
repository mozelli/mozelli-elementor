"use client";

import { useEditorStore } from "@/app/editor/store/useEditorStore";
import AddElement from "../section/add-element";

type ContainerProps = {
  children?: React.ReactNode;
  editProps: () => void;
};

const Container = ({
  children = <AddElement />,
  editProps,
}: ContainerProps) => {
  const { elements, selectElement, selectedElementId } = useEditorStore();

  return (
    <div className="">
      {elements.map((element) => {
        const isSelected = element.id === selectedElementId;
        if (element.type === "container") {
          return (
            <div
              className={`${element.props.paddinTop} ${element.props.paddinBottom} ${element.props.paddinLeft} ${element.props.paddinRight}`}
              key={element.id}
              onClick={() => selectElement(element.id)}
            >
              {children}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Container;
