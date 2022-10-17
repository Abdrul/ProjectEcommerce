import HomePage from "./pages/Intro";
import Registration from "./pages/Registration";
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import Home from "./pages/Home";
import { UidContext } from "./components/AppContext";
import Cart from "./pages/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import AllProductsPage from "./pages/AllProductsPage";
import PagesCategories from "./components/PagesCategories";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const [theme, setTheme] = useState(true);

  const themeOne = {
    main: "mediumseagreen",
    body: "blue",
  };
  const themeTwo = {
    main: "violet",
    body: "red",
  };

  const onToggle = () => {
    setTheme(!theme);
  };

  return (
    <UidContext.Provider value={user}>
      <ThemeProvider theme={theme ? themeOne : themeTwo}>
        <div className="App">
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={<Registration onToggle2={onToggle} />}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/allProducts" element={<AllProductsPage />} />
            <Route path="/:categorie" element={<PagesCategories />} />
            <Route path="/fruits/:id" element={<ProductDetails />} />
            <Route path="/vegetables/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </ThemeProvider>
    </UidContext.Provider>
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
