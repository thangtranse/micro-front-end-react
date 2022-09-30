import logo from "./logo.svg";
import "./App.css";
import MicroApp from "./microServices/microApp";
import { createBrowserHistory } from "history";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          MAIN APP
        </a>
      </header>
      <MicroApp history={history} host={"http://localhost:4001"} name="Counter" />
      <br />
    </div>
  );
}

export default App;
