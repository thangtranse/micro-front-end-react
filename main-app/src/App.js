import logo from "./logo.svg";
import "./App.css";
import MicroApp from "./microServices/microApp";
import { createBrowserHistory } from "history";

const defaultHistory = createBrowserHistory();
const MICRO_APP_NAME = process.env.REACT_APP_MICRO_APP_NAME
const MICRO_APP_URL = process.env.REACT_APP_MICRO_APP_URL

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
      <MicroApp history={history} host={MICRO_APP_URL} name={MICRO_APP_NAME} />
      <br />
    </div>
  );
}

export default App;
