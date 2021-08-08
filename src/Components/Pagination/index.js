import React from "react";
import styles from "./style.module.scss";


export default function Pagination({ onClick,index,currentPage }) {
  return (

    <div className={styles.Pagination}>
      <button id="x" onClick={()=>{
        onClick(index)
      }} >{index}</button>
    </div>
  );
}
