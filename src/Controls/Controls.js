import React from "react";
import PropTypes from "prop-types";

const Controls = ({
  handStatus,
  boardStatus,
  dealHand,
  dealBoard,
  shuffle
}) => {
  const flopStatus = boardStatus[0].name;
  const turnStatus = boardStatus[3].name;
  const riverStatus = boardStatus[4].name;

  return (
    <div>
      <br />
      <button className="controls-button" onClick={shuffle}>
        Reset Hand
      </button>

      {handStatus === "blank" && (
        <button className="controls-button" onClick={dealHand}>
          Deal Hand
        </button>
      )}

      {flopStatus === "blank" && handStatus !== "blank" && (
        <button className="controls-button" onClick={dealBoard}>
          Deal Flop
        </button>
      )}

      {turnStatus === "blank" && flopStatus !== "blank" && (
        <button className="controls-button" onClick={dealBoard}>
          Deal Turn
        </button>
      )}

      {riverStatus === "blank" && turnStatus !== "blank" && (
        <button className="controls-button" onClick={dealBoard}>
          Deal River
        </button>
      )}

      {riverStatus !== "blank" && (
        <button disabled className="hand-complete controls-button">
          Hand Complete
        </button>
      )}
    </div>
  );
};
Controls.propTypes = {
  handStatus: PropTypes.string.isRequired,
  dealHand: PropTypes.func.isRequired,
  dealBoard: PropTypes.func.isRequired,
  boardStatus: PropTypes.array.isRequired,
  shuffle: PropTypes.func.isRequired
};

export default Controls;
