interface ActionButtonProps {
  hrefLink?: string;
  fileName?: string;
  buttonText: string;
  paddingY?: "py-2" | "py-3" | "py-4" | "py-5" | "py-6";
}

export function ActionButton({
  fileName,
  hrefLink,
  buttonText,
  paddingY = "py-2",
}: ActionButtonProps) {
  return (
    <a
      href={hrefLink}
      download={fileName}
      className={`${paddingY} border-2 rounded px-5 text-accent border-accentLight
  hover:border-accent/60 hover:text-white hover:bg-accent/60 
  hover:transition-colors hover:delay-150 cursor-pointer`}
    >
      {buttonText}
    </a>
  );
}
