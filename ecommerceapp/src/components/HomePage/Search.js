import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

function Search() {
  return (
    <WrapperSearch>
      <input type="text" placeholder="Search category" />
    </WrapperSearch>
  );
}

const WrapperSearch = styled.section`
  padding: 10px 15px 30px;
  background: ${(props) => props.theme.body};
  border-radius: 0% 0% 50% 50% / 0% 0% 15% 15%;
  text-align: center;
  input {
    font-family: "DM Sans", sans-serif;
    width: 100%;
    border: none;
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 16px;
    background: ${(props) => props.theme.backgroundCard};
    color: var(--title-section);
    &::placeholder {
      color: var(--description);
    }
  }
`;

export default Search;
