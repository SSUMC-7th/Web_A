import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeaderButton({ className, ...props }: Props) {
  return (
    <Button
      className={cn(
        "px-[2rem] py-[2rem] bg-gray-900 hover:bg-gray-700 rounded-none",
        className
      )}
      {...props}
    ></Button>
  );
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}
