import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function TitleSection({
  title,
  handleTitle,
  checked,
  handleChecked,
}: TitleSectionProps) {
  return (
    <section className="flex flex-row items-center">
      <Input
        id="title"
        value={title}
        onChange={(e) => handleTitle(e.target.value)}
        className="w-[30rem] mr-[1rem]"
      />
      <Checkbox
        className="borer-gray-500"
        checked={checked}
        onCheckedChange={(checkedValue) => handleChecked(Boolean(checkedValue))}
      />
    </section>
  );
}

interface TitleSectionProps {
  title: string;
  handleTitle: (value: string) => void;
  checked: boolean;
  handleChecked: (value: boolean) => void;
}
