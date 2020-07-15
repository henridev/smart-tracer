//#region Imports
import React, { ReactPropTypes } from "react";
import { Route as RouteDom, Switch, Redirect } from "react-router-dom";
import { Route } from "../interfaces/route";
import Navigator from "../components/navigator/Navigator";
import Login from "../components/auth/Login";
//#endregion Imports

interface RenderRoutesProps {
  routes: Route[];
}

const authenticated = true;

//#region routing config
const ROUTES: Route[] = [
  {
    path: "/",
    key: "ROOT",
    displayName: "login",
    exact: true,
    Component: () => <Login />,
  },
  {
    path: "/smart-tracer",
    key: "APP",
    displayName: "smart-tracer",
    Component: (props: RenderRoutesProps) => {
      if (!authenticated) {
        alert("You need to log in to access app routes");
        return <Redirect to={"/"} />;
      }
      return <RenderRoutes {...props} routes={props.routes} />;
    },
    routes: [
      {
        path: "/smart-tracer",
        key: "APP_ROOT",
        displayName: "home",
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
        displayName: "page 1",
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
    <RouteDom
      path={path}
      exact={exact}
      render={(props) => <Component {...props} routes={routes} />}
    />
  );
}
//#endregion

//#region renderer of all routes used in app
export function RenderRoutes({ routes }: RenderRoutesProps) {
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
      <RouteDom component={() => <h1>404</h1>} />
    </Switch>
  );
}
//#endregion

export default ROUTES;
