import React from "react";
import Button from "./Button/Button";
import ResultContainer from "./ResultContainer";

const ResultRightCOntainer = ({ results }) => {
  return (
    <div className="right">
      <h1>Summary</h1>
      <ResultContainer results={results} />
      <Button>Continue</Button>
    </div>
  );
};

export default ResultRightCOntainer;
