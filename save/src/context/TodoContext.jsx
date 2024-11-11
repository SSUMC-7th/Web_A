import { createContext } from "react";
import { useState } from "react";

export const TodoContext = createContext();

//우산 만듦
export function TodoContextProvider({ children }) {
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
    setTodos((prev) => {
      const newId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
      return [...prev, { id: newId, task: text }];
    });
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
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        text,
        setText,
        editingId,
        setEditingId,
        editText,
        setEditText,
        handleSubmit,
        addTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
