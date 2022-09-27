import * as Accordion from "@radix-ui/react-accordion";
import Folder from "remixicon-react/Folder2FillIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";
import File2FillIcon from "remixicon-react/File2FillIcon";

interface SubAccordionProps {
  id: string;
  name: string;
  iconColor: "orange" | "green" | "blue";
  content: string[];
}

export function SubAccordion({
  iconColor,
  name,
  id,
  content,
}: SubAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value={`item-${id}`}>
        <Accordion.Trigger className="flex flex-row gap-1 items-center">
          <ArrowRightSLineIcon size={16} />
          <Folder
            size={13}
            className={
              iconColor === "orange"
                ? "text-accent-orange"
                : iconColor === "green"
                ? "text-accent-waterGreenShinny"
                : iconColor === "blue"
                ? "text-secondary-blue"
                : ""
            }
          />
          <span className="text-sm font-normal leading-6">{name}</span>
        </Accordion.Trigger>
        <Accordion.Content className="flex flex-col gap-1 items-start">
          {content.map((item) => {
            return (
              <div key={item} className="flex flex-row gap-1 items-center">
                <ArrowRightSLineIcon size={16} className="text-transparent" />
                <File2FillIcon size={12} />
                <span className="text-sm font-light leading-6">asdas</span>
              </div>
            );
          })}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
