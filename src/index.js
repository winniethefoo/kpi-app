import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

(function(w, d, s, g, js, fjs) {
  g = w.gapi || (w.gapi = {});
  g.analytics = {
    q: [],
    ready: function(cb) {
      this.q.push(cb);
    }
  };
  js = d.createElement(s);
  fjs = d.getElementsByTagName(s)[0];
  js.src = "https://apis.google.com/js/platform.js";
  fjs.parentNode.insertBefore(js, fjs);
  js.onload = function() {
    g.load("analytics");
  };
})(window, document, "script");

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
