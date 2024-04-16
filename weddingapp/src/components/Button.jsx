import React from 'react'

const Button = (props) => {
  const { children, onlick, className } = props;

  return (
    <>
      <div className={`${className}`}>{children}</div>
      
    </>
  )
}

export default Button