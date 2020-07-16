//#region IMPORTS
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import LoginForm from "../components/auth/LoginForm";
import Typography from "@material-ui/core/Typography";
//#endregion

//#region STYLING
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      border: `5px solid ${theme.palette.primary.main}`,
    },
    container: {
      width: "inherit",
    },
    control: {
      marginTop: theme.spacing(4),
    },
  })
);
//#endregion

export default function LoginPage() {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      classes={{
        root: classes.root,
        container: classes.container,
      }}
    >
      <Grid item xs={12}>
        <Grid item>
          <Typography variant="h5" component="h5" gutterBottom>
            Bienvenue sur <br />
            Smart Tracer
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Merci de vous identifier
          </Typography>
        </Grid>
        <Grid item className={classes.control}>
          <LoginForm />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        background
      </Grid>
    </Grid>
  );
}
