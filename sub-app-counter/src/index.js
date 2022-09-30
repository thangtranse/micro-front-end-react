import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const APP_NAME = "Counter";
const RENDER_SUB_APP = `render_${APP_NAME}`;
const UNMOUNT_SUB_APP = `unmount_${APP_NAME}`;

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

window[RENDER_SUB_APP] = (containerId, history) => {
  ReactDOM.createRoot(document.getElementById(containerId)).render(
    <App history={history} />
  );
};

window[UNMOUNT_SUB_APP] = (containerId) => {
  ReactDOM.createRoot(
    document.getElementById(containerId)
  ).unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById(`${APP_NAME}-container`)) {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}
