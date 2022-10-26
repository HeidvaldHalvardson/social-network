import React from "react";
import style from './Navbar.module.css';
import NavItem from "./NavItem/NavItem";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <NavItem href="profile">Profile</NavItem>
        <NavItem href="dialogs">Messages</NavItem>
        <NavItem href="news">News</NavItem>
        <NavItem href="music">Music</NavItem>
        <NavItem href="find-users">Find users</NavItem>
        <NavItem href="setting">Setting</NavItem>
      </ul>
    </nav>
  )
}

export default Navbar;