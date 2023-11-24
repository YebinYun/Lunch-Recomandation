import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/pages/MainPage";
import ResultPage from "./pages/pages/ResultPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ResultPage" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
