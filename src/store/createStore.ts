import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default (reducers, preloadedState = {}) => {
    const store = createStore(reducers, preloadedState, applyMiddleware(thunk));

    return store;
};
