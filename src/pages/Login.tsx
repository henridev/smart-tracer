// import React from "react";
import LoginForm from "../components/auth/LoginForm";
// import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles, createStyles, Theme } from "@material-ui/core";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       height: 140,
//       width: 100,
//     },
//     control: {
//       padding: theme.spacing(2),
//     },
//   })
// );

// export default function Login() {
//   const classes = useStyles();

//   return (
//     <Container className={classes.control}>
//       <Grid
//         container
//         className={classes.root}
//         spacing={2}
//         justify="center"
//         alignItems="center"
//         direction="column"
//       >
//         <Grid item xs={11}>
//           <Grid
//             container
//             direction="column"
//             justify="center"
//             alignItems="center"
//             spacing={2}
//           >
//             <Grid item xs={12}>
// <Typography variant="h5" component="h5" gutterBottom>
//   Bienvenue sur <br />
//   Smart Tracer
// </Typography>
//             </Grid>
//             <Grid item xs={12}>
// <Typography variant="subtitle1" gutterBottom>
//   Merci de vous identifier
// </Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={11}>
//           <Grid
//             container
//             component="form"
//             noValidate
//             autoComplete="off"
//             direction="column"
//             justify="center"
//             alignItems="center"
//             spacing={2}
//           >
//             <LoginForm />
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

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

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  };

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
