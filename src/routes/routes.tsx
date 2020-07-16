//#region Imports
import React from "react";
import { Route as RouteDom, Switch, Redirect } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from "@material-ui/icons/Assignment";
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
        Icon: (props: any) => <HomeIcon {...props} />,
        Component: () => (
          <Navigator>
            <h1>App Index</h1>
          </Navigator>
        ),
      },
      {
        path: "/smart-tracer/qr-scanner",
        key: "APP_QR_SCANNER",
        exact: true,
        Icon: (props: any) => <AssignmentIcon {...props} />,
        Component: () => (
          <Navigator>
            <h1>App Page</h1>
          </Navigator>
        ),
      },
      {
        path: "/smart-tracer/picker",
        key: "APP_PICKER",
        exact: true,
        Icon: (props: any) => <AssignmentIcon {...props} />,
        Component: () => (
          <Navigator>
            <h1>App Page</h1>
          </Navigator>
        ),
      },
      {
        path: "/smart-tracer/confirmation",
        key: "APP_CONFIRM",
        exact: true,
        Icon: (props: any) => <AssignmentIcon {...props} />,
        Component: () => (
          <Navigator>
            <h1>App Page</h1>
          </Navigator>
        ),
      },
      {
        path: "/smart-tracer/succes",
        key: "APP_SUCCES",
        exact: true,
        Icon: (props: any) => <AssignmentIcon {...props} />,
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
      <RouteDom
        path="/login"
        exact={true}
        component={() => <Redirect to={"/"} />}
      />
      <RouteDom component={() => <h1>404</h1>} />
    </Switch>
  );
}
//#endregion

export default ROUTES;
