import React, { PureComponent } from "react";
import { Route, Link } from "react-router-dom";
import RoutingMap from './RouteMap';

class Routing extends PureComponent {
    render() {
        return (
            <>
                <header>
                    <Link to="/1">1</Link>
                    <Link to="/2">2</Link>
                </header>
                <section>
                    {RoutingMap.map(({ path, component: Component, exact }) => <Route exact={exact} path={path} component={Component}/>)}
                </section>
            </>
        );
    }
}

export default Routing;
