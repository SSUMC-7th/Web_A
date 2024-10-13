import styled from "styled-components";

export default function IconButton({ text, icon, onClick }) {
  return (
    <ButtonStyle onClick={onClick}>
      {icon}
      {text}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  width: 100%;
  height: 2.5rem;
  border: 0;
  background-color: #141517;
  display: flex;
  align-items: center;
  justify-content: start;
  color: white;
  padding-left: 1rem;
  font-weight: 500;
  gap: 0.5rem;
  cursor: pointer;
  &:hover {
    filter: brightness(1.5);
  }
  transition: filter 0.3s ease;
`;
