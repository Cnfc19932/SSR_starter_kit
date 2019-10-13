import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import createStore from './store/createStore';
import { Provider } from 'react-redux'

// @ts-ignore
const preloadedState = window.__PRELOADED_STATE__;
// @ts-ignore
delete window.__PRELOADED_STATE__;

const store = createStore(preloadedState);
// @ts-ignore
window.store = store;

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);
