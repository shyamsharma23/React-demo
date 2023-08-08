import React from "react";

const Display = (props: any) => {
  return (
    <div>
      <div>
        <h2>{props.value.todo}</h2>
        <p>{props.value.description}</p>
      </div>
    </div>
  );
};

export default Display;
