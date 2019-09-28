import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";
import { StaticRouter } from "react-router-dom";

export default (path) => {
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={path}>
            <App />
        </StaticRouter>
    );

    return `
        <!DOCTYPE html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="/client.bundle.js"></script>
            </body>
        </html>
    `;
};
