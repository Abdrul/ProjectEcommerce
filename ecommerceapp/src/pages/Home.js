import React from "react"
import Profil from "../components/HomePage/Profil"
import styled from "styled-components"
import Search from "../components/HomePage/Search"


function Home() {



  return (
    <WrapperHome>
      <Profil/>
      <Search/>
    </WrapperHome>
  )
};

const WrapperHome = styled.div`
padding: 0 15px;
`

export default Home