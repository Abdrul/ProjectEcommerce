import React, { useContext, useEffect } from 'react'
import {UidContext} from '../components/AppContext'
import axios from "axios";

function Home() {

  const uid = useContext(UidContext);
  // console.log(uid.email);

  useEffect(() => {

    const test = async () => {
      const response = await axios.get("http://localhost:3000/items");
    };

    test();
  }, [])

  return (
    <div>Salut </div>
  )
}

export default Home