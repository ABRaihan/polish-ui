import React from 'react'
import style from "./spinner.module.scss"
interface SpinnerProps {
  size: "sm" | "md" | "lg";
}

const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <span className={style.spinner}></span>
  )
}

export default Spinner;