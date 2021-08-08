import React from "react";
import SearchButton from "../SearchButton"
import styles from "./style.module.scss";

export default function InputBar({ onSearch , value , onClick}) {
  return (
    <div className={styles.InputBar}>   
        <input value={value} onChange={onSearch} type="text" id="src" ></input>
      <div className={styles.inputSrc}>
        <SearchButton onClick={onClick}  />
      </div>
    </div>
  );
}
