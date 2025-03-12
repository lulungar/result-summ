import { useEffect, useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import axios from "axios";

function App() {
  const [results, setResults] = useState([]);

  async function fetchResults() {
    const responce = await axios.get("../data.json");
    setResults(responce.data);
  }

  useEffect(() => {
    fetchResults();
  }, []);

  console.log(results);

  return <MainContainer results={results} />;
}

export default App;
