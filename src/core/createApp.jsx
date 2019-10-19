import React from "react";
import Routing from "../components/Routing/Routing";

export default ({ route, reducers }) => ({
    App: () => <Routing routingMap={route} />,
    reducers,
    routeMap: route
});
