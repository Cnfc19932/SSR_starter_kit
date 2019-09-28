import FirstSection from "../atoms/FirstSection/FirstSection";
import SecondSection from "../atoms/SecondSection/FirstSection";
import { ComponentClass } from "react";

const RouteMap: {path: string; component: ComponentClass; exact?: boolean; }[] = [
    {
        path: '/1',
        component: FirstSection,
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
