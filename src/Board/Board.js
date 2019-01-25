import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card.js";

const Board = props => {
  return (
    <div className="board">
      <div className="board-card">
        <Card name={props.board1} />
      </div>
      <div className="board-card">
        <Card name={props.board2} />
      </div>
      <div className="board-card">
        <Card name={props.board3} />
      </div>
      <div className="board-card">
        <Card name={props.board4} />
      </div>
      <div className="board-card">
        <Card name={props.board5} />
      </div>
    </div>
  );
};
Board.propTypes = {
  board1: PropTypes.string,
  board2: PropTypes.string,
  board3: PropTypes.string,
  board4: PropTypes.string,
  board5: PropTypes.string
};

export default Board;
