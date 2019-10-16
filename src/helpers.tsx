import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";
import { StaticRouter } from "react-router-dom";
import { Provider } from 'react-redux'

export default (path, store) => {
    const content = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter location={path}>
                        <App />
                </StaticRouter>
            </Provider>
    );


    const { title, description } = store.getState().application.meta;

    const preloadedState = store.getState();

    return `
        <!DOCTYPE html>
            <head>
                <title>${title}</title>
                <meta name="description" content="${description}">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
                <div id="root">${content}</div>
                 <script>
                      // WARNING: See the following for security issues around embedding JSON in HTML:
                      // http://redux.js.org/recipes/ServerRendering.html#security-considerations
                      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                    /</g,
                    '\\u003c'
                )}
                    </script>
                <script src="/client.bundle.js"></script>
            </body>
        </html>
    `;
};