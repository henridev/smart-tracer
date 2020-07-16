import React from "react";
import "./LoginForm.css";
import {
  makeStyles,
  withStyles,
  createStyles,
  Theme,
  fade,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { FormControl, InputLabel, InputBase } from "@material-ui/core";

const TxtField = withStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(1),
    marginLeft: 0,
    width: "100%",
  },
}))(TextField);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

const Input = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(2),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.common.white,
      border: "1px solid #ced4da",
      fontSize: 16,
      width: "auto",
      padding: "10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  })
)(InputBase);

const useStyles2 = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(2),
    "& > *": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

export default function LoginForm() {
  const classes2 = useStyles2();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container item xs={12} justify="center">
        <Grid container item xs={7} spacing={1} justify="center">
          <div className={classes2.root}>
            <Grid container xs={12}>
              <Grid item>
                <Typography variant="h5" component="h5" gutterBottom>
                  Bienvenue sur <br />
                  Smart Tracer
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Merci de vous identifier
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid container item xs={7} spacing={1} justify="center">
          <form className={classes2.root} noValidate autoComplete="off">
            <Grid container xs={12}>
              <Grid item>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Identifiant
                  </InputLabel>
                  <Input id="bootstrap-input" />
                </FormControl>
                <FormControl className={classes.margin}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Mot de passe
                  </InputLabel>
                  <Input id="bootstrap-input" />
                </FormControl>
              </Grid>
              <Grid
                className={classes.margin}
                item
                container
                justify="space-between"
              >
                <Button
                  size="small"
                  variant="contained"
                  style={{ textTransform: "none" }}
                >
                  Annuler
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ textTransform: "none" }}
                >
                  Valider
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Grid container item xs={12} justify="center"></Grid>
    </div>
  );
}
