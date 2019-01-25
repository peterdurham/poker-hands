import React from "react";
import PropTypes from "prop-types";

const Controls = props => {
  let dealHand =
    props.handStatus === "blank" ? (
      <button
        data-testid="dealhand-button"
        className="controls-button"
        onClick={props.dealHand}
      >
        Deal Hand
      </button>
    ) : null;
  let dealFlop =
    props.flopStatus === "blank" && props.handStatus !== "blank" ? (
      <button
        data-testid="dealflop-button"
        className="controls-button"
        onClick={props.dealBoard}
      >
        Deal Flop
      </button>
    ) : null;
  let dealTurn =
    props.turnStatus === "blank" && props.flopStatus !== "blank" ? (
      <button
        data-testid="dealturn-button"
        className="controls-button"
        onClick={props.dealBoard}
      >
        Deal Turn
      </button>
    ) : null;
  let dealRiver =
    props.riverStatus === "blank" && props.turnStatus !== "blank" ? (
      <button
        data-testid="dealriver-button"
        className="controls-button"
        onClick={props.dealBoard}
      >
        Deal River
      </button>
    ) : null;
  let handComplete =
    props.riverStatus !== "blank" ? (
      <button
        data-testid="handcomplete-button"
        disabled
        className="hand-complete controls-button"
      >
        Hand Complete
      </button>
    ) : null;

  return (
    <div>
      <br />
      <button className="controls-button" onClick={props.shuffle}>
        Reset Hand
      </button>
      {dealHand}
      {dealFlop}
      {dealTurn}
      {dealRiver}
      {handComplete}
    </div>
  );
};
Controls.propTypes = {
  handStatus: PropTypes.string,
  dealHand: PropTypes.func,
  dealBoard: PropTypes.func,
  flopStatus: PropTypes.string,
  turnStatus: PropTypes.string,
  riverStatus: PropTypes.string,

  shuffle: PropTypes.func
};

export default Controls;
