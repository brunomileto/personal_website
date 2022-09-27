import { CodeSnippet } from "../../../../components/CodeSnippet";
import { AboutCodeSnippetWrapper } from "./components/AboutCodeSnippetWrapper";

interface NameProps {
  name: string;
}

interface ParentesisProps {
  isToRight?: boolean;
}

function VariableNameSpan({ name }: NameProps) {
  return <span className="text-accent-waterGreenShinny">{name}</span>;
}

function ConstSpan() {
  return <span className="text-accent-lilac">const </span>;
}

function EqualsSignSpan() {
  return <span className="text-accent-lilac"> = </span>;
}

function FunctionSpan({ name }: NameProps) {
  return <span className="text-secondary-blue">{name}</span>;
}

function BracketsFunctionSpan({ isToRight = false }: ParentesisProps) {
  return <span className="text-accent-redOrange">{isToRight ? "{" : "}"}</span>;
}

function ParentesisFunctionSpan({ isToRight = false }: ParentesisProps) {
  return <span className="text-accent-redOrange">{isToRight ? "(" : ")"}</span>;
}

function FunctionParamSpan({ name }: NameProps) {
  return <span className="text-accent-orange">{name}</span>;
}

function SymbolsSpan({ name }: NameProps) {
  return <span className="text-accent-lilac">{name}</span>;
}

export function CodeSnippetSection() {
  return (
    <section
      id="code-snippet"
      className="hidden md:flex md:flex-col md:gap-0 md:border-l-1 md:border-lines 
                  md:w-full"
    >
      <div
        id="hidden"
        className="hidden md:flex  md:flex-row md:gap-3 md:border-b-1 
                 md:border-lines md:pl-2  md:w-full md:items-center"
      >
        <span
          className="hidden md:inline cursor-pointer ml-6 pr-4 
                        h-full border-lines md:py-2 text-transparent"
        >
          _
        </span>
      </div>
      <div
        className="flex justify-center items-center h-full md:px-2 md:text-xs 
                      lg:px-4 lg:text-sm xl:px-8 xl:text-base break-words"
      >
        <div className="max-w-[570px]">
          <div>
            <ConstSpan /> <VariableNameSpan name="button" />
            <EqualsSignSpan />
            <div className="inline">
              <FunctionSpan name="document.querySelector" />
              <ParentesisFunctionSpan isToRight />
            </div>
            <FunctionParamSpan name='"#sendBtn"' />
            <ParentesisFunctionSpan />
            <SymbolsSpan name=";" />
          </div>
          <br />
          <div>
            <div>
              <ConstSpan />
              <VariableNameSpan name="message" />
              <EqualsSignSpan />
              <BracketsFunctionSpan isToRight />
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;
              <VariableNameSpan name="name" />
              <SymbolsSpan name=":" /> &nbsp;
              <FunctionParamSpan name='"Jonathan Davis"' />
              <SymbolsSpan name="," />
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;
              <VariableNameSpan name="email" />
              <SymbolsSpan name=":" /> &nbsp;
              <FunctionParamSpan name='"jonathan-davis@gmail.com"' />
              <SymbolsSpan name="," />
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;
              <VariableNameSpan name="message" />
              <SymbolsSpan name=":" /> &nbsp;
              <FunctionParamSpan
                name={`"Hey! Just checked your website and it looks awesome! Also, 
                   I checked your articled on Medium. Lerned a few nice tips. 
                   Thanks!"`}
              />
              <SymbolsSpan name="," />
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;
              <VariableNameSpan name="date" />
              <SymbolsSpan name=":" /> &nbsp;
              <FunctionParamSpan name='"Thu 21 Apr"' />
              <SymbolsSpan name="," />
            </div>
            <div>
              <BracketsFunctionSpan />
              <SymbolsSpan name=";" />
            </div>
          </div>
          <br />
          <div>
            <div>
              <FunctionSpan name="button.addEventListener" />
              <ParentesisFunctionSpan isToRight />
              <FunctionParamSpan name='"click"' />
              <SymbolsSpan name="," />
              &nbsp;
              <ParentesisFunctionSpan isToRight />
              <ParentesisFunctionSpan />
              &nbsp;
              <SymbolsSpan name="=>" />
              &nbsp;
              <BracketsFunctionSpan isToRight />
            </div>
            <div>
              &nbsp; &nbsp; &nbsp;
              <FunctionSpan name="form.send" />
              <ParentesisFunctionSpan isToRight />
              <VariableNameSpan name="message" />
              <ParentesisFunctionSpan />
              <SymbolsSpan name=";" />
            </div>
            <div>
              <BracketsFunctionSpan />
              <ParentesisFunctionSpan />
              <SymbolsSpan name=";" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
