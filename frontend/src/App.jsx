import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Create from "./pages/Create";
import List from "./pages/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/list"  element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
