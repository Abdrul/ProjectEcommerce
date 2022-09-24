import './App.css';
import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import {Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Registration/>}/>


      </Routes>

    </div>
  );
}

export default App;
