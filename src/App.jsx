/* eslint-disable no-unused-vars */
import "./App.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import quotes from "./quotes.json";
import { useState } from "react";

// Functions

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

// APP
function App() {
  const [quote, setQuote] = useState(getRandomQuote);
  const handleQuote = () => {
    setQuote(getRandomQuote());
  };
  return (
    <main id="container">
      <section id="quote-box">
        <div id="quote-text">
          <FaQuoteLeft className="icon" />
          <span id="text">{quote.quote}</span>
          <FaQuoteRight className="icon" />
        </div>
        <div id="quote-author">
          <span id="author">{quote.author}</span>
        </div>
        <div id="buttons">
          <a
            href={`https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`}
            id="tweet-quote"
          >
            <FaTwitter />
          </a>
          <button id="new-quote" onClick={handleQuote}>
            Next Quote
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
