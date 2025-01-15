import React, { useState,useEffect } from "react";
import "./App.css";
import rock from "./rock.png";
import paper from "./paper.png";
import scissors from "./scissors.png";

export default function App() {
  const [humanscore, sethumanscore] = useState(0);
  const [aiscore, setaiscore] = useState(0);
  const [color, setcolor] = useState("white");
  const [message, setmessage] = useState("START GAME");
  const [randomindex, setrandomindex] = useState(Math.floor(Math.random() * 2));
  let array = ["rock", " paper", "scissors"];

  const humanvalue = (value) => {
    console.log("randomindex=", randomindex);
    console.log("value=", value);
    let aivalue = array[randomindex];
    console.log("aivalue=", aivalue);
    setrandomindex(Math.floor(Math.random() * 2));

    if (
      (value == "rock" && aivalue == "scissors") ||
      (value == "paper" && aivalue == "rock") ||
      (value == "scissors" && aivalue == "paper")
    ) {
      setmessage(`"YOU WON"`);
      sethumanscore(humanscore + 1);
      setcolor("green");
    } else if (value == aivalue) {
      setmessage(`"GAME DRAW"`);
      setcolor("grey");
    } else {
      setmessage(`"AI WON, YOU LOST"`);
      setaiscore(aiscore + 1);
      setcolor("red");
    }
  };

  useEffect(() => {
    if (aiscore === 5) {
      setmessage("YOU LOST GAME OVER");
      setcolor("red");
    } else if (humanscore === 5) {
      setmessage("YOU WON GAME OVER");
      setcolor("green");
    }
  }, [aiscore, humanscore]);
  
  function reset() {
    setmessage("START GAME")
    sethumanscore(0)
    setaiscore(0)
    setcolor('white')
  }

  const gameover= aiscore==5 || humanscore==5;

  return (
    <div className="game">
      <h1>Rock Paper Scissors</h1>
      <h3>With Artificial Intellegence</h3>
      <div className="score">Score</div>
      <div className="value">
        <div className="human">
          <div className="human-score">{humanscore}</div>
          <p>human</p>
        </div>
        <div className="line"></div>
        <div className="ai">
          <div className="ai-score">{aiscore}</div>
          <p>AI</p>
        </div>
      </div>
      <div
        style={{ color: color, border: `${1}px solid ${color}` }}
        className="message"
      >
        {message}
      </div>
      <div className="img">
        <div onClick={!gameover? () => humanvalue("rock"):null} className="input rock">
          <img src={rock} alt="Rock" />
          ROCK
        </div>
        <div onClick={!gameover? () => humanvalue("paper"):null} className="input paper">
          <img src={paper} alt="Paper" />
          PAPER
        </div>
        <div onClick={!gameover? () => humanvalue("scissors"):null} className="input scissors">
          <img src={scissors} alt="Scissors" />
          SCISSORS
        </div>
      </div>
      <div onClick={reset} className="reset">reset</div>
    </div>
  );
}
