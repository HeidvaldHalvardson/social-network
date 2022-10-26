import React from "react";
import style from "./ErrorMessage.module.css";

const ErrorMessage = ({children}) => {
  return (
    <p className={style.errors}>{children}</p>
  )
}

export default ErrorMessage;