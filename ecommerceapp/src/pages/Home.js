import React, { useContext, useEffect, useState } from 'react'
import {UidContext} from '../components/AppContext'
import axios from "axios";
import {signOut} from "firebase/auth"
import {auth} from "../utils/firebase.config"
import {useNavigate} from "react-router-dom"


function Home() {
  const navigate = useNavigate();
  const uid = useContext(UidContext);
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {

    const fetchGet = async () => {
      const response = await axios.get("http://localhost:3000/fruits");
      const data = response.data;
      setDataApi(data);
    };

    fetchGet();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login')
  };

  return (
    <div>
      <p>{uid?.displayName}</p>
      <img src={'/images/logout.png'} alt="" onClick={handleLogout}/>
    </div>
  )
};

export default Home