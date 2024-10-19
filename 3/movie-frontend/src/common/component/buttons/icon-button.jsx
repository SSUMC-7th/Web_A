import { cn } from "../../utils/cn";

export default function IconButton({ className = "", text, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        className,
        "h-10 border-0 flex items-center justify-start text-white pl-[0.5rem] font-medium cursor-pointer hover:brightness-50 transition-filter duration-300 ease-in-out"
      )}
    >
      {icon}
      <p className="ml-[0.5rem] max-lg:hidden font-semibold">{text}</p>
    </button>
  );
}
