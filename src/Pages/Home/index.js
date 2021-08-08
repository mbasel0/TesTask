import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { useInjectSaga } from "../../utils/injectSaga";
import { useInjectReducer } from "../../utils/injectReducer";
import { mockData } from "../../data.js";
import { Link } from "react-router-dom";
import { search } from "./actions";
import { makeSelectHome } from "./selector";
import reducer from "./reducer";
import saga from "./saga";
import tesodevLogo from "../../assets/images/tesodevLogo.png"
import styles from "./style.module.scss";
import "../../App.css";
import InputBar from "../../Components/InputBar";
import ResultsBar from "../../Components/ResultsBar";



const key = "home";

export function Home({ home, searchFunc }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [inputValue, setInputValue] = useState("");

  const src = (e) => {
    setInputValue(e.target.value)
  }


  const rData = () => {
    if (inputValue.length <= 0) {
      return ""
    }


    return <div className={styles.renderedResults}>
      {mockData.data.filter((item) => item[0].toLowerCase().includes(inputValue.toLowerCase())).slice(0, 3).map((x) =>
         <ResultsBar info={x} />
      )}
      <div className={styles.resultSpan}>
        <Link to= {`/list?src=${inputValue}`} > 
          <span >Show More...</span>
        </Link>
      </div>
    </div>
  }

  return (
    <div className={styles.home}>
      <div className={styles.headSide}>
        <img className={styles.tesLogo} src={tesodevLogo} alt="Tesodev" />
        <div>
          <span>Search web app</span>
        </div>
      </div>
      <div className={styles.footSide}>
        <InputBar onSearch={src} />
        <div className={styles.b}>
          {rData()}
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  postLoad: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

export function mapDispatchToProps(dispatch) {
  return {

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
