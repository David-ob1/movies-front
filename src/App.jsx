import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaUserAlt } from "react-icons/fa";
import { Highlights } from "./components/Highlights/Highlights";
import { Card } from "./components/Card/Card";



import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Movie } from "./pages/Movie/Movie";
import { Register } from "./pages/register/Register";
import { Admin } from "./pages/Admin/Admin";
import { Page404 } from "./components/404/Page404";



function App() {
  const [count, setCount] = useState(0);

  let info = JSON.parse(sessionStorage.getItem("Admin"))
  
  return (
    <>

          <Router>
           <Navbar/>
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/movies" element={<Movies/>}></Route>
            <Route path="/movie" element={<Movie/>}></Route>
            {
            info &&
            <Route path="/admin" element={<Admin/>}></Route>
            }
            <Route path="*" element={<Page404 />}></Route>
            
            </Routes>
          </Router>

    </>
  );
}

export default App;
