import React from "react";
import Button from "@material-ui/core/Button";
import "./Welcome.css";
import { useHistory } from "react-router-dom";

function Welcome() {
  const history = useHistory();

  const handleClick = () => history.push("/smart-tracer");

  return (
    <div id="container" className="container">
      <div className="button-group">
        <Button
          className="button"
          variant="contained"
          color="secondary"
          onClick={handleClick}
        >
          Click here to connect
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
