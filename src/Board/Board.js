import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card.js";

const Board = ({ board }) => {
  return (
    <div className="board">
      {board.map((item, index) => (
        <div className="board-card" key={index}>
          <Card name={item.name} />
        </div>
      ))}
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.array.isRequired
};

export default Board;
