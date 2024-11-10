import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;

  input {
    flex: 1;
    padding: 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    border: 1px solid rgb(220, 220, 220);
  }

  button {
    width: 80px;
    background-color: #f82e62;
    color: white;
    cursor: pointer;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
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

const MovieGridContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
`;

const Card = styled.div`
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

export { SearchContainer, MovieGridContainer, Card };
