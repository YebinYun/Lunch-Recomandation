import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Recomandation from "./pages/Recomandation";

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
