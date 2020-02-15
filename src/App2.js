import React from "react";
function List() {
  return (
    <h1 style={{ color: "red", fontSize: "60" }}>
      {[1, 2, 3].map(value => (
        <div> {value} </div>
      ))}
    </h1>
  );
}
export default List;
