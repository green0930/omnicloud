import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {makeStyles} from '@material-ui/core/styles'
import {Photo} from './Photo'

const PHOTO_URL = photoId => `https://picsum.photos/id/${photoId}/200/300`
const PHOTO_LIST_URL = "https://picsum.photos/list&limit=10"

const useStyles = makeStyles ({
    photos :{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '8px'
    }
})

export const Photos = () => {
    const classes = useStyles()
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
            const results = await axios.get(PHOTO_LIST_URL)
            setPhotos(results.data)
            } catch(err){
                console.log("data not found", err)
            }    
        }
        fetchData()
},[])
console.log(photos)
    return(
        <div className={classes.photos}>
            {photos.map((photo, index) => (
				<Photo key={index} index={index} photo={photo} />
			))}
        </div>
    )
}