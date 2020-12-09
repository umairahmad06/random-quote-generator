import "./styles.css";

import Author from "./Author";
import Footer from "./Footer";
import Quote from "./Quote";
import React from "react";

export default function QuoteBox(props) {
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
  var item = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div id="quotebox">
      <Quote text={item.text} />
      <Author authorName={item.author} />
      <Footer />
    </div>
  );
}
