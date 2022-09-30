import React from "react";
import Profil from "../components/HomePage/Profil";
import styled from "styled-components";
import Search from "../components/HomePage/Search";
import SlidersOffers from "../components/HomePage/SlidersOffers";
import Categories from "../components/HomePage/Categories";
import BestSelling from "../components/HomePage/BestSelling";
import Navigation from "../components/HomePage/Navigation";

function Home() {
  return (
    <WrapperHome>
      <Profil />
      <Search />
      <SlidersOffers />
      <Categories />
      <BestSelling />
      <Navigation />
    </WrapperHome>
  );
}

const WrapperHome = styled.main`
  padding: 10px 15px;
`;

export default Home;
