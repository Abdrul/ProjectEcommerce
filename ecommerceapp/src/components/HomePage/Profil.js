import React, {useContext, useState, useEffect} from 'react'
import {UidContext} from '../../components/AppContext'
import axios from "axios";
import {signOut} from "firebase/auth"
import { auth } from '../../utils/firebase.config';
import {useNavigate} from "react-router-dom"
import styled from "styled-components";

function Profil() {
const navigate = useNavigate();
const uid = useContext(UidContext);
// const [dataApi, setDataApi] = useState([]);

// useEffect(() => {
//     const fetchGet = async () => {
//         const response = await axios.get("http://localhost:3000/fruits");
//         const data = response.data;
//         setDataApi(data);
//     };

//     fetchGet();
// }, []);

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login')
    };

    // <span>👋</span>
    // <p>{uid?.displayName}</p>
    // <img src={'/images/logout.png'} alt="" onClick={handleLogout}/>

    
    return (
        <Header>
            <div className='wrapper-name'>
                <span className='emoji'>👋</span>
                <span className='welcome-text'>Good morning</span>
                <p>{uid?.displayName}</p>
            </div>
            <WrapperImgs>
                <div>
                    <img src={"/images/profil.png"} alt="" className='profil-icon' />
                </div>
                <div>
                    <img src={'/images/logout.png'} alt="" onClick={handleLogout} className='logout-icon' />
                </div>
            </WrapperImgs>
        </Header>
    )
}

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;

        .wrapper-name {
            display: grid;
            grid-template-areas: 
            "emoji welcome"
            "emoji name"
            ;
            
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
            }
        }
`

const WrapperImgs = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 15px;

    .profil-icon {
        width: 30px;
    }

    .logout-icon {
        width: 26px;
    }
`

export default Profil