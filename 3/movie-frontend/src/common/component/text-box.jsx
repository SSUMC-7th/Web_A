import cn from "classnames";

export default function TextBox({ className = "", text = "" }) {
  return (
    <div
      className={cn(
        className,
        "text-white text-xs font-medium z-10 bg-black bg-opacity-50 px-2 py-1 rounded-md"
      )}
    >
      {text}
    </div>
  );
}
