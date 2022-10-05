import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Read from "./component/Read.jsx";

function App() {
 return (
  <Router>
   <Routes>
    <Route path="/read" element={<Read />}></Route>
   </Routes>
  </Router>
 );
}

export default App;
