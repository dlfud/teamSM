import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [test, setTest] = useState("");
  useEffect(() => {
    const doTest = async () => {
      const testData = await axios({
        url: `http://localhost:5000`,
        method: "GET",
      });
      setTest(testData.data);
    };
    doTest();
  });

  return <div className="App">{test}</div>;
}

export default App;
