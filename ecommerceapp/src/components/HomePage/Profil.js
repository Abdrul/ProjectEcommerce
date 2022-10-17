import React, { useContext } from "react";
import { UidContext } from "../../components/AppContext";
import styled from "styled-components";

function Profil() {
  const uid = useContext(UidContext);
  console.log(uid);

  return (
    <Header>
      <div className="wrapper-name">
        <span className="emoji">👋</span>
        <span className="welcome-text">Good morning</span>
        <p>{uid?.displayName}</p>
      </div>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  padding: 10px 15px;
  background: var(--light-background);

  .wrapper-name {
    display: grid;
    grid-template-areas:
      "emoji welcome"
      "emoji name";

    .emoji {
      grid-area: emoji;
      align-self: center;
      padding-right: 15px;
    }

    .welcome-text {
      grid-area: welcome;
      color: var(--description);
      font-size: 14px;
    }

    p {
      grid-area: name;
      font-size: 18px;
      padding-top: 5px;
      color: var(--title-section);
    }
  }
`;

// const WrapperImgs = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 15px;

//   .profil-icon {
//     width: 30px;
//   }

//   .logout-icon {
//     width: 26px;
//   }
// `;

export default Profil;
