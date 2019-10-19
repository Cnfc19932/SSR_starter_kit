import React, { PureComponent } from "react";
import { Route } from "react-router-dom";
import PageWrapper from "../../core/PageWrapper";
import isServer from "../../utils/isServer";
import MainLayout from "../layouts/Main";
import { Routes } from "../../types/route";

const defaultLayout = MainLayout;

type Props = {
    routingMap: Routes;
};

class Routing extends PureComponent<Props> {
    render() {
        const { routingMap } = this.props;

        return (
            <>
                {routingMap.map(
                    ({
                        path,
                        component: PageComponent,
                        exact,
                        actions = [],
                        layout: Layout = defaultLayout
                    }) => (
                        <Route
                            exact={exact}
                            path={path}
                            component={() => {
                                console.log("isServer", isServer());

                                return (
                                    <PageWrapper actions={actions}>
                                        <Layout>
                                            <PageComponent />
                                        </Layout>
                                    </PageWrapper>
                                );
                            }}
                        />
                    )
                )}
            </>
        );
    }
}

export default Routing;
