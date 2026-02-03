export type ElementType = "container";

export type EditorElement = {
  id: string;
  type: ElementType;
  props: Record<string, string>;
};

export type PropertyFieldType = "select";

export type CategoryTypes =
  | "Padding"
  | "Margin"
  | "Size"
  | "Layout"
  | "Flexbox"
  | "Grid";

export type VisibilityRule = {
  prop: string;
  equals: string | string[];
};

export interface PropertyOption {
  label: string;
  value: string;
}

export interface PropertySchema {
  category?: CategoryTypes;
  key: string;
  label: string;
  type: PropertyFieldType;
  defaultValue: string;
  order?: number;
  options?: PropertyOption[];
  unit?: "px";
  visibleWhen?: VisibilityRule;
}

export interface ElementSchema {
  type: ElementType;
  label: string;
  properties: PropertySchema[];
}
