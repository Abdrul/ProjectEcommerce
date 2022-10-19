import React, { useState, useEffect, useContext } from "react";
import { UidContext } from "../../components/AppContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { updateEmail, getAuth, updateProfile } from "firebase/auth";

function ProfilSettings({ themeValue, toggleTheme }) {
  const auth = getAuth();

  const uid = useContext(UidContext);
  const [toggleChangePseudo, setToggleChangePseudo] = useState(false);
  const [toggleChangeEmail, setToggleChangeEmail] = useState(false);

  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");

  const handlePseudoSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(auth.currentUser, { displayName: pseudo });
      setToggleChangePseudo(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmail(auth.currentUser, email);
      setToggleChangeEmail(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header>
        <Nav>
          <Link to="/home">
            <img src={"/images/arrowBack.png"} alt="retour en arriere" />
          </Link>
          <h3>Profil</h3>
        </Nav>
      </Header>
      <Main changeTheme={themeValue}>
        <section>
          <div className="container">
            {toggleChangePseudo ? (
              <form onSubmit={handlePseudoSubmit}>
                <input
                  type="text"
                  onChange={(e) => setPseudo(e.target.value)}
                />
                <div className="validate-cancel">
                  <button>Validate</button>
                  <button
                    onClick={() => setToggleChangePseudo(!toggleChangePseudo)}
                  >
                    X
                  </button>
                </div>
              </form>
            ) : (
              <div className="container">
                <p> {uid?.displayName} </p>
                <button
                  onClick={() => setToggleChangePseudo(!toggleChangePseudo)}
                >
                  Change Pseudo
                </button>
              </div>
            )}
          </div>
          <div className="container">
            {toggleChangeEmail ? (
              <form onSubmit={handleEmailSubmit}>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="validate-cancel">
                  <button>Validate</button>
                  <button
                    onClick={() => setToggleChangeEmail(!toggleChangeEmail)}
                  >
                    X
                  </button>
                </div>
              </form>
            ) : (
              <div className="container">
                <p> {uid?.email} </p>
                <button
                  onClick={() => setToggleChangeEmail(!toggleChangeEmail)}
                >
                  Change Email
                </button>
              </div>
            )}
          </div>
        </section>
        <div className="container-btn">
          <button onClick={toggleTheme}>Change Theme</button>
        </div>
      </Main>
    </>
  );
}

const Header = styled.header`
  padding-top: 15px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 70px;
  align-items: center;
  color: ${(props) => props.theme.titleProduct};

  a {
    padding-left: 15px;
    display: inline-flex;
  }
`;

const Main = styled.main`
  padding-top: 150px;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;

      p {
        padding: 15px;
        border-radius: 15px;
        color: ${(props) => props.theme.titleProduct};
        background: ${(props) => props.theme.backgroundCard};
      }

      button {
        border: none;
        padding: 5px 10px;
        border-radius: 15px;
        color: ${(props) => props.theme.titleProduct};
        background: ${(props) => props.theme.backgroundCard};
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        .validate-cancel {
          display: flex;
          gap: 15px;
        }

        input {
          padding: 10px;
          outline: none;
          border: none;
          border-radius: 50px;
          background: ${(props) => props.theme.backgroundCard};
          font-size: 16px;
          font-family: "DM Sans", sans-serif;
          color: ${(props) => props.theme.titleProduct};
        }
      }
    }
  }

  .container-btn {
    padding-top: 50px;

    button {
      display: block;
      margin: 0 auto;
      padding: 15px;
      border-radius: 15px;
      border: none;
      transition: all ease-in-out 0.3s;
      background: ${(props) => (props.changeTheme ? "#0D1F29" : "#fff")};
      color: ${(props) => (props.changeTheme ? "#fff" : "#0D1F29")};
    }
  }
`;

export default ProfilSettings;
