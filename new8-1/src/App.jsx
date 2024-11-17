import { useState } from "react";
import "./App.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getTodoList, postTodo, deleteTodo, patchTodo } from "./api/todo";
import styled from "styled-components";
import { queryClient } from "./main";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);

  const { data: todos, isPending } = useQuery({
    queryFn: () => getTodoList({ title: search }),
    queryKey: ["todos", search],
  });

  const { mutate: postTodoMutation } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: patchTodoMutation } = useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: deleteTodoMutation } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제목:", title, "내용:", content);
    postTodoMutation({ title, content });
  };

  return (
    <>
      <h1>투두 검색</h1>
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      <Form onSubmit={handleSubmit}>
        <Input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <Input
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
        />
        <Button onClick={handleSubmit}>할 일 등록</Button>
      </Form>
      {isPending ? (
        <div>로딩중입니다.</div>
      ) : (
        <Container>
          {todos[0]?.map((todo) => {
            return (
              <TodoContainer key={todo.id}>
                <input
                  type="checkbox"
                  defaultChecked={todo.checked}
                  onChange={(e) =>
                    patchTodoMutation({ id: todo.id, checked: !todo.checked })
                  }
                />
                <div>
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                </div>
                <Button onClick={() => deleteTodoMutation({ id: todo.id })}>
                  삭제하기
                </Button>
              </TodoContainer>
            );
          })}
        </Container>
      )}
    </>
  );
}

export default App;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid purple;
  border-radius: 20px;
`;

const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TodoContainer = styled.div`
  display: flex;
  gap: 20px;
`;
