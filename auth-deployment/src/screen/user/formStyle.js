import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
      },
      form: {
        width: "400px", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      photo: {
          margin: theme.spacing(2),
          display: 'flex',
          justifyContent: 'center'
      },
      submit: {
        margin: 'auto',
        marginTop: theme.spacing(1),
        display: 'inline-flex',
        padding: theme.spacing(1)
      },
}))