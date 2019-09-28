import React, { PureComponent } from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";

class Routing extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <header>
                    <Link to="/1" />
                    <Link to="/2" />
                    <Link to="/3" />
                </header>
                <section></section>
            </BrowserRouter>
        );
    }
}

export default Routing;
