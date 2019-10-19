import FirstSection from "./components/atoms/FirstSection/FirstSection";
import SecondSection from "./components/atoms/SecondSection/SecondSection";
import changeMeta from "../../actions/changeMeta";
import MainLayout from "./layouts/Main";
import { Routes } from "../../types/route";

const RouteMap: Routes = [
    {
        path: "/1",
        component: FirstSection,
        actions: [changeMeta],
        layout: MainLayout
    },
    {
        path: "/2",
        component: SecondSection
    },
    {
        path: "/",
        component: SecondSection,
        exact: true
    }
];

export default RouteMap;
