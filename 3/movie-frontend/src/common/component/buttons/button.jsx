import styled from "styled-components";

export default function Button({ text, color, onClick }) {
  return (
    <ButtonStyle color={color} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  color: white;
  width: 4rem;
  height: 2rem;
  font-size: 0.75rem;
  &:hover {
    filter: brightness(1.5);
  }
  transition: filter 0.3s ease;
`;
