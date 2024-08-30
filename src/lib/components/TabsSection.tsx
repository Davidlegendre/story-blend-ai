import {
  Tabs,
  Tab,
  Card,
  CardBody,
  ScrollShadow,
} from "@nextui-org/react";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  codeContent?: string;
}

export default function TabsSection({ children, codeContent = "" }: Props) {
  const codeString = `import { Book, typeBook } from "@/lib/components/Book";
                  
${codeContent}`;

  return (
    <div className="flex w-full flex-col">
      <Card className="max-w-[100%] h-max">
        <CardBody>
          <Tabs aria-label="Tabs radius" radius="full">
            <Tab key="preview" title="Preview">
              <ScrollShadow
                orientation="horizontal"
                className=" flex overflow-y-hidden p-7 gap-5"
              >
                {children}
              </ScrollShadow>
            </Tab>
            <Tab key="code" title="Code">
              <pre
                style={{
                  background: "black",
                  padding: "10px",
                  maxWidth:'577px',
                  width: "100%",
                  borderRadius: "7px",
                  overflowX: "auto",
                }}
              >
                <code>{codeString}</code>
              </pre>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
