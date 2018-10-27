import React from 'react';

import Card from '../Card/Card.js';

const Hand = (props) => {
  return(
    <div className="hand">
      <div className="hand-card"><Card name={props.hand1} /></div>
      <div className="hand-card"><Card name={props.hand2} /></div>
    </div>
  );
}

export default Hand;
