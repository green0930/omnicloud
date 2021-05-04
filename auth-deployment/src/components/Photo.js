import React, {useState} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {makeStyles} from '@material-ui/core/styles'
// import media from '../media';

const useStyles = makeStyles({
    title: {
        display: 'flex',
        flexDirection: 'column',
        color: 'default'
    },
    icons: {
        display: 'flex',
        padding: '0 1rem',
        fontSize: '1rem'
    }
}
)

export const Photo = (props) => {
  const classes = useStyles()
  const {photo} = props
  const [favorite, setFavorite] = useState(false)
  const FavoriteFn = () => {
      setFavorite(!favorite)
  }

  return(
      <div className={classes.photo}>
          <img src={photo.url} width={"100%"} alt={`${photo.id}`}/>
          <div className={classes.title}>
              <p className='title'>{photo.title}</p>{" "}
              <div className={classes.icons}>
                  <h3>
                      <FavoriteIcon onClick={()=> FavoriteFn()}/>
                  </h3>
              </div>
          </div>
      </div>
  )
}