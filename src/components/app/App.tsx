import React from "react";
import "./App.css";
import ROUTES, { RenderRoutes } from "../../routes/routes";
import Theme from "../../styles/Theme";

function App() {
  return (
    <div id="app">
      <Theme>
        <RenderRoutes routes={ROUTES} />
      </Theme>
    </div>
  );
}

export default App;
