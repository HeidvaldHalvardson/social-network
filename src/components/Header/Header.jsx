import React from "react";
import style from './Header.module.css';
import CustomLink from "../pages/customs/CustomLink/CustomLink";

const Header = (props) => {
  return (
    <header className={style.header}>
      <p>Social Network</p>

      <div className={style.login}>
        {props.isAuth
          ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
          : <CustomLink to={'login'}>Login</CustomLink>}
      </div>
    </header>
  )
}

export default Header;