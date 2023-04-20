import React from "react";
import { useState } from "react";

const SecondComp = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!myColor);
  };

  return (
    <div
      className="second-comp"
      onClick={handleClick}
      style={{ backgroundColor: active ? "black" : "green" }}
    >
      Second
    </div>
  );
};

export default SecondComp;
