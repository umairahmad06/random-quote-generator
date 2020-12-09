import "./styles.css";

import React from "react";

function Quote(props) {
  return (
    <div id="quote-container">
      <h3 id="text">{props.text}</h3>
    </div>
  );
}

export default Quote;
