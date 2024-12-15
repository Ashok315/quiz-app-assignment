import React from 'react'
import styles from './Button.module.css'

const Button=({
  children,
  type= "button",
  ...props
})=>{
  return (
    <button type={type} className={styles.btn} {...props}>
       {children}
    </button>
  );
}

export default Button;
