import React, { useState, useEffect, useContext } from "react";
import { UidContext } from "../../components/AppContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { updateEmail, getAuth } from "firebase/auth";

function ProfilSettings() {
  const auth = getAuth();

  const uid = useContext(UidContext);
  const [toggleChangePseudo, setToggleChangePseudo] = useState(false);
  const [toggleChangeEmail, setToggleChangeEmail] = useState(false);

  // const [email, setEmail] = useState("");

  // const test = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await updateEmail(auth.currentUser, email);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const test = (e) => {
    e.preventDefault();
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
      <Main>
        <section>
          <div className="container">
            {toggleChangePseudo ? (
              <form onSubmit={test}>
                <input type="text" />
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
              <form onSubmit={test}>
                <input type="text" />
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
                  Change Pseudo
                </button>
              </div>
            )}
          </div>
        </section>
        <div className="container-btn">
          <button>Change Theme</button>
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
    }
  }
`;

export default ProfilSettings;
