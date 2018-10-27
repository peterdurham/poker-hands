import React from 'react';

const Controls = (props) => {
  let dealHand = (props.handStatus === "blank") ?
  <button className="controls-button" onClick={props.dealHand}>Deal Hand</button> : null
  let dealFlop = (props.flopStatus === "blank" && props.handStatus !== "blank") ?
  <button className="controls-button" onClick={props.dealBoard}>Deal Flop</button> : null
  let dealTurn = (props.turnStatus === "blank" && props.flopStatus !== "blank" ) ?
  <button className="controls-button" onClick={props.dealBoard}>Deal Turn</button> : null
  let dealRiver = (props.riverStatus === "blank" && props.turnStatus !== "blank") ?
  <button className="controls-button" onClick={props.dealBoard}>Deal River</button> : null
  let handComplete = (props.riverStatus !== "blank") ?
  <button disabled className="hand-complete controls-button">Hand Complete</button> : null

  return(
    <div>
      <br/>
      <button className="controls-button" onClick={props.shuffle}>Reset Hand</button>
      {dealHand}{dealFlop}{dealTurn}{dealRiver}{handComplete}
    </div>
  );
}

export default Controls;
