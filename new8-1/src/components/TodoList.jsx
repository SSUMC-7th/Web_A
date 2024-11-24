import React from "react";
import styled from "styled-components";

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <Container>
      {todos.map((todo) => (
        <TodoContainer key={todo.id}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => onToggle(todo)}
          />
          <div>
            <p>{todo.title}</p>
            <p>{todo.content}</p>
          </div>
          <Button onClick={() => onDelete(todo)}>삭제하기</Button>
        </TodoContainer>
      ))}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TodoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 20px;
`;
