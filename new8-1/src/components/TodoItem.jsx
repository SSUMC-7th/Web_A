// import PropTypes from "prop-types";
// import React from "react";
// import styled from "styled-components";

// const TodoItem = ({ todo, onToggle, onDelete }) => {
//   return (
//     <TodoContainer>
//       <input
//         type="checkbox"
//         defaultChecked={todo.checked}
//         onChange={() => onToggle(todo.id, !todo.checked)}
//       />
//       <div>
//         <p>{todo.title}</p>
//         <p>{todo.content}</p>
//       </div>
//       <Button onClick={() => onDelete(todo.id)}>삭제하기</Button>
//     </TodoContainer>
//   );
// };

// // PropTypes 추가
// TodoItem.propTypes = {
//   todo: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     checked: PropTypes.bool.isRequired,
//   }).isRequired,
//   onToggle: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// export default TodoItem;

// const TodoContainer = styled.div`
//   display: flex;
//   gap: 20px;
// `;

// const Button = styled.button`
//   border-radius: 10px;
//   border: none;
//   padding: 10px;
// `;
