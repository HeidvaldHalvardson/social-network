import React from "react";
import style from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

const DialogsItem = ({children, ...props}) => {
  return (
    <li className={style.item}>
      <NavLink className={(navData) => navData.isActive ? `${style.link} ${style.active}` : style.link} to={`${props.href}`}>
        {children}
      </NavLink>
    </li>
  )
}

export default DialogsItem;