import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from "./routers/main/components/Product";
import Contact from "./routers/main/components/Contact";
import NavBar from "./routers/main/components/NavBar";
import Toolbar from "./routers/main/components/ToolBar";
import * as Realm from 'realm-web';

const app = new Realm.App({ id: process.env.REACT_APP_REALM_ID });
const Project = lazy(() => import( "./routers/project/project"));
const Contactt = lazy(() => import( "./routers/main/contact/Contact"));
const About = lazy(() => import("./routers/main/about/About"));
const Confirmps = lazy(() => import("./routers/main/login/confirmps"));
const Confirmrg = lazy(() => import("./routers/main/register/confirmrg"));
const AdminPage = lazy(() => import("./admin/main/main"));
const Register = lazy(() => import("./routers/main/register/register"));
const Login = lazy(() => import("./routers/main/login/login"));
const Home = lazy(() => import("./routers/main/home/home"));

function App() {
  const [lougout, setLogout] = useState(false);
  const [navigate, setNavigate] = useState(() => {
    return localStorage.getItem('inputValue') || '';
  });
  const user = app.currentUser;

  useEffect(() => {
    localStorage.setItem('inputValue', navigate);
    console.log(navigate);
    fetchData();
  }, [lougout, navigate, user]);

  const fetchData = async () => {
    if (lougout) {
      try {
        await app.currentUser.logOut();
        localStorage.setItem('inputValue', "login");
        window.location.href = "/greencard"; // Chuyển hướng sau khi đăng xuất
      } catch (error) {
        console.log(error);
      }
    }
  };
  const RenderComponent = () => {
    switch (navigate) {
      case 'login':
        return <Login setNavigate={setNavigate} user={user} navigate={navigate}/>;
      case 'register':
        return <Register setNavigate={setNavigate} />;
      case 'home':
        return <Home setNavigate={setNavigate} user={user}/>;
      default:
        return <Home setNavigate={setNavigate} user={user}/>; // Trả về null nếu navigate không khớp với các trường hợp trên
    }
  };
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="text-white p-28">
          <NavBar setNavigate={setNavigate} setLogout={setLogout} user={user} />
        </header>
        <div className="flex flex-grow">
        {navigate === 'home' && (
          <aside className="w-32 p-48 max-lg:p-4">
            <Toolbar  />
          </aside>)}
          <main className="flex-grow">
            <Suspense fallback={<div className="spinner"></div>}>
              <Routes>
                <Route path="/greencard/:productId" element={<ProductDetail />} />
                <Route path="/greencard" element={<RenderComponent />} />
                <Route path="/greencard/confirmps" element={<Confirmps />} />
                <Route path="/greencard/confirmrg" element={<Confirmrg />} />
                <Route path="/greencard/contact" element={<Contactt />} />
                <Route path="/greencard/about" element={<About />} />
                <Route path="/greencard/projects" element={<Project />} />
                <Route path="/greencard/admin" element={<AdminPage user={user} />} />
              </Routes>
            </Suspense>
          </main>
        </div>
        <footer>
          <Contact />
        </footer>
      </div>
    </Router>
  );
}

export default App;
