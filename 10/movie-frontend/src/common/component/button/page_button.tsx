import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

export default function PageButton({
  className = "",
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
        className,
        "hover:bg-white hover:bg-opacity-10 min-h-full w-[4rem] flex items-center justify-center pb-[1rem]"
      )}
    >
      {children}
    </button>
  );
}

// Props 타입 정의
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}
