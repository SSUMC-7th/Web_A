import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputCardProps {
  title: string;
  content: string;
  onTitleChange: (newTitle: string) => void;
  onContentChange: (newContent: string) => void;
  onSubmit: () => void;
}
export function InputCard({
  title,
  content,
  onTitleChange,
  onContentChange,
  onSubmit,
}: InputCardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create to-do</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="제목을 입력해주세요."
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="content">Content</Label>
              <Input
                id="content"
                placeholder="내용을 입력해주세요."
                value={content}
                onChange={(e) => onContentChange(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={onSubmit}>Add</Button>
      </CardFooter>
    </Card>
  );
}
