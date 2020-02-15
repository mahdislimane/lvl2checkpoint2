import React from "react";
import "./style.css";
function Name() {
  let firstname = "Mahdi";
  let secondname = "Slimane";
  return (
    <div>
      {<img src="p.jpg" className="my-profile" />}

      {
        <p>
          {firstname} {secondname}
        </p>
      }
    </div>
  );
}
export default Name;
