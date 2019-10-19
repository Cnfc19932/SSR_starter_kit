import { ComponentClass } from "react";

interface Route {
    path: string;
    component: ComponentClass;
    exact?: boolean;
    layout?: ComponentClass;
    actions?: any[];
}

export type Routes = Route[];
