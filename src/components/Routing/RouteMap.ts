import FirstSection from "../atoms/FirstSection/FirstSection";
import SecondSection from "../atoms/SecondSection/FirstSection";
import { ComponentClass } from "react";
import changeMeta from "../../actions/changeMeta";

const RouteMap: {path: string; component: ComponentClass; exact?: boolean; actions?: any[]}[] = [
    {
        path: '/1',
        component: FirstSection,
        actions: [changeMeta],
    },
    {
        path: '/2',
        component: SecondSection,
    },
    {
        path: '/',
        component: SecondSection,
        exact: true,
    }
];

export default RouteMap;
