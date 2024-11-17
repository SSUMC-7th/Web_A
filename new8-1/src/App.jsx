import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Input from "./Input";
import { useQuery } from "@tanstack/react-query";
import { getTodoList } from "./api/todo";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { data: todos, isPending } = useQuery({
    queryFn: () => getTodoList({ title }),
    queryKey: ["todos", title],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="todo-app">
        <form onSubmit={handleSubmit} className="todo-form">
          <Input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="todo-input"
            placeholder="제목을 입력하세요"
          />
          <Input
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="todo-input"
            placeholder="내용을 입력하세요"
          />
          <Button type="submit">할 일 등록</Button>
        </form>
      </div>
      {isPending ? (
        <div>로딩중입니다.</div>
      ) : (
        todos[0].map((todo) => {
          return (
            <div key={todo.id} className="todo-list">
              <p>{todo.title}</p>
              <p>{todo.content}</p>
            </div>
          );
        })
      )}
    </>
    /* <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {editingId !== todo.id ? (
              <div className="todo-text">
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            ) : (
              <div className="todo-edit">
                <p>{todo.id}.</p>
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
              </div>
            )}
            <div className="button-box">
              <Button
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
              >
                삭제하기
              </Button>
              {editingId === todo.id ? (
                <Button
                  onClick={() => updateTodo(editingId, editText)}
                  className="update-button"
                >
                  수정 완료
                </Button>
              ) : (
                <Button
                  onClick={() => setEditingId(todo.id)}
                  className="edit-button"
                >
                  수정 진행
                </Button>
              )}
            </div>
          </div>
        ))}
      </div> */
  );
}

export default App;
