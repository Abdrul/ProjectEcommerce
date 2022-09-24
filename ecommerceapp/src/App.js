import './App.css';
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
}

`


function App() {
  return (
    <div className="App">
      {/* <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Registration/>}/>


      </Routes> */}

    </div>
  );
}

export default App;
