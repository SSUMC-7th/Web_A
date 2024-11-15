import React from "react";
import { cn } from "../../common/utils/cn";

export default function PageButton({ className = "", children, ...props }) {
  return (
    <button
      {...props}
      className={cn(
        className,
        "hover:bg-white hover:bg-opacity-10 min-h-full w-[4rem] flex items-center justify-center"
      )}
    >
      {children}
    </button>
  );
}
