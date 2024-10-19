import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cn } from "../../common/utils/cn";

export default function PostCard({
  className = "",
  onClick = () => {},
  imgUrl,
  title,
  subTitle,
  width = "6rem",
  height = "9rem",
}) {
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        className,
        "flex-col m-[0.5rem] items-start justify-start text-white"
      )}
      onClick={onClick}
    >
      <CardImage
        src={
          imgUrl
            ? `https://image.tmdb.org/t/p/original${imgUrl}`
            : `https://picsum.photos/id/222/1800/1200`
        }
        width={width}
        height={height}
      />
      <Title>{title}</Title>
      <Date>{subTitle}</Date>
    </div>
  );
}

const CardImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 0.3rem;
  margin: 0;
  object-fit: cover;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.7);
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-size: 0.6rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 6rem;
  display: inline-block;
`;

const Date = styled.div`
  font-size: 0.5rem;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 6rem;
`;
