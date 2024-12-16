import React from 'react'

const Button=({
  children,
  type= "button",
  className="",
  ...props
})=>{
  return (
    <button type={type} className={`btn ${className}`} {...props}>
       {children}
    </button>
  );
}

export default Button;
