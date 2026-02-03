"use client";

import { useEditorStore } from "@/app/editor/store/useEditorStore";
import { FieldGroup, FieldLabel, FieldSet, Field } from "@/components/ui/field";

import { ElementSchemas } from "@/app/editor/schemas/elementSchemas";
import { PropertySchema } from "@/app/editor/types/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SideBar = () => {
  const { elements, selectedElementId, updateElementProp } = useEditorStore();

  const element = elements.find((el) => el.id === selectedElementId);

  if (!element) {
    return (
      <aside className="flex flex-col w-56 bg-sidebar-foreground px-7 py-0 text-sidebar">
        <h2 className="font-medium pb-4">Mozelli Elementor</h2>
      </aside>
    );
  }

  const schema = ElementSchemas[element.type];
  const grouped = schema.properties.reduce(
    (acc, props) => {
      const category = props.category ?? "General";

      if (!acc[category]) acc[category] = [];

      acc[category].push(props);

      acc[category].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

      return acc;
    },
    {} as Record<string, PropertySchema[]>,
  );

  function isPropertyVisible(
    prop: PropertySchema,
    elementProps: Record<string, string>,
  ) {
    if (!prop.visibleWhen) return true;

    const currentValue = elementProps[prop.visibleWhen.prop];

    if (Array.isArray(prop.visibleWhen.equals)) {
      return prop.visibleWhen.equals.includes(currentValue);
    }

    return currentValue === prop.visibleWhen.equals;
  }

  return (
    <aside className="flex flex-col w-56 h-full overflow-y-auto bg-sidebar-foreground px-2 py-4 text-sidebar">
      <h2 className="font-medium pb-4">Mozelli Elementor</h2>
      <h3 className="bg-accent-foreground p-1 mb-4 rounded-sm text-orange-300 font-medium">
        {schema.label}
      </h3>
      <Accordion type="multiple" defaultValue={Object.keys(grouped)}>
        {Object.entries(grouped).map(([category, props]) => (
          <AccordionItem key={category} value={category}>
            <AccordionTrigger>{category}</AccordionTrigger>
            <AccordionContent>
              {props
                .filter((prop) => isPropertyVisible(prop, element.props))
                .map((prop, index) => (
                  <FieldSet key={index}>
                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-xs text-muted-foreground">
                          {prop.label}
                        </FieldLabel>
                        {prop.type === "select" && (
                          <select
                            id={prop.key}
                            value={element.props[prop.key]}
                            onChange={(e) => {
                              updateElementProp(
                                element.id,
                                prop.key,
                                e.target.value,
                              );
                              console.log(elements);
                            }}
                            className="border rounded-sm mb-5"
                          >
                            {prop.options?.map((option) => (
                              <option
                                key={option.value}
                                value={option.value}
                                className="text-sidebar-foreground"
                              >
                                {option.label}
                              </option>
                            ))}
                          </select>
                        )}
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
};

export default SideBar;
