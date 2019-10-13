import React, { PureComponent } from "react";
import { Route, Link } from "react-router-dom";
import RoutingMap from "./RouteMap";
import PageWrapper from "../../core/PageWrapper";
import isServer from "../../utils/isServer";

class Routing extends PureComponent {
    render() {
        return (
            <>
                <header>
                    <Link to="/1">1</Link>
                    <Link to="/2">2</Link>
                </header>
                <section>
                    {RoutingMap.map(({ path, component: Component, exact, actions = [] }) => (
                        <Route
                            exact={exact}
                            path={path}
                            component={() => {
                                console.log('isServer', isServer());

                                return (
                                    <PageWrapper
                                        actions={actions}
                                    >
                                        <Component/>
                                    </PageWrapper>
                                )
                            }}
                        />
                    ))}
                </section>
            </>
        );
    }
}

export default Routing;
