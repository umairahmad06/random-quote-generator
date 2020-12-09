import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const element = <FontAwesomeIcon icon={faTwitter} size="2x" />;

function Footer() {
  return (
    <div>
      <button id="new-quote" onClick={() => alert("New Quote")}>
        New Quote
      </button>
      {element}
    </div>
  );
}

export default Footer;
