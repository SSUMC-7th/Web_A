import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import IconStyledButton from "./IconButton";
import { FaSearch } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";

const SideBarContainer = styled.div`
  background-color: #1a1a1a;
  padding: 1rem;
  width: 200px;
  height: flex;
  display: flex;
  flex-direction: column; /* 컨텐츠 세로 정렬 */
  align-items: center; /* 아이템을 중앙 정렬 */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  gap: 20px; /* 버튼 사이 간격 */
  width: 100%; /* 버튼이 사이드바 너비에 맞게 확장됨 */
`;

function SideBar() {
  const navigate = useNavigate();

  return (
    <SideBarContainer>
      <ButtonContainer>
        <IconStyledButton
          icon={<FaSearch size={16} />}
          text="찾기"
          onClick={() => {
            navigate("/search");
          }}
        />
        <IconStyledButton
          text="영화"
          icon={<BiSolidCameraMovie size={16.3} />}
          onClick={() => {
            navigate("/category");
          }}
        />
      </ButtonContainer>
    </SideBarContainer>
  );
}

export default SideBar;
