import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface Props {
  children: string;
  codeType?: string;
  id?: string;
}

export function CodeSnippet({
  children,
  codeType = "typescript",
  id = "code",
}: Props) {
  // useEffect(() => {
  //   Prism.highlightAll();
  // }, []);
  const teste = "style='background: transparent'";
  return (
    <div className="break-words overflow-y-hidden h-full">
      <SyntaxHighlighter
        wrapLongLines={true}
        wrapLines={true}
        language={codeType}
        style={anOldHope}
        children={children}
      />
    </div>
  );
}
