import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getTodoList, postTodo, patchTodo, deleteTodo } from "./api/todo";
import styled from "styled-components";
import { queryClient } from "./main";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Todo 목록 불러오기
  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodoList,
  });

  // Todo 생성
  const { mutate: createTodo } = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      setTitle("");
      setContent("");
    },
  });

  // Todo 수정
  const { mutate: updateTodo } = useMutation(patchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  // Todo 삭제
  const { mutate: removeTodo } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      createTodo({ title, content });
    }
  };

  return (
    <Wrapper>
      <Header>⚡ UMC ToDoList ⚡</Header>
      <Form onSubmit={handleSubmit}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요"
        />
        <Input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력해주세요"
        />
        <Button type="submit">ToDo 생성</Button>
      </Form>
      {isLoading ? (
        <div>로딩중입니다...</div>
      ) : (
        <TodoList>
          {todos?.map((todo) => (
            <TodoItem key={todo.id}>
              <Checkbox
                type="checkbox"
                checked={todo.checked}
                onChange={() =>
                  updateTodo({ id: todo.id, checked: !todo.checked })
                }
              />
              <TextWrapper>
                <Title>{todo.title}</Title>
                <Content>{todo.content}</Content>
              </TextWrapper>
              <Button onClick={() => updateTodo({ id: todo.id })}>수정</Button>
              <Button onClick={() => removeTodo({ id: todo.id })}>삭제</Button>
            </TodoItem>
          ))}
        </TodoList>
      )}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 500px;
  margin: 50px auto;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const TextWrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.p`
  font-weight: bold;
  margin: 0;
`;

const Content = styled.p`
  margin: 0;
`;
