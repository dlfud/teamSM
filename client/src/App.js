import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Read from "./component/Read.jsx";
import Create from "./component/Create.jsx";
import Update from "./component/Update.jsx";

function App() {
 return (
  <Router>
   <Routes>
    <Route path="/read" element={<Read />}></Route>
    <Route path="/create" element={<Create />}></Route>
    <Route path="/update/:id" element={<Update />}></Route>
   </Routes>
  </Router>
 );
}

export default App;
