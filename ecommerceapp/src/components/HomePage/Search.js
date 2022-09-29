import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

function Search() {
  return (
    <WrapperSearch>
      <input type="text" placeholder="Search category" />
    </WrapperSearch>
  );
}

const WrapperSearch = styled.div`
  margin-top: 25px;
  text-align: center;
  input {
    font-family: "DM Sans", sans-serif;
    width: 100%;
    border: none;
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 16px;
    color: var(--title-section);
    &::placeholder {
      color: var(--description);
    }
  }
`;

export default Search;

// const handleChange = async (e) => {
//     try {
//         e.preventDefault();
//         const baseURL = "http://localhost:8080";
//         const user = JSON.parse(localStorage.getItem('user'));
//         const accessToken = localStorage.getItem('token');
//         let formData = new FormData();
//             formData.append('name', name);
//             formData.append('email', email);
//             formData.append('first_name', first_name);
//             formData.append('password', password);
//             formData.append('userId', user.id);
//         let axiosConfig = {
//             headers: {
//                 'x-access-token': accessToken
//             }
//         };
//         let changeInfos = await axios.put(`${baseURL}/api/user/changeInfos`, {
//             headers: {
//                 'x-access-token': accessToken
//             },
//             body: formData

//         }, axiosConfig);
//     } catch (err) {
//         console.log(err);
//     }
// }
