import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Grid, TextField, Button, Paper } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "400px", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Test = () => {
  const classes = useStyles();
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const handleInfoChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(input);

    const savedInfo = {
      title: input.title,
      content: input.content,
    };
    axios.post("http://localhost:9000/api/NewProfile", savedInfo);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={handleClick} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="fullName"
                type="text"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                value={input.fullName}
                onChange={handleInfoChange}
                // className={errors.email && "errorInput"}
              />
              <TextField
                name="title"
                type="text"
                required
                fullWidth
                id="title"
                label="Title"
                value={input.title}
                onChange={handleInfoChange}
                // className={errors.email && "errorInput"}
              />
              <TextField
                name="content"
                type="text"
                required
                fullWidth
                id="title"
                label="Content"
                value={input.content}
                onChange={handleInfoChange}
                // className={errors.email && "errorInput"}
              />
            </Grid>
          </Grid>
        </form>
        <Button className={classes.button} onClick={handleClick} variant="outlined" color="secondary">
          Add Info
        </Button>
      </Paper>
    </div>
  );
};
