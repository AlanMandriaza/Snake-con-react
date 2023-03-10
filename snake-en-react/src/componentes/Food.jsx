import React from "react";

function Food(props) {
  const style = {
    left: `${props.food[0] * 20}px`,
    top: `${props.food[1] * 20}px`
  };
  return <div className="food-block" style={style}></div>;
}

export default Food;
