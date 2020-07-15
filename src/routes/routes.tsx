import React from "react";
import { Route as Route_, Switch } from "react-router-dom";
import { Route } from "../interfaces/route";
import Navigator from "../components/navigator/Navigator";

//#region routing config
const ROUTES: Route[] = [
  { path: "/", key: "ROOT", exact: true, Component: () => <h1>Login</h1> },
  {
    path: "/smart-tracer",
    key: "APP",
    Component: RenderRoutes,
    routes: [
      {
        path: "/smart-tracer",
        key: "APP_ROOT",
        exact: true,
        Component: () => (
          <Navigator>
            <h1>App Index</h1>
          </Navigator>
        ),
      },
      {
        path: "/smart-tracer/page-1",
        key: "APP_PAGE_1",
        exact: true,
        Component: () => (
          <Navigator>
            <h1>App Page</h1>
          </Navigator>
        ),
      },
    ],
  },
];
//#endregion

//#region component used for base and nested routes if defined as Component in route config
function RouteWithSubRoutes(route: Route) {
  const { Component, path, exact, routes } = route;
  return (
    <Route_
      path={path}
      exact={exact}
      render={(props) => <Component {...props} routes={routes} />}
    />
  );
}
//#endregion

//#region renderer of all routes used in app
export function RenderRoutes({ routes }: { routes: Route[] }) {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes
          {...route}
          key={route.key}
          path={route.path}
          Component={route.Component}
        />
      ))}
      <Route_ component={() => <h1>404</h1>} />
    </Switch>
  );
}
//#endregion

export default ROUTES;
