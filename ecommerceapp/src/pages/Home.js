import React from "react";
import Profil from "../components/HomePage/Profil";
import styled from "styled-components";
import Search from "../components/HomePage/Search";
import SlidersOffers from "../components/HomePage/SlidersOffers";
import Categories from "../components/HomePage/Categories";
import BestSelling from "../components/HomePage/BestSelling";
import Navigation from "../components/HomePage/Navigation";

function Home({ theme }) {
  return (
    <>
      <Profil />
      <Search />
      <WrapperHome>
        <SlidersOffers />
        <Categories themeValue={theme} />
        <BestSelling />
        <Navigation />
      </WrapperHome>
    </>
  );
}

const WrapperHome = styled.main`
  padding: 0 15px;
`;

export default Home;
