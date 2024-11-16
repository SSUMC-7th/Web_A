import { HTMLAttributes, memo } from "react";

interface SizedBoxProps extends HTMLAttributes<HTMLDivElement> {
  direction: "horizontal" | "vertical";
  size: string;
}

export const SizedBox = memo(function SizedBox({
  direction = "vertical",
  size,
  ...props
}: SizedBoxProps) {
  return (
    <div
      style={
        direction === "horizontal"
          ? { width: `${size}` }
          : { height: `${size}` }
      }
      className=""
      {...props}
    />
  );
});
