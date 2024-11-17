import styled from "styled-components";

const container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const todoForm = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-direction: column;
`;

const todoInput = styled.div`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const todoButton = styled.div`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const todoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 40px;
`;

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
`;

const Text = styled.div`
  display: flex;
  gap: 5px;
`;

const TodoEdit = styled.div`
  display: flex;
  gap: 5px;
`;

const EditInput = styled.input`
  padding: 5px;
  font-size: 16px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  flex-grow: 1; /* 부모 컨테이너 내에서 오른쪽으로 밀림 */
`;

const Button = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  padding: 5px 10px;
  margin-right: 5px;

  &:hover {
    background-color: #d32f2f;
  }
`;

export {
  container,
  todoButton,
  todoInput,
  todoList,
  todoForm,
  TodoEdit,
  Button,
  ButtonBox,
  EditInput,
  Text,
  TodoItem,
};
