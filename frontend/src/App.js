import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PromptsVaultLanding from "./components/PromptsVaultLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PromptsVaultLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;