import { Route, Routes } from "react-router-dom";
import "./App.css";
import Country from "./Components/country";
import Render from "./Components/render";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Country />} />
        <Route exact path="/select-country" element={<Render />} />
      </Routes>
    </div>
  );
}

export default App;
