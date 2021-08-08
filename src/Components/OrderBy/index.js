import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "./style.module.scss";

export default function OrderBy({ setOrder }) {
  return (
    <div className={styles.OrderBy} >
      <Dropdown onSelect={setOrder} className={"mt-2 d-flex ml-2"} >
        <Dropdown.Toggle className={styles.dDown}>
          <span className={styles.dArrows}> {"\uD83E\uDC21"}{"\uD83E\uDC23"} </span>
          Order By
        </Dropdown.Toggle>
        <Dropdown.Menu className={styles.dDownMenu} >
          <Dropdown.Item className={styles.dDownItem} eventKey="lowerW"> Name ascending </Dropdown.Item>
          <Dropdown.Item className={styles.dDownItem} eventKey="higherW"> Name descending </Dropdown.Item>
          <Dropdown.Item className={styles.dDownItem} eventKey="lower"> Year ascending </Dropdown.Item>
          <Dropdown.Item className={styles.dDownItem} eventKey="higher"> Year descending </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
