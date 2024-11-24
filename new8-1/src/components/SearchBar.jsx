import React from "react";
import styled from "styled-components";

const SearchBar = ({ value, onChange }) => {
  return <Input value={value} onChange={onChange} placeholder="검색어 입력" />;
};

export default SearchBar;

const Input = styled.input`
  padding: 10px;
  border: 1px solid purple;
  border-radius: 20px;
`;
