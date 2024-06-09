import Start_game from "./components/Start_game"
import { useState } from "react";
import GamePlay from "./components/GamePlay";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    setIsGameStarted((prev)=>!prev);
  };
  return (
    <>
      {isGameStarted ? <GamePlay/> : <Start_game toggle= {toggleGameplay}/> }
      </>
  );
};

export default App
