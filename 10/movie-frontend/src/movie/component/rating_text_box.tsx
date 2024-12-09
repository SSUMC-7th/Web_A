import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export function RatingTextBox({ className = "", text = "" }: Props) {
  const newText = typeof text === "number" ? text.toFixed(1) : text;

  return (
    <span
      className={cn(
        className,
        "text-white text-xs font-medium z-10 bg-black bg-opacity-50 px-2 py-1 rounded-md inline-flex items-center"
      )}
    >
      <Star size="0.75rem" className="mr-[0.15rem]" />
      {newText}
    </span>
  );
}

interface Props {
  className?: string;
  text?: string | number;
}
