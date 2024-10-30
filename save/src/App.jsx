import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Input from "./Input";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "희연 혜원 혜윤 건 찬민" },
  ]);

  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId("");
  };

  return (
    <div className="todo-app">
      <form onSubmit={handleSubmit} className="todo-form">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="todo-input"
          placeholder="할 일을 입력하세요"
        />
        <Button onClick={addTodo} className="todo-button">
          할 일 등록
        </Button>
      </form>
      <div className="todo-list">
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
        ))}
      </div>
    </div>
  );
}

export default App;
