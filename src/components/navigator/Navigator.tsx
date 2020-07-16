//#region IMPORTS
import React, { useState, Fragment } from "react";
import ROUTES from "../../routes/routes";
import { Link } from "react-router-dom";
import { Route } from "../../interfaces/route";
import "./Navigator.css";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Collapse } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
//#endregion

const DRAWERWIDTH = 240;

//#region material styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    paddingRight: 20,
    overflowY: "hidden",
    boxSizing: "content-box",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundImage: "linear-gradient(to left, #fdddd , #ffcdd);",
  },
  appBarShift: {
    marginLeft: DRAWERWIDTH,
    width: `calc(100% - ${DRAWERWIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: DRAWERWIDTH,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: DRAWERWIDTH,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
}));
//#endregion

//#region prop-types
type NavigatorProps = {
  children: any;
};
type RenderRouteLinkProps = { route: Route };
type RenderRouteListProps = { routes: Route[]; level: number };
type Dict = { [key: string]: boolean };
//#endregion

export default function Navigator(props: NavigatorProps) {
  const [open, setOpen] = useState(false);
  const [isOpenTable, setisOpenTable] = useState(
    ROUTES.reduce<Dict>((map, currRoute: Route) => {
      const key = currRoute.key;
      map[key] = false;
      return map;
    }, {})
  );

  const classes = useStyles();
  const theme = useTheme();

  const handleDrawer = () => setOpen(!open);
  const handleCollapseClick = (key: string) => {
    setisOpenTable({ ...isOpenTable, [key]: !isOpenTable[key] });
  };
  const handleLogout = () => { };

  function RenderRouteLink({ route }: RenderRouteLinkProps) {
    const Icon = route.Icon;
    return (
      <Link to={route.path}>
        <ListItem button>
          <ListItemIcon>{Icon ? <Icon /> : <ListAltIcon />}</ListItemIcon>
          <ListItemText primary={route.key} />
        </ListItem>
      </Link>
    );
  }

  /**
   * called once in Navigator component for level 0 routes
   * then recursively called for any nested routes
   *
   */
  function RenderRouteList({ routes, level }: RenderRouteListProps) {
    return (
      <List>
        {routes.map((route: Route, i: number) => {
          const key: string = route.key;
          const nestedRoutes = route.routes;
          return nestedRoutes ? (
            <Fragment key={i}>
              <ListItem button onClick={() => handleCollapseClick(key)}>
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary={route.key} />
                {isOpenTable[key] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={isOpenTable[key]} timeout="auto" unmountOnExit>
                <RenderRouteList routes={nestedRoutes} level={level++} />
              </Collapse>
            </Fragment>
          ) : (
              <RenderRouteLink key={i} route={route} />
            );
        })}
      </List>
    );
  }

  function RenderAccountLinks() {
    return (
      <List>
        {["profile", "logout"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <AccountCircleIcon />
              ) : (
                  <ExitToAppIcon onClick={handleLogout} />
                )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Smart-Tracer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawer}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
                <ChevronLeftIcon />
              )}
          </IconButton>
        </div>
        <Divider />
        <RenderRouteList routes={ROUTES} level={0} />
        <Divider />
        <RenderAccountLinks />
      </Drawer>
      <main className={`${classes.content} content`}>{props.children}</main>
    </div>
  );
}
