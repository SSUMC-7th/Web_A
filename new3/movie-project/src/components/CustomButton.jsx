import styled from "styled-components";

const CustomButton = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 0.5rem;
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

export default function StyledButton({ text, color, onClick }) {
  return (
    <CustomButton color={color} onClick={onClick}>
      {text}
    </CustomButton>
  );
}
