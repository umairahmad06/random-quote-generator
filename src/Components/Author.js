import React from "react";

function Author(props) {
  return (
    <div id="author-box">
      <p id="author">{props.authorName}</p>
    </div>
  );
}

export default Author;
