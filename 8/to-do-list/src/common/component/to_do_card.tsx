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
import { Todo } from "../api/get/get_todo";
import { useTodoSection } from "../view/board/hook/useTodoSection";

export function ToDoCard({ className = "", todo, onClick }: ToDoCardProps) {
  const [isEdit, setEditMode] = useState(false);

  const handleEditMode = (newEdit: boolean) => {
    setEditMode(newEdit);
  };

  const {
    title,
    content,
    checked,
    handleTitle,
    handleContent,
    handleChecked,
    handleSubmit,
    handleDelTodo,
  } = useTodoSection({ todo });

  return (
    <Card
      className={cn(className, "w-[350px] relative cursor-pointer")}
      onClick={isEdit ? undefined : onClick}
    >
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
                  value={title}
                  onChange={(e) => handleTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Content</Label>
                <Input
                  id="name"
                  value={content}
                  onChange={(e) => handleContent(e.target.value)}
                />
              </div>
            </div>
          )}
          {!isEdit && (
            <div className="grid w-full items-center gap-4 font-semibold">
              <div className="flex flex-col space-y-1.5">
                <Label>Title</Label>
                <p>{title}</p>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Content</Label>
                <p>{content}</p>
              </div>
            </div>
          )}
        </form>
      </CardContent>
      {isEdit && (
        <CardFooter className="flex justify-between z-10">
          <Button
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              handleEditMode(!isEdit);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleSubmit();
              handleEditMode(!isEdit);
            }}
          >
            Complete
          </Button>
        </CardFooter>
      )}
      {!isEdit && (
        <CardFooter className="flex justify-between z-10">
          <Button
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              handleDelTodo();
            }}
          >
            Delete
          </Button>
          <Button
            onClick={(e) => {
              handleEditMode(!isEdit);
              e.stopPropagation();
            }}
          >
            Edit
          </Button>
        </CardFooter>
      )}
      <Checkbox
        id="checked"
        className="absolute top-[1rem] right-[1rem]"
        checked={checked}
        onCheckedChange={(checkedValue) => handleChecked(Boolean(checkedValue))}
        disabled={!isEdit}
      />
    </Card>
  );
}

interface ToDoCardProps {
  className?: string;
  todo: Todo;
  onClick: VoidFunction;
}
