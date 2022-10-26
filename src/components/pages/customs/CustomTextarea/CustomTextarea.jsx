import React from "react";
import style from "./CustomTextarea.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export const CustomTextarea = ({errors, ...props}) => {
  return (
    <>
      <textarea className={`${style.fieldControl} ${errors[props.name] ? style.fieldError : ''}`} {...props}/>
      <ErrorMessage>{errors[props.name]}</ErrorMessage>
    </>
  )
}

export const CustomInput = ({errors, ...props}) => {
  return (
    <>
      <input className={`${style.fieldControl} ${errors[props.name] ? style.fieldError : ''}`} {...props}/>
      <ErrorMessage>{errors[props.name]}</ErrorMessage>
    </>
  )
}
