import React from "react";
import PropTypes from "prop-types";

import Card from "../Card/Card.js";

const Hand = ({ handCards }) => {
  return (
    <div className="hand">
      <div className="hand-card">
        <Card name={handCards[0].name} />
      </div>
      <div className="hand-card">
        <Card name={handCards[1].name} />
      </div>
    </div>
  );
};
Hand.propTypes = {
  handCards: PropTypes.array.isRequired
};

export default Hand;
