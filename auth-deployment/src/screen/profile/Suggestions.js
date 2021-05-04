import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
        List,
        ListSubheader,
        ListItem,
        ListItemSecondaryAction,
        ListItemText,
        ListItemAvatar,
        Avatar,
        Switch,
        Grid,
        Paper,
}from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 220,
    maxWidth: 450,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '100%',
    maxWidth: '450'
  }
}));

const users = [
    {value:"Jessi"},
    {value:"Daniel"},
    {value: "Acsel"},
    {value: "Zach", },
    {value: "Haejin"},
]

export const Suggestions =() => {
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);
  // const [update, setUpdate] = useState(users)

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
    <List 
    subheader={<ListSubheader>Suggestions for you</ListSubheader>} 
    className={classes.root}>
        {users.map((value) => {
            const labelId = 'checkbox-list-secondary-label-$(value)'
            return(
                <ListItem key={value} button>
                    <ListItemAvatar>
                    <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value+ 1}.jpg`}
              />
                    </ListItemAvatar>
                 <ListItemText id={labelId} primary={ 'Users'}/>
                 <ListItemSecondaryAction>
                   <Switch
                     edge="end"
                     onChange={handleToggle(value)}
                     checked={checked.indexOf(value) !== -1}
                     inputProps={{ 'aria-labelledby': labelId}}
                     />
                </ListItemSecondaryAction>
              </ListItem>
            );
            })}
        </List>
        </Paper>
        </Grid>
        </Grid>
    );
}