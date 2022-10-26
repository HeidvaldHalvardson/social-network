import React from "react";
import {NavLink} from "react-router-dom";
import style from "./NavItem.module.css";

const NavItem = ({children, ...props}) => {
  return (
    <li className={style.item}>
      <NavLink className={(navData) => navData.isActive ? `${style.link} ${style.active}` : style.link} to={props.href}>
        {children}
      </NavLink>
    </li>
  )
}

export default NavItem;