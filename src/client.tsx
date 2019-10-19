import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import createStore from "./store/createStore";
import { Provider } from "react-redux";
import StyleContext from "isomorphic-style-loader/StyleContext";
import projectsMap from "./projectsMap";

// Подменяется webpack
const { App, reducers } = projectsMap[process.env.APP_ID];

// @ts-ignore
const preloadedState = window.__PRELOADED_STATE__;
// @ts-ignore
delete window.__PRELOADED_STATE__;

const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss());

    return () => removeCss.forEach(dispose => dispose());
};

const store = createStore(reducers, preloadedState);
// @ts-ignore
window.store = store;

ReactDOM.hydrate(
    <StyleContext.Provider value={{ insertCss }}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StyleContext.Provider>,
    document.querySelector("#root")
);
