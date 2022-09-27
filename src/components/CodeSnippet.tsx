import { ReactNode, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/index";
import "prismjs/themes/prism-funky.min.css";

interface Props {
  children: ReactNode | string;
  codeType?: string;
  id?: string;
}

export function CodeSnippet({
  children,
  codeType = "language-javascript",
  id = "code",
}: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="break-words">
      <code id={id} className={codeType}>
        {children}
      </code>
    </div>
  );
}
