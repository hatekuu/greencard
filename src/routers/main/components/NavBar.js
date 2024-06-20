import React,{useState,useEffect} from 'react';

import "./Hamburger.css"
const NavBar = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
   if(!props.navbar){
    setIsOpen(false);
   }
  }, [props.navbar]);
  const toggleMenu = () => {
      setIsOpen(!isOpen);
      props.setNabar(true)
  };
  const handleSearch = () => {
      // Your search logic here
      console.log('Searching...');
  };
  return (
    <div className="navbar bg-gray-100 text-black fixed top-0 left-0 right-0 z-10">
      {/* Top Section (Logo, Hotline, User Options) */}
      <div className="flex items-center justify-between py-4 px-28 h-20 max-lg:px-12">
        {/* Left Section (Logo and Hotline) */}
        <div className="flex items-center ">
          {/* Logo */}
          <img src="https://i.imgur.com/jnhI9YH.png" alt="Logo" className="h-28 ml-8 max-lg:ml-0" onClick={() => { props.setNavigate('home'); window.location.href = "/greencard" }} />

          {/* Hotline */}
          <div className="ml-8 max-lg:ml-0">
            <span className="text-sm font-semibold">Hotline: 123-456-789</span>
          </div>
        </div>

        {/* Right Section (User Options and Cart) */}
        <div className="flex items-center space-x-4">
          {!props.user ? (
            <>
              <button onClick={() => { props.setNavigate('login'); window.location.href = "/greencard" }} className="text-base font-semibold max-lg:hidden">Đăng nhập</button>
              <button onClick={() => { props.setNavigate('register'); window.location.href = "/greencard" }} className="text-base font-semibold max-lg:hidden">Đăng ký</button>
            </>
          ) : (
            <button onClick={() => props.setLogout(true)} className="text-base font-semibold max-lg:hidden">Đăng xuất</button>
          )}

          {/* Cart Icon */} 
          <div className="relative max-xl:hidden">
            <button className="text-base font-semibold relative">
              Giỏ hàng
              <span className="absolute top-1 right: 0 bg-red-500 text-white rounded-full px-4 py-1 text-xs">0</span>

            </button>
          </div>
        </div>
        <div className=" relative left-14 flex flex-col justify-items-center  rounded-md py-4 px-6 lg:hidden h-10 w-16" >
      
        <div className="hamburger-container">
        <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
        
        <div className={`menu ${isOpen? 'open' : ''}`}>
            <div className="menu-box">
            <div className="search-wrapper">
                <input type="text" placeholder="Tìm kiếm..." />
                <button onClick={handleSearch}>Tìm</button>
            </div>
            <p onClick={() => { props.setNavigate('home'); window.location.href = "/greencard"} }>Trang chủ</p>
            <p onClick={() => { props.setNavigate('about'); window.location.href = "/greencard/about" }}>Giới thiệu</p>
            <p onClick={() => { props.setNavigate('home'); window.location.href = "/greencard"}}>Sản phẩm</p>
            <p onClick={() => { props.setNavigate('contact'); window.location.href = "/greencard/contact" }}>Liên hệ</p>
            <p onClick={() => { props.setNavigate('projects'); window.location.href = "/greencard/projects" }}>Dự án</p>
            {!props.user ? (
                <>
                <p onClick={() => { props.setNavigate('login');    window.location.href = "/greencard"} }>Đăng nhập</p>
                <p onClick={() => { props.setNavigate('register');   window.location.href = "/greencard"}} >Đăng ký</p>
                </>
            ) : (
                <>
                        <p  >Giỏ hàng</p>
                <p onClick={() => props.setLogout(true)} >Đăng xuất</p>
        
               </>
            )}
            </div>
        </div>
        </div>
         </div>
      </div>
    
      {/* Bottom Section (Navigation Options and Search Bar) */}
     
      <div className="flex justify-between relative left-14  rounded-md bg-gray-200 py-4 px-32 max-lg:hidden" style={{height:55, width:1400}}>
        {/* Navigation Options */}
        <nav className="flex items-center space-x-12  ">
      
          <button onClick={() => { props.setNavigate('home'); window.location.href = "/greencard" }} className="text-lg font-semibold hover:bg-gray-300 h-14 w-24 rounded-md ">Trang chủ</button>
          <button onClick={() => { props.setNavigate('about'); window.location.href = "/greencard/about" }} className="text-lg font-semibold hover:bg-gray-300 h-14 w-24 rounded-md  ">Giới thiệu</button>
          <button onClick={() => { props.setNavigate('home'); window.location.href = "/greencard" }} className="text-lg font-semibold hover:bg-gray-300 h-14 w-24 rounded-md">Sản phẩm</button>
          <button onClick={() => { props.setNavigate('contact'); window.location.href = "/greencard/contact" }} className="text-lg font-semibold hover:bg-gray-300 h-14 w-24 rounded-md">Liên hệ</button>
          <button onClick={() => { props.setNavigate('projects'); window.location.href = "/greencard/projects" }} className="text-lg font-semibold hover:bg-gray-300 h-14 w-24 rounded-md">Dự án</button>
        </nav>

        {/* Search Bar */}
        <div className="relative ml-4 -mt-2">
          <input type="text" placeholder="Tìm kiếm..." className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 w-96" />
          <button className="absolute right:32 -top-0.5 bottom-0 px-4 rounded-md bg-gray-300 text-gray-700 rounded-r-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400 h-11">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 3a6 6 0 100 12 6 6 0 000-12zm9 14.3l-4.2-4.2A7 7 0 1116 9a7 7 0 017 7zm-1 1a1 1 0 00-1.4 0l-3.1 3.1a1 1 0 001.4 1.4l3.1-3.1a1 1 0 000-1.4z"/></svg>
          </button>
        </div>
      </div>
  
    </div>
  );
};

export default NavBar;
