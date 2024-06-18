import React from 'react'
import * as Realm from "realm-web";
import { useNavigate } from 'react-router-dom';
const app = new Realm.App({ id: process.env.REACT_APP_REALM_ID });
const Confirmrg = () => {
  const navigate=useNavigate()
  const onClick= async()=>{
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const tokenId = params.get("tokenId");
    if (!token || !tokenId) {
      throw new Error(
        "Error"
      );
    }
    try {
      await app.emailPasswordAuth.confirmUser({ token, tokenId });
     navigate('/greencard')
    } catch (error) {
      
    }
  
  }
    return (
      <div><button onClick={onClick}>confirm</button></div>
    )
  }

export default Confirmrg