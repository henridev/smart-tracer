import { ComponentType, FC } from "react";

export interface Route {
    path: string,
    key: string,
    Component: FC | ComponentType | any,
    exact?: boolean,
    routes?: Route[]
}

