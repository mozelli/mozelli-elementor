import { ElementSchema } from "./types";

/* Shared spacing scale */
const spacingScale = [
  { value: "0", label: "0" },
  { value: "1", label: "4" },
  { value: "2", label: "8" },
  { value: "3", label: "12" },
  { value: "4", label: "16" },
  { value: "5", label: "20" },
  { value: "6", label: "24" },
];

/* Margin options */
/*const marginTopOptions = buildOptions("mt");
const marginBottomOptions = buildOptions("mb");
const marginLeftOptions = buildOptions("ml");
const marginRightOptions = buildOptions("mr");
*/

/* Width options */
const widthOptions = [
  { label: "Auto", value: "w-auto" },
  { label: "Full", value: "w-full" },
  { label: "Screen", value: "w-screen" },
  { label: "1/2", value: "w-1/2" },
  { label: "1/3", value: "w-1/3" },
  { label: "2/3", value: "w-2/3" },
  { label: "1/4", value: "w-1/4" },
  { label: "3/4", value: "w-3/4" },
];

/* Max Width */
const maxWidthOptions = [
  { label: "None", value: "max-w-none" },
  { label: "Small", value: "max-w-sm" },
  { label: "Medium", value: "max-w-md" },
  { label: "Large", value: "max-w-lg" },
  { label: "XL", value: "max-w-xl" },
  { label: "2XL", value: "max-w-2xl" },
  { label: "3XL", value: "max-w-3xl" },
  { label: "4XL", value: "max-w-4xl" },
  { label: "Full", value: "max-w-full" },
  { label: "Screen", value: "max-w-screen" },
];

/* Centering */
const centeringOptions = [
  { label: "Disabled", value: "" },
  { label: "Enabled", value: "mx-auto" },
];

/* Gap scale */
const gapScale = [
  { label: "0", value: "0" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "4", value: "4" },
  { label: "6", value: "6" },
  { label: "8", value: "8" },
];

const buildOptions = (prefix: string) =>
  spacingScale.map((space) => ({
    label: space.label,
    value: `${prefix}-${space.value}`,
  }));

const buildGapOptions = () =>
  gapScale.map((g) => ({
    label: g.label,
    value: `gap-${g.value}`,
  }));

/* Padding options */
const paddingTopOptions = buildOptions("pt");
const paddingBottomOptions = buildOptions("pb");
const paddingLeftOptions = buildOptions("pl");
const paddingRightOptions = buildOptions("pr");

const displayOptions = [
  { label: "Block", value: "block" },
  { label: "Flex", value: "flex" },
  { label: "Grid", value: "grid" },
];

const flexDirectionOptions = [
  { label: "Row", value: "flex-row" },
  { label: "Column", value: "flex-col" },
];

const justifyOptions = [
  { label: "Start", value: "justify-start" },
  { label: "Center", value: "justify-center" },
  { label: "End", value: "justify-end" },
  { label: "Between", value: "justify-between" },
  { label: "Around", value: "justify-around" },
  { label: "Evenly", value: "justify-evenly" },
];

const alignOptions = [
  { label: "Start", value: "items-start" },
  { label: "Center", value: "items-center" },
  { label: "End", value: "items-end" },
  { label: "Stretch", value: "items-stretch" },
];

const gapOptions = [{ label: "None", value: "" }, ...buildGapOptions()];

const gridColsOptions = [
  { label: "1", value: "grid-cols-1" },
  { label: "2", value: "grid-cols-2" },
  { label: "3", value: "grid-cols-3" },
  { label: "4", value: "grid-cols-4" },
  { label: "6", value: "grid-cols-6" },
  { label: "12", value: "grid-cols-12" },
];

const gridRowsOptions = [
  { label: "1", value: "grid-rows-1" },
  { label: "2", value: "grid-rows-2" },
  { label: "3", value: "grid-rows-3" },
  { label: "4", value: "grid-rows-4" },
];

export const elementSchemas: Record<string, ElementSchema> = {
  container: {
    type: "container",
    label: "Container",
    properties: [
      /* Padding */
      {
        category: "Padding",
        key: "paddingTop",
        order: 1,
        label: "Padding Top",
        type: "select",
        defaultValue: "pt-0",
        options: paddingTopOptions,
      },
      {
        category: "Padding",
        key: "paddingRight",
        order: 2,
        label: "Padding Right",
        type: "select",
        defaultValue: "pr-0",
        options: paddingRightOptions,
      },
      {
        category: "Padding",
        key: "paddingBottom",
        order: 3,
        label: "Padding Bottom",
        type: "select",
        defaultValue: "pb-0",
        options: paddingBottomOptions,
      },
      {
        category: "Padding",
        key: "paddingLeft",
        order: 4,
        label: "Padding Left",
        type: "select",
        defaultValue: "pl-0",
        options: paddingLeftOptions,
      },
      /* Size */
      {
        category: "Size",
        key: "width",
        order: 1,
        label: "Width",
        type: "select",
        defaultValue: "w-auto",
        options: widthOptions,
      },
      {
        category: "Size",
        key: "maxWidth",
        order: 2,
        label: "Max Width",
        type: "select",
        defaultValue: "max-w-none",
        options: maxWidthOptions,
      },
      {
        category: "Size",
        key: "centered",
        order: 3,
        label: "Center Horizontally",
        type: "select",
        defaultValue: "",
        options: centeringOptions,
      },
      /* Layout interno (Flexbox) */
      {
        category: "Layout",
        key: "display",
        order: 1,
        label: "Display",
        type: "select",
        defaultValue: "block",
        options: displayOptions,
      },
      {
        category: "Flexbox",
        key: "flexDirection",
        order: 2,
        label: "Direction",
        type: "select",
        defaultValue: "flex-row",
        options: flexDirectionOptions,
        visibleWhen: {
          prop: "display",
          equals: "flex",
        },
      },
      {
        category: "Flexbox",
        key: "justifyContent",
        order: 3,
        label: "Justify",
        type: "select",
        defaultValue: "justify-start",
        options: justifyOptions,
        visibleWhen: {
          prop: "display",
          equals: "flex",
        },
      },
      {
        category: "Flexbox",
        key: "alignItems",
        order: 4,
        label: "Align",
        type: "select",
        defaultValue: "items-stretch",
        options: alignOptions,
        visibleWhen: {
          prop: "display",
          equals: "flex",
        },
      },
      {
        category: "Flexbox",
        key: "gap",
        order: 5,
        label: "Gap",
        type: "select",
        defaultValue: "",
        options: gapOptions,
        visibleWhen: {
          prop: "display",
          equals: "flex",
        },
      },
      /* ===== Grid Layout ===== */
      {
        key: "gridCols",
        label: "Columns",
        type: "select",
        category: "Grid",
        order: 1,
        defaultValue: "grid-cols-1",
        options: gridColsOptions,
        visibleWhen: {
          prop: "display",
          equals: "grid",
        },
      },

      {
        key: "gridRows",
        label: "Rows",
        type: "select",
        category: "Grid",
        order: 2,
        defaultValue: "",
        options: gridRowsOptions,
        visibleWhen: {
          prop: "display",
          equals: "grid",
        },
      },
      {
        category: "Grid",
        key: "gap",
        order: 5,
        label: "Gap",
        type: "select",
        defaultValue: "",
        options: gapOptions,
        visibleWhen: {
          prop: "display",
          equals: "grid",
        },
      },
    ],
  },
};
