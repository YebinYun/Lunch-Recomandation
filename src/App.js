import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/pages/Main";
import Recomandation from "./pages/pages/Recomandation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Recomandation" element={<Recomandation />} />
      </Routes>
    </div>
  );
}

export default App;
