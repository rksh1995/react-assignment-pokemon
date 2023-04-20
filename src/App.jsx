import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./Components/TodoList";
import Pokedex from "./Pokedex";

import FirstComp from "./ReactStateExercise/FirstComp";
import SecondComp from "./ReactStateExercise/SecondComp";
import ThirdComp from "./ReactStateExercise/ThirdComp";
import FlipCoin from "./CoinFlipComponent/FlipCoin";

function App() {
  return (
    <div>
      {/* <TodoList /> */}
      {/*<Pokedex />*/}
      {/*<FirstComp/>*/}
      <FlipCoin/>
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
