import React, { PureComponent } from "react";
import { Route, Link } from "react-router-dom";
import RoutingMap from "./RouteMap";
import PageWrapper from "../../core/PageWrapper";
import isServer from "../../utils/isServer";
import MainLayout from "../layouts/Main";

const defaultLayout = MainLayout;

class Routing extends PureComponent {
    render() {
        return (
            <>
                {RoutingMap.map(({ path, component: PageComponent, exact, actions = [], layout: Layout = defaultLayout }) => (
                    <Route
                        exact={exact}
                        path={path}
                        component={() => {
                            console.log('isServer', isServer());

                            return (
                                <PageWrapper
                                    actions={actions}
                                >
                                    <Layout>
                                        <PageComponent/>
                                    </Layout>
                                </PageWrapper>
                            )
                        }}
                    />
                ))}
            </>
        );
    }
}

export default Routing;
