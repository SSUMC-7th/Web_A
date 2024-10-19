import styled from "styled-components";
import Button from "../component/buttons/button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Container className="min-h-[3.5rem]">
      <Logo
        onClick={() => {
          navigate(`/`);
        }}
      >
        RAILGUN
      </Logo>
      <div>
        <Button
          text="로그인"
          color="#141517"
          onClick={() => {
            navigate(`/login`);
          }}
        />
        <SizedBox />
        <Button
          text="회원가입"
          color="#F82E62"
          onClick={() => {
            navigate(`/register`);
          }}
        />
        <SizedBox />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #141517;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.button`
  height: 100%;
  margin-left: 0.75rem;
  border: 0;
  background-color: transparent;
  color: #e20e50;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
`;

const SizedBox = styled.span`
  width: 1rem;
  display: inline-block;
`;
