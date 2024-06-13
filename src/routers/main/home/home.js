import React from 'react'

const Home = ({setNavigate}) => {
    const onClick =()=>{
        setNavigate('login')
    }
  return (
    <div>Home
        <button onClick={onClick}>Logout</button>
    </div>
  )
}

export default Home