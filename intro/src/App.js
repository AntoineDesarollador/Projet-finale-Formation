
import './App.css';

import Home from "./Pages/Home/index.jsx"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <>
          <Home />

          <Routes>
              <Route path={"home"} element={<Home />} />

          </Routes>
      </>
  );
}

export default App;
