import { Route, Routes } from "react-router-dom";
import Main from "./containers/main/MainContainer.tsx";
import Result from "./containers/result/ResultContainer.tsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Recomandation" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
