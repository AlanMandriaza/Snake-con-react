import React, { useState, useEffect } from "react";
import Snake from "./Snake.jsx";
import Food from "./Food.jsx";

function Board() {
  const [snake, setSnake] = useState([[0, 0]]);
  const [food, setFood] = useState(randomFood());
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      moveSnake();
    }, 100);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const handleKeyDown = e => {
      switch (e.keyCode) {
        case 37:
          setDirection("left");
          break;
        case 38:
          setDirection("up");
          break;
        case 39:
          setDirection("right");
          break;
        case 40:
          setDirection("down");
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function moveSnake() {
    const head = snake[0].slice();
    switch (direction) {
      case "right":
        head[0]++;
        break;
      case "left":
        head[0]--;
        break;
      case "up":
        head[1]--;
        break;
      case "down":
        head[1]++;
        break;
      default:
        break;
    }
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood(randomFood());
      setScore(score + 10);
    } else {
      snake.pop();
    }
    setSnake([head, ...snake]);
  }

  function randomFood() {
    return [
      Math.floor(Math.random() * 20),
      Math.floor(Math.random() * 20)
    ];
  }

  return (
    <div>
      <div className="game-board">
        <Snake snake={snake} />
        <Food food={food} />
      </div>
      <div className="score">Score: {score}</div>
    </div>
  );
}

export default Board;
