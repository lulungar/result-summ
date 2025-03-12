import React from "react";

const ScoreLeftContainer = ({ results }) => {
  return (
    <div className="left">
      <h1 id="title" className="grey">
        Your Result
      </h1>
      <div className="result">
        <h1>
          {Math.trunc(
            results.reduce((acc, cur) => acc + cur.score, 0) / results.length
          ).toString()}
        </h1>
        <p className="grey">of 100</p>
      </div>
      <div className="text">
        <h1>Great</h1>
        <p className="grey">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default ScoreLeftContainer;
