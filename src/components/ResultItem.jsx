import React from "react";

const ResultItem = ({ resultNum, title, iconSrc, resultType }) => {
  return (
    <div className={resultType}>
      <div className="result-left">
        <img src={iconSrc} alt="" />
        <h2>{title}</h2>
      </div>
      <h2>
        {resultNum} <span className="grey">/ 100</span>
      </h2>
    </div>
  );
};

export default ResultItem;
