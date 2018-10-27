import React from 'react';

const Results = (props) => {
  return(
    <div className="results">
      <p>Best Hand: {props.bestHand}</p>
    </div>
  );
}

export default Results;
