import React from "react"
import Profil from "../components/HomePage/Profil"
import styled from "styled-components"


function Home() {



  return (
    <WrapperHome>
      <Profil/>
    </WrapperHome>
  )
};

const WrapperHome = styled.div`
padding: 0 15px;
`

export default Home