import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [test, setTest] = useState("");

  useEffect(() => {
    const doTest = async () => {
      const testData = await axios({
        url: `http://localhost:5000/api`,
        method: "GET",
      });
      setTest(testData.data);
    };
    doTest();
  });

  return <div className="App">{test.test}</div>;
}

export default App;
