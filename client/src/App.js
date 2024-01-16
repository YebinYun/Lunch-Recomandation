import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./containers/main/MainContainer.tsx";
import ResultPage from "./pages/pages/ResultPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Recomandation" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
