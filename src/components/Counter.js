import React, { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);

  const clickUp = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <h3>Count: {num}</h3>
      <button onClick={clickUp}>Up</button>
    </div>
  );
}
