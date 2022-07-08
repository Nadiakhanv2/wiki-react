import React from "react";
import TenziesGame from "./TenziesGame";
import { nanoid } from "nanoid";

export default function Dice() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      //   newDice.push(Math.ceil(Math.random() * 6));--- array in the form of objects
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        // isHeld: false, ---change it in true form -- add some styling to tenzies.game component , if is held is true its color changes in green
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }
  function rollDice() {
    setDice(allNewDice);
  }
  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }
  const diceElements = dice.map((die) => (
    <TenziesGame
      key="{die.id}"
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));
  return (
    <div className="main-body w-50 container">
      <div className="tenzie-cnt h-400">
        <div className="dice-container pd-100 px-5">
          
          {diceElements}
        </div>
        <div className=" py-2 text-center">
          <button onClick={rollDice} className="roll--dice ">
            Roll
          </button>
        </div>
      </div>
    </div>
  );
}
