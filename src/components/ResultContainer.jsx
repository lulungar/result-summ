import React from "react";
import ResultItem from "./ResultItem";

const ResultContainer = ({ results }) => {
  return (
    <div className="result-container">
      {results.map((el, index) => {
        return (
          <ResultItem
            title={el.category}
            iconSrc={el.icon}
            resultType={`result-item ${el.category.toLowerCase()}`}
            resultNum={el.score}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ResultContainer;
