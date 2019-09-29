import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";
import { StaticRouter } from "react-router-dom";
import createStore from './store/createStore';

export default path => {
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={path}>
            <App />
        </StaticRouter>
    );

    const store = createStore();

    const { title, description } = store.getState().application.meta;

    return `
        <!DOCTYPE html>
            <head>
                <title>${title}</title>
                <meta name="description" content="${description}">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/client.bundle.js"></script>
            </body>
        </html>
    `;
};