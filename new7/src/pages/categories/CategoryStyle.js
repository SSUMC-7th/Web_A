import styled from "styled-components";

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const MovieCard = styled.div`
  width: 150px;
  height: auto;
  cursor: pointer;
  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 5px;
    transition: filter 0.3s ease;
    &:hover {
      filter: brightness(0.8);
    }
  }
  .title {
    font-weight: bold;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
  .releaseDate {
    font-size: 0.7rem;
  }
`;

export { MovieList, MovieCard };
