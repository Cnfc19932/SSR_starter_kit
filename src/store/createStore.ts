import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/index";

export default (preloadedState = {}) => {
    const store = createStore(reducers, preloadedState, applyMiddleware(thunk));

    return store;
};
