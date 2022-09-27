import React, { useContext } from 'react'
import {UidContext} from '../components/AppContext'

function Home() {

  const uid = useContext(UidContext);
  console.log(uid.email);

  return (
    <div> {uid.email} </div>
  )
}

export default Home