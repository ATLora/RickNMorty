import styled from "styled-components";
import React from "react";
import { useState } from "react";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const SearchInput = styled.input`
  //display: flex;
  border: 1px solid #1c9931b5;
  margin-left: 10px;
`;

const SearchButton = styled.button`
  //display: flex;
  align-items: center;
  color: #1c9931b5;
  border: 1px solid #1c9931b5;
  font-weight: 550;
`;

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
    console.log(event.target.value);
  };

  return (
    <SearchDiv>
      <SearchInput type="search" value={id} onChange={handleChange} />
      <SearchButton onClick={() => onSearch(id)}>Agregar</SearchButton>
    </SearchDiv>
  );
}
