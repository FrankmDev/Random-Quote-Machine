import "./App.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import quotes from "./quotes.json";

// Functions

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
// APP
function App() {
  return (
    <main id="container">
      <section id="quote-box">
        <div id="quote-text">
          <FaQuoteLeft />
          <span id="text">
            Life isn’t about getting and having, it’s about giving and being.
          </span>
          <FaQuoteRight />
        </div>
        <div id="quote-author">
          <p id="author">Kevin Kruse</p>
        </div>
        <div id="buttons">
          <a href="#" id="tweet-quote">
            <FaTwitter />
          </a>
          <button id="new-quote">Next Quote</button>
        </div>
      </section>
    </main>
  );
}

export default App;
