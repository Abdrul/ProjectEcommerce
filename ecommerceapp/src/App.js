import HomePage from "./pages/Intro";
import Registration from "./pages/Registration";
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import Home from "./pages/Home";
import { UidContext } from "./components/AppContext";
import FruitsPage from "./pages/FruitsPage";
import VegetablesPage from "./pages/VegetablesPage";
import Cart from "./pages/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import AllProductsPage from "./pages/AllProductsPage";

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className="App">
      <GlobalStyle />

      <UidContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/allProducts" element={<AllProductsPage />} />
          <Route path="/fruits" element={<FruitsPage />} />
          <Route path="/vegetables" element={<VegetablesPage />} />
          <Route path="/fruits/:id" element={<ProductDetails />} />
          <Route path="/vegetables/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </UidContext.Provider>
    </div>
  );
}

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
  --title-section: #06161C;
}
`;

export default App;
