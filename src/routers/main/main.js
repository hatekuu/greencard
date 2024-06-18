import React, { useState, useEffect } from 'react';
import Login from './login/login';
import Register from './register/register';
import Home from './home/home';

const Main = (probs) => {

  const [navigate, setNavigate] = useState('home');
  useEffect(() => {
  if(probs.user?.customData?.type==="Admin"){
    window.location.href="/greencard/admin"
  }
  setNavigate(probs.navigate)
 
  }, [probs.navigate]);
  const renderComponent = () => {
    switch (navigate) {
      case 'login':
        return <Login setNavigate={setNavigate} />;
      case 'register':
        return <Register setNavigate={setNavigate} />;
      case 'home':
        return <Home setNavigate={setNavigate} />;
      default:
        return 
    }
  };
  return (
    <div>
    {/* <NavBar user={user} setNavigate={setNavigate} setLogout={setLogout}/>
    <Toolbar /> */}
    <div >
        {renderComponent()}
      </div>
    
    </div>
  );
};

export default Main;
