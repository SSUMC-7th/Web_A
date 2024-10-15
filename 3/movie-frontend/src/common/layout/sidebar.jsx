import styled from "styled-components";
import IconButton from "../component/icon-button";
import { MagnifyingGlass, FilmSlate } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Container>
      <IconButton
        icon={<MagnifyingGlass size={16} />}
        text="찾기"
        onClick={() => {
          navigate(`/search`);
        }}
      />
      <IconButton
        icon={<FilmSlate size={16} weight="fill" />}
        text="영화"
        onClick={() => {
          navigate(`/movie`);
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 10vw;
  background-color: #141517;
`;
