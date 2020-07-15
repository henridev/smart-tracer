import React from "react";
import "./App.css";
import ROUTES, { RenderRoutes } from "../../routes/routes";

function App() {
  return <RenderRoutes routes={ROUTES} />;
}

export default App;
