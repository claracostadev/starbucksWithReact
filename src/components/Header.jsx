import React from "react";
import "../css/header.css";
import LOGO from "../image/logo.png"
import BtnHeader from "./BtnHeader";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container-logo">
        <img className="header__logo" src={LOGO} alt="logo" />
      </div>
      <nav className="header__nav">
        <BtnHeader class={"header__nav-link"} content={'Inicio'} href={"#"}/>    
        <BtnHeader class={"header__nav-link"} content={'Café'} href={"#"}/>
        <BtnHeader class={"header__nav-link"} content={'Delivery'} href={"#"}/>            
        <BtnHeader class={"header__nav-link"} content={'Sobre Nosotros'} href={"#"}/>    
      </nav>
      <div className="header__container-login">
        <i className="header__user-icon bi bi-person-circle"></i>
      </div>
      <i className="header__icon bi bi-list"></i>
    </header>
  );
};
export default Header;
