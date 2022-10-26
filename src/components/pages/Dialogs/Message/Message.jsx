import React from "react";
import style from "./Message.module.css";

const Message = ({children}) => {
  return (
    <li className={style.item}>
      {children}
    </li>
  )
}

export default Message;