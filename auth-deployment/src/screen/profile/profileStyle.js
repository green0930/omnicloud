import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    haeder: {
      padding: theme.spacing(1),
      margin: 'auto',
      maxWidth: 600,
    },
    image: {
      width: 200,
      height: 150,
    },
    img: {
      margin: 'auto',
      display: 'block',
      borderRadius: '10%',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    icon: {
      direction:"row" ,
      display:"flex" ,
      flexDirection:'row',
      margin: theme.spacing(0),
      justifyContent:'space-between',
      alignItems:"center"
    }
  }));