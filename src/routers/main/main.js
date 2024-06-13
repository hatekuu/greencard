import React, { useState, useEffect } from 'react';
import Login from './login/login'
import Register from './register/register'
import Home from './home/home'
const Main = () => {
    const [navigate, setNavigate] = useState('login');
    const renderComponent = () => {
        switch (navigate) {
          case 'login':
            return <Login setNavigate={setNavigate} />;
          case 'register':
            return <Register setNavigate={setNavigate} />;
          case 'home':
            return <Home setNavigate={setNavigate} />;
          default:
            return <Login setNavigate={setNavigate} />;
        }
      };
      return (
        <div>
          {renderComponent()}
        </div>
      );
    };

export default Main