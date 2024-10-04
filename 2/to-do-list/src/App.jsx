import { useState } from "react";
import "./App.css";
import CustomButton from "./components/custom_button";
import CustomTextField from "./components/custom_textfield";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "용민 세종 여진 덕환 수민" },
  ]);

  const [text, setText] = useState("");

  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  // 1. 추가하기
  // 2. 삭제하기
  // 3. 수정하기 (핵심)

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    const time = new Date();
    setTodos((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 100) + time.getMilliseconds(),
        task: text,
      },
    ]);
    setText("");
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId("");
    setEditText("");
  };

  return (
    <div className="Body">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <CustomTextField value={text} setText={setText} />
        <CustomButton
          className="AddButton"
          text={"Add To Do"}
          callback={addTodo}
        />
      </form>
      <div>
        {todos.map((todo, _) => (
          <div className="ToDoList" key={todo.id}>
            <div className="ToDoText" key={todo.id}>
              <p>{todo.id}.</p>
              {editingId === todo.id ? (
                <CustomTextField
                  className="EditTextfield"
                  defaultValue={todo.task}
                  setText={setEditText}
                />
              ) : (
                <p>{todo.task}</p>
              )}
            </div>
            <CustomButton
              className="DeleteButton"
              text={"Delete"}
              callback={() => deleteTodo(todo.id)}
            ></CustomButton>
            <CustomButton
              className={
                editingId === todo.id ? "EditCompleteButton" : "EditButton"
              }
              text={editingId === todo.id ? "Complete" : "Edit"}
              callback={
                editingId === todo.id
                  ? () => updateTodo(editingId, editText)
                  : () => setEditingId(todo.id)
              }
            ></CustomButton>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
