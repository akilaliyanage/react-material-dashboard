import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import MediaCard from "./card";
import BarChart from "./bar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    //height: 140,
    //width: 'auto',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Paper className={classes.paper}>
          <MediaCard />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Paper className={classes.paper}>
                  <BarChart/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Paper className={classes.paper}>
          <MediaCard />
        </Paper>
      </Grid>
    </Grid>
  );
}
