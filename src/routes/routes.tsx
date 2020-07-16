//#region IMPORTS
import React from "react";
import { Route as RouteDom, Switch, Redirect } from "react-router-dom";
import { Route } from "../interfaces/route";

import Login from "../pages/Login";
import Confirmation from "../pages/Confirmation";
import Main from "../pages/Main";
import Selection from "../pages/Selection";
import Succes from "../pages/Success";
import NotFound from "../pages/404";
//#endregion

interface RenderRoutesProps {
  routes: Route[];
}

const authenticated = true;

//#region routing config
const ROUTES: Route[] = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    Component: () => <Login />,
  },
  {
    path: "/smart-tracer",
    key: "APP",
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
        exact: true,
        Component: () => <Main />,
      },
      {
        path: "/smart-tracer/selection",
        key: "APP_SELECTION",
        exact: true,
        Component: () => <Selection />,
      },
      {
        path: "/smart-tracer/confirmation",
        key: "APP_CONFIRM",
        exact: true,
        Component: () => <Confirmation />,
      },
      {
        path: "/smart-tracer/succes",
        key: "APP_SUCCES",
        exact: true,
        Component: () => <Succes />,
      },
    ],
  },
  {
    path: "/login",
    key: "LOGIN",
    exact: true,
    Component: () => <Redirect to={"/"} />,
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
      <RouteDom component={() => <NotFound />} />
    </Switch>
  );
}
//#endregion

export default ROUTES;
