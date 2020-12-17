import "./AppStyle.css";
import "./Components/styles.css";

import React from "react";

const quotes = [
  {
    text: "Belief is harder to shake than knowledge.",
    author: "Adolf Hittler",
  },
  {
    text: "Greatness is a road leading towards the unknown.",
    author: "Charles de Gaulle",
  },
  {
    text: "Success is the sweetest revenge.",
    author: "Vaneesa Wiliams",
  },
  {
    text:
      "Success seems to be largely a matter of hanging on after others have let go.",
    author: "William Feather",
  },
  {
    text: "Fatigue makes cowards of us all.",
    author: "Vince Lombardi",
  },
  {
    text: "There is a courage of happiness as well as a courage of sorrow.",
    author: "Maurice Maeterlinck",
  },
];

var initialQuote = quotes[Math.floor(Math.random() * quotes.length)];

const url = `https://twitter.com/intent/tweet?text=`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: initialQuote.text,
      author: initialQuote.author,
    };
    this.handleQuote = this.handleQuote.bind(this);
  }

  handleQuote() {
    var item = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState(() => ({
      text: item.text,
      author: item.author,
    }));
  }

  render() {
    return (
      <div id="quote-box">
        <h3 id="text">{this.state.text}</h3>
        <p id="author">{this.state.author}</p>
        <div>
          <button id="new-quote" onClick={() => this.handleQuote()}>
            New Quote
          </button>

          <a
            class="twitter-share-button"
            id="tweet-quote"
            href={url + this.state.text}
            data-text={this.state.text}
          >
            Tweet
          </a>
        </div>
      </div>
    );
  }
}

export default App;
