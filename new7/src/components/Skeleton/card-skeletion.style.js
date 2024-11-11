import styled, { keyframes } from "styled-components";

export const Skeleton = keyframes`
  0% {
    opacity: 1;
  }
  30% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
  } 
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 152px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const CardMain = styled.div`
  width: 150px;
  height: 220px;
  background: rgb(230, 230, 230);
  border-radius: 5px;
  animation: ${Skeleton} 1.5s infinite ease-in-out;
`;

export const TextWrapper = styled.div`
  width: 140px;
  height: 30px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 5px;
`;

export const TitleBox = styled.div`
  height: 14px;
  background: rgb(230, 230, 230);
  border-radius: 5px;
  animation: ${Skeleton} 1.5s infinite ease-in-out;
`;

export const DescriptionBox = styled.div`
  height: 10px;
  background: rgb(230, 230, 230);
  border-radius: 5px;
  animation: ${Skeleton} 1.5s infinite ease-in-out;
`;
