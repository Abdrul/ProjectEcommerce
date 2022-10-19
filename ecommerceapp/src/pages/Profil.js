import React from "react";
import ProfilSettings from "../components/ProfilPage/ProfilSettings";

function Profil({ theme, toggleTheme }) {
  return (
    <div>
      <ProfilSettings themeValue={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default Profil;
