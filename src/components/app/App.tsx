import React from "react";
import "./App.css";
import ROUTES, { RenderRoutes } from "../../routes/routes";

function App() {
  return (
    <div id="app">
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
