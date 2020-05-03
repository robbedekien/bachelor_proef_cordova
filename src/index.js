import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { watchMusic } from "./store/sagas/index.saga";
import musicReducer from "./store/reducers/music.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  musicReducer,
  compose(applyMiddleware(thunkMiddleware, sagaMiddleware))
);

sagaMiddleware.run(watchMusic);

const renderReactDom = () => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    document.getElementById("root")
  );
};

if (window.cordova) {
  document.addEventListener(
    "deviceready",
    () => {
      renderReactDom();
    },
    false
  );
} else {
  renderReactDom();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
