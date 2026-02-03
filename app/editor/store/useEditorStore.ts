import { create } from "zustand";

import { ElementType, EditorElement } from "@/app/editor/types/types";
import { ElementSchemas } from "@/app/editor/schemas/elementSchemas";

interface EditorState {
  elements: EditorElement[];
  selectedElementId: string | null;

  addElement: (type: ElementType) => void;
  selectElement: (id: string) => void;
  updateElementProp: (id: string, key: string, value: any) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  elements: [],
  selectedElementId: null,

  addElement: (type) =>
    set((state) => {
      const schema = ElementSchemas[type];

      const newElement: EditorElement = {
        id: crypto.randomUUID(),
        type,
        props: Object.fromEntries(
          schema.properties.map((property) => [
            property.key,
            property.defaultValue,
          ]),
        ),
      };

      return {
        elements: [...state.elements, newElement],
        selectedElementId: newElement.id,
      };
    }),

  selectElement: (id) =>
    set({
      selectedElementId: id,
    }),

  updateElementProp: (id, key, value) =>
    set((state) => ({
      elements: state.elements.map((el) =>
        el.id === id
          ? {
              ...el,
              props: {
                ...el.props,
                [key]: value,
              },
            }
          : el,
      ),
    })),
}));
