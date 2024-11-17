import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./search.style";
import { useState } from "react";
import { useCustomFetch } from "../../hooks/useCustomFetch";
import SearchMovieList from "../../components/Movie/search-movie-list";

const baseURL = "https://image.tmdb.org/t/p/original";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const navigate = useNavigate();

  const [searchParam, setSearchParam] = useSearchParams({
    mq: "",
  });

  const mq = searchParam.get("mq");

  const handleSearchMovie = () => {
    if (mq == searchValue) return;
    navigate(`/search?mq=${searchValue}`);
  };

  const handleSearchMovieWithKeyboard = (e) => {
    if (e.key === "Enter") {
      handleSearchMovie();
    }
  };

  return (
    <>
      <S.SearchContainer>
        <input
          placeholder="영화 제목을 입력해주세요~.~"
          value={searchValue}
          onChange={onChangeSearchValue}
          onKeyDown={handleSearchMovieWithKeyboard}
        />
        <button onClick={handleSearchMovie}>검색</button>
      </S.SearchContainer>
      <SearchMovieList />
    </>
  );
};

export default Search;
