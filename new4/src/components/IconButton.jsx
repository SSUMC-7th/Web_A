import styled from "styled-components";

const IconButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  width: 4rem;
  height: 2rem;
  font-size: 1rem;
  gap: 10px;
  &:hover {
    filter: brightness(1.5);
  }
  transition: filter 0.3s ease;
`;

export default function IconStyledButton({ text, icon, onClick }) {
  return (
    <IconButton onClick={onClick}>
      {icon}
      {text}
    </IconButton>
  );
}
