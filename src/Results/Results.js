import React from "react";
import PropTypes from "prop-types";

const Results = ({ bestHand }) => {
  return (
    <div className="results">
      <p>Best Hand: {bestHand}</p>
    </div>
  );
};
Results.propTypes = {
  bestHand: PropTypes.string
};

export default Results;
