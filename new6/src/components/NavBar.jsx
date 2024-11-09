import StyledButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { setToken } from "../redux/reducers/AuthReducer";
import { jwtUtils } from "../utils/jwtUtils";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../apis/axios-instance";

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1a1a1a;
  padding: 10px 20px;
  color: #fff;
  display: flex;
  justify-content: space-between; /* Distribute items to both ends */
  align-items: center;
`;

const RightNav = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  color: #ea3a66;
  font-weight: bold;
  text-decoration: none;
  font-size: 24px;
`;

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.Auth.token);
  const [isAuth, setIsAuth] = useState(false);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    if (jwtUtils.isAuth(token)) {
      setIsAuth(true);

      getUser(token)
        .then((userInfo) => {
          if (userInfo && userInfo.email) {
            const email = userInfo.email;
            const nickname = email.split("@")[0]; // 이메일 앞 부분 추출
            setNickname(nickname);
            console.log("User nickname:", nickname);
          } else {
            console.warn("유저 정보가 올바르지 않습니다.", userInfo);
          }
        })
        .catch((error) => {
          console.error("유저 정보 가져오기 실패:", error);
        });
    } else {
      setIsAuth(false);
    }
  }, [token]);
  // 비동기로 처리!
  const logout = async () => {
    await dispatch(setToken(""));
    console.log("로그아웃 되었습니다");
    navigate("/");
  };

  return (
    <NavBarContainer>
      <StyledLink to={"/"}>YONGCHA</StyledLink>
      {isAuth ? (
        <RightNav>
          <span>{nickname}님 반갑습니다</span>
          <StyledButton text="로그아웃" color="#1b1a1a" onClick={logout} />
        </RightNav>
      ) : (
        <RightNav>
          <StyledButton
            text="로그인"
            color="#1b1a1a"
            onClick={() => {
              navigate("/auth/login");
            }}
          />
          <StyledButton
            text="회원가입"
            color="#ea3a66"
            onClick={() => {
              navigate("/auth/register");
            }}
          />
        </RightNav>
      )}
    </NavBarContainer>
  );
}

export default NavBar;
