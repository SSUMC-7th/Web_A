import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { formatDate } from "../util/formatDate";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo } from "../api/get/getTodo";

export function ToDoCard({ className = "", todo }: ToDoCardProps) {
  const [isEdit, setEditMode] = useState(false);

  const handleEditMode = (newEdit: boolean) => {
    setEditMode(newEdit);
  };

  return (
    <Card className={cn(className, "w-[350px] relative")}>
      <CardHeader>
        <CardTitle>게시일 : {formatDate(todo.createdAt)}</CardTitle>
        <CardDescription>
          최근 수정일 : {formatDate(todo.updatedAt)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          {isEdit && (
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Title</Label>
                <Input
                  id="name"
                  value={todo.title}
                  onChange={(e) => onTitleChange(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Content</Label>
                <Input
                  id="name"
                  value={todo.title}
                  onChange={(e) => onContentChange(e.target.value)}
                />
              </div>
            </div>
          )}
          {!isEdit && (
            <div className="grid w-full items-center gap-4 font-semibold">
              <div className="flex flex-col space-y-1.5">
                <Label>Title</Label>
                <p>{todo.title}</p>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Content</Label>
                <p>{todo.content}</p>
              </div>
            </div>
          )}
        </form>
      </CardContent>
      {isEdit && (
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => handleEditMode(!isEdit)}>
            Cancel
          </Button>
          <Button onClick={() => handleEdit}>Complete</Button>
        </CardFooter>
      )}
      {!isEdit && (
        <CardFooter className="flex justify-between">
          <Button variant="outline">Delete</Button>
          <Button onClick={() => handleEditMode(!isEdit)}>Edit</Button>
        </CardFooter>
      )}
      <Checkbox
        id="checked"
        className="absolute top-[1rem] right-[1rem]"
        checked={todo.checked}
        disabled={!isEdit}
      />
    </Card>
  );
}

interface ToDoCardProps {
  className?: string;
  todo: Todo;
}
