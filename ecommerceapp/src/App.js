import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import {Routes, Route, Link} from "react-router-dom"
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  height: 100vh;
  width: 100vw;
  font-family: 'DM Sans', sans-serif;
}

:root{
  --background: #23AA49;
  --price: #FF324B;
  --light-background: #F3F5F7;
  --title-product: #1B1C1E;
  --description: #979899;
}
`


function App() {
  return (
    <div className="App">

      <GlobalStyle/>

      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Registration/>}/>


      </Routes>


    </div>
  );
}

export default App;
