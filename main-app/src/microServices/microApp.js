import React from "react";

const MicroApp = ({ name, host, history }) => {

  React.useEffect(() => {
    const appID = `app_id_${name}`;

    const renderMicroApp = () => {
      window[`render${name}`](`${name}-container`, history);
    };

    if (document.getElementById(appID)) {
      renderMicroApp();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = appID;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = () => {
          renderMicroApp();
        };
        document.head.appendChild(script);
      });

    return () => {
      console.log('Micro APP', window)
      window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };
  });

  return <main id={`${name}-container`} />;
};

MicroApp.defaultProps = {
  document,
  window,
};
export default MicroApp;
