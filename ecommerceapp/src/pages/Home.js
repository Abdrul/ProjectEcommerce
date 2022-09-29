import React from "react";
import Profil from "../components/HomePage/Profil";
import styled from "styled-components";
import Search from "../components/HomePage/Search";
import SlidersOffers from "../components/HomePage/SlidersOffers";

function Home() {
  return (
    <WrapperHome>
      <Profil />
      <Search />
      <SlidersOffers />
    </WrapperHome>
  );
}

const WrapperHome = styled.div`
  padding: 0 15px;
`;

export default Home;
