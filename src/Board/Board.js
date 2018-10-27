import React from 'react';

import Card from '../Card/Card.js';

const Board = (props) => {
  return(
    <div className="board">
      <div className="board-card"><Card name={props.board1} /></div>
      <div className="board-card"><Card name={props.board2} /></div>
      <div className="board-card"><Card name={props.board3} /></div>
      <div className="board-card"><Card name={props.board4} /></div>
      <div className="board-card"><Card name={props.board5} /></div>
    </div>
  );
}

export default Board;
