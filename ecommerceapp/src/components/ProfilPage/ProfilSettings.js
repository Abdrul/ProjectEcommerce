import React, { useState, useEffect, useContext } from "react";
import { UidContext } from "../../components/AppContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { updateEmail, getAuth, updateProfile } from "firebase/auth";

function ProfilSettings({ themeValue, toggleTheme }) {
  const auth = getAuth();

  const onToggle = () => {
    toggleTheme();
  };

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 22"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg>
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
        <div className="toggle">
          <label className="toggle-switch">
            <input type="checkbox" checked={themeValue} onChange={onToggle} />
            <span className="switch"></span>
          </label>
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
  gap: 95px;
  align-items: center;
  color: ${(props) => props.theme.titleProduct};

  a {
    padding-left: 15px;
    display: inline-flex;
  }

  svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.titleProduct};
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

  .toggle {
    text-align: center;
    padding-top: 50px;

    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 25px;
      margin: 0 12px;

      input[type="checkbox"] {
        display: none;
      }

      .switch {
        position: absolute;
        cursor: pointer;
        background-color: var(--background);
        border-radius: 25px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: background-color 0.2s ease;

        &::before {
          position: absolute;
          content: "";
          left: 2px;
          top: 2px;
          width: 21px;
          height: 21px;
          background-color: #fff;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }
      }

      input[type="checkbox"]:checked + .switch::before {
        transform: translateX(25px);
        background-color: var(--background);
      }

      input[type="checkbox"]:checked + .switch {
        background-color: var(--title-section);
      }
    }
  }
`;

export default ProfilSettings;
