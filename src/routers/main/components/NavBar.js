import React, { useState } from 'react';
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className="navbar flex items-center justify-between py-4 px-6 bg-gray-100 text-black fixed top-0 left-0 right-0 z-10">
    <button onClick={()=>{  props.setNavigate('home'); window.location.href="/greencard"}}  className="text-lg font-semibold">Trang chủ</button>
    <button
      className="text-black focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      Menu
    </button>
    {isOpen && (
      <div className="dropdown absolute right-0 mt-32 bg-gray-100 text-black rounded-md shadow-lg" onClick={() => setIsOpen(!isOpen)}>
        {!props.user ? (<>     <button className="block w-full text-left px-4 py-2 text-sm" onClick={()=>{  props.setNavigate('login'); window.location.href="/greencard"}}>Đăng nhập</button>
        <button className="block w-full text-left px-4 py-2 text-sm" onClick={()=>{  props.setNavigate('register'); window.location.href="/greencard"}}>Đăng ký</button></>)
        :(
            <>
             <button className="block w-full text-left px-4 py-2 text-sm" onClick={()=>props.setLogout(true)}>logOut</button>
  
        </>
        )}
   
      </div>
    )}
  </div>
  
  );
};

export default NavBar;
