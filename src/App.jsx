import { useEffect, useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import axios from "axios";

function App() {
  const [results, setResults] = useState([]);

  async function fetchResults() {
    const responce = await axios.get("../result-summ/data.json");
    setResults(responce.data);
  }

  useEffect(() => {
    fetchResults();
  }, []);

  return <MainContainer results={results} />;
}

export default App;
