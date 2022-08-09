import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>By Divyaswor Makai Shrestha</p>
        <h4>Visit my Socials</h4>
        <a href="https://medium.com/@makaidivyaswor" target="_blank">
          Medium
        </a>
        <a href="https://twitter.com/makaidivya" target="_blank">
          Twitter
        </a>
        <a href="https://diamondapp.com/u/makai" target="_blank">
          DeSo
        </a>
        <a
          target="_blank"
          href="https://www.buymeacoffee.com/makaidivyaswor"
          className="buy-me-a-coffee"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
          />
          <span>Buy me a coffee</span>
        </a>
      </header>
    </div>
  );
}

export default App;
