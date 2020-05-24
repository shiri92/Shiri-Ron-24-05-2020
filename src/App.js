import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter>
          <Header />
          <Router />
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
