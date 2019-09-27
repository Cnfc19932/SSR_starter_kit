import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

export default () => {
    const content = ReactDOMServer.renderToString(<App />);

    return `
        <!DOCTYPE html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="/client.bundle.js"></script>
            </body>
        </html>
    `;
}