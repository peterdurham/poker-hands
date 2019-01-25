import React from "react";
import PropTypes from "prop-types";

import Card from "../Card/Card.js";

const Hand = props => {
  return (
    <div className="hand">
      <div className="hand-card">
        <Card name={props.hand1} />
      </div>
      <div className="hand-card">
        <Card name={props.hand2} />
      </div>
    </div>
  );
};
Hand.propTypes = {
  hand1: PropTypes.string,
  hand2: PropTypes.string
};

export default Hand;
