import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes, { func, string } from "prop-types";
import { useInjectSaga } from "../../utils/injectSaga";
import { useInjectReducer } from "../../utils/injectReducer";
import tesodevLogo from "../../assets/images/tesodevLogo.png"
import { mockData } from "../../data.js";
import { makeSelectList } from "./selector";
import reducer from "./reducer";
import saga from "./saga";
import styles from "./style.module.scss";
import "../../App.css";
import InputBar from "../../Components/InputBar";
import ResultsBar from "../../Components/ResultsBar";
import OrderBy from "../../Components/OrderBy";
import Pagination from "../../Components/Pagination";

import {
  useLocation
} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const key = "List";

export function List({ index }) {
  let query = useQuery();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });


  const [srcValue, setSrcValue] = useState(query.get("src"))
  const [orderType, setOrderType] = useState();
  const [inputValue, setInputValue] = useState(query.get("src"));
  const [currentPage, setCurrentPage] = useState(1);

  const orderedResults = () => {

    if (orderType === "lowerW") {
      return mockData.data.sort(compare)
    }
    else if (orderType === "higherW") {
      return mockData.data.sort(compare).reverse()
    }
    else if (orderType === "lower") {
      return mockData.data.sort((a, b) => getTime(a[3]) - getTime(b[3]))
    }
    else if (orderType === "higher") {
      return mockData.data.sort((a, b) => getTime(b[3]) - getTime(a[3]))
    }
    return mockData.data
  };


  var currentData = orderedResults().filter((item) => item[0].toLowerCase().includes(srcValue.toLowerCase()))
  let pageSize = 5;
  let pageLimit = parseInt(currentData.length / pageSize);

  if (currentData.length % pageSize !== 0) {
    pageLimit++
  }

  const renderItems = () => {
    let skip = (currentPage - 1) * pageSize;
    return currentData.slice(skip, skip + 5)
  }



  function getTime(stringDate) {
    let dateArr = stringDate.split("/");
    let date = new Date(dateArr[2], dateArr[1], dateArr[0]);
    return date.getTime();
  }



  function compare(a, b) {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  }

  const src = (e) => {
    setInputValue(e.target.value)
  }

  const btnClick = () => {
    setSrcValue(inputValue)
    setCurrentPage(1)
  }

  const previous = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const next = () => {
    if (currentPage < pageLimit) {
      setCurrentPage(currentPage + 1)
    }
  }


  const rData = () => {
    if (inputValue.length <= 0) {
      return ""
    }

    return <div className={styles.renderedResults}>
      <div className={styles.outOrderBy}>
        <OrderBy setOrder={setOrderType} />
      </div>
      <div className={styles.itemList}>
        {renderItems().map((x) =>
          <ResultsBar info={x} />
        )}
      </div>
      <div>

        {currentPage !== 1 && <button className={styles.previous} onClick={previous}>Previous</button>}
        {
          Array(pageLimit).fill().map((item, index) =>
            < Pagination onClick={(x)=>{
              setCurrentPage(x)
            }}  index={index + 1} currentPage={currentPage}  />
          )}
        {pageLimit !== currentPage && <button className={styles.next} onClick={next}>Next</button>}
      </div>
    </div>
  }





  return (
    <div className={styles.list}>
      <div className={styles.tesLogo}>
        <img src={tesodevLogo} alt="Tesodev"></img>
      </div>
      <div className={styles.rData}>
        <div className={styles.outInputBar}>
          <InputBar value={inputValue} onSearch={src} onClick={btnClick} />
        </div>
        <div className={styles.outOrderBy}>
        </div>
        {rData()}
      </div>
    </div>
  );
}

List.propTypes = {
  postLoad: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
const mapStateToProps = createStructuredSelector({
  List: makeSelectList(),
});

export function mapDispatchToProps(dispatch) {
  return {

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(List);




