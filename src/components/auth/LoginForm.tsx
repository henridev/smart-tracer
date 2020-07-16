import React, { Fragment } from "react";
import "./LoginForm.css";
import {
  makeStyles,
  withStyles,
  createStyles,
  Theme,
  fade,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { FormControl, InputLabel, InputBase } from "@material-ui/core";

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

const useStyles = makeStyles((theme: Theme) => ({
  margin: {
    marginTop: theme.spacing(2),
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <Grid container alignItems="center" direction="column">
        <FormControl>
          <InputLabel shrink htmlFor="bootstrap-input">
            Identifiant
          </InputLabel>
          <Input id="bootstrap-input" />
        </FormControl>
        <FormControl>
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
        alignItems="center"
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
    </form>
  );
}
