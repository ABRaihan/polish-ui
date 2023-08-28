import React from "react";
import { SpinnerProps } from "./SpinnerTypes";
import style from "./spinner.module.scss";

const Spinner: React.FC<SpinnerProps> = () => {
  return <span className={style.spinner}></span>;
};

export default Spinner;
