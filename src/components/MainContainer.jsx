import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const MainContainer = ({ results }) => {
  return (
    <>
      <main>
        <LeftContainer results={results} />
        <RightContainer results={results} />
      </main>
    </>
  );
};

export default MainContainer;
