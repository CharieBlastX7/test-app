import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#000000",
        fontFamily: "sans-serif",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      {" "}
      {/* Use className instead of class */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: "blue" }}>Hello world</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
