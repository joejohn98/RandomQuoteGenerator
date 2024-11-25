import {  useState } from "react";
import { quotes } from "./data";

const RandomQuote = () => {
  const [quote, setQuote] = useState({});

  const handleRandomQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomQuote];
    setQuote(quote);
  };

  return (
    <div>
      <h2>Random Quotes</h2>
      <p>
        <strong>{quote.quote}</strong>
      </p>
      <p>{quote.author}</p>
      <button onClick={handleRandomQuote}>Generate Quote</button>
    </div>
  );
};

export default RandomQuote;
