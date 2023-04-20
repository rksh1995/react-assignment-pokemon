import React from "react";
import SecondComp from "./SecondComp";

const FirstComp = () => {
  const arrayList =  Array(24).fill(''); // array with 24 elements created

  return (
    <div>
      {arrayList.map((el,i) => (
        <SecondComp key={i}/>
      ))}
    </div>
  );
};

export default FirstComp;
