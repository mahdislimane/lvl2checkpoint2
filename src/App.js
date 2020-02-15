import React from "react";
import "./style.css";
import p from "./ph.jpg";

function App() {
  return (
    <div>
      <h1 className="title red">My titel</h1>
      <br />
      <img src={p} />
      <br />
      <img src="./p.jpg" />
    </div>
  );
}

export default App;
