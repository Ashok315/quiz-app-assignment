import React from 'react'
import styles from "./Button.module.css"

const Button=({
  children,
  type= "button",
  className="",
  ...props
})=>{
  return (
    <button type={type} className={`${styles.btn} ${className}`} {...props}>
       {children}
    </button>
  );
}

export default Button;
