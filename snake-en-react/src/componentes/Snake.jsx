import React from "react";

function Snake(props) {
  const snake = props.snake.map((coords, i) => {
    const style = {
      left: `${coords[0] * 20}px`,
      top: `${coords[1] * 20}px`
    };
    return <div className="snake-block" key={i} style={style}></div>;
  });
  return <div>{snake}</div>;
}

export default Snake;

