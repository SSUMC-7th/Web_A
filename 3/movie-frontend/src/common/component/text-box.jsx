import cn from "classnames";
import { Star } from "@phosphor-icons/react";

export function TextBox({ className = "", text = "" }) {
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

export function RatingTextBox({ className = "", text = "" }) {
  const newText = typeof text === "number" ? text.toFixed(1) : text;

  return (
    <span
      className={cn(
        className,
        "text-white text-xs font-medium z-10 bg-black bg-opacity-50 px-2 py-1 rounded-md inline-flex items-center"
      )}
    >
      <Star size="0.75rem" weight="fill" className="mr-[0.15rem]" />
      {newText}
    </span>
  );
}
