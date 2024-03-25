import React  from "react";
import "./Header2.css";
import {useNavigate} from 'react-router-dom';
const Header2 = () => {
  const navigate = useNavigate();

  return (
    <div className="sticknav">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a onClick={()=>{navigate("/html")}}>HTML</a>
          </li>
          <li className="nav-item">
            <a onClick={()=>{navigate("/css")}}>CSS</a>
          </li>
          <li className="nav-item">
            <a onClick={()=>{navigate("/javascript")}}>JAVASCRIPT</a>
          </li>
          <li className="nav-item">
            <a href="/contact">SQL</a>
          </li>
          <li className="nav-item">
            <a href="/contact">PYTHON</a>
          </li>
          <li className="nav-item">
            <a href="/contact">JAVA</a>
          </li>
          <li className="nav-item">
            <a href="/contact">PHP</a>
          </li>
          <li className="nav-item">
            <a href="/contact" style={{width:'4rem'}}>HOW TO</a>
          </li>
          <li className="nav-item">
            <a href="/contact">W3.CSS</a>
          </li>
          <li className="nav-item">
            <a href="/contact">C</a>
          </li>
          <li className="nav-item">
            <a href="/contact">C++</a>
          </li>
          <li className="nav-item">
            <a href="/contact">C#</a>
          </li>
          <li className="nav-item">
            <a href="/contact">BOOTSTRAP</a>
          </li>
          <li className="nav-item">
            <a href="/contact" onClick={()=>{navigate("/react")}}>REACT</a>
          </li>
          <li className="nav-item">
            <a href="/contact">MYSQL</a>
          </li>
          <li className="nav-item">
            <a href="/contact">JQUERY</a>
          </li>
          <li className="nav-item">
            <a  onClick={()=>{navigate("/excel")}}>EXCEL</a>
          </li>
          <li className="nav-item">
            <a href="/contact">XML</a>
          </li>
          <li className="nav-item">
            <a href="/contact">DJANGO</a>
          </li>
          <li className="nav-item">
            <a href="/contact" style={{width:'4rem'}}>NODE JS</a>
          </li>
          <li className="nav-item">
            <a href="/contact">R</a>
          </li>
          <li className="nav-item">
            <a href="/contact">TYPESCRIPT </a>
          </li>
          <li className="nav-item">
            <a href="/contact">ANGULAR</a>
          </li>
          <li className="nav-item">
            <a href="/contact">GIT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header2;
