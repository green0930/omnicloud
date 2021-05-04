import React,{useState, useEffect} from 'react';
// import useForm from './useForm'
// import {themes} from './themes';
import {uploadPic} from '../../api'
import {
    TextField,
    Container,
    Button,
    Grid,
    CssBaseline,
    Avatar,
    Typography,
    Link,
    Input,
    Divider,
    Paper
}
 from '@material-ui/core'
 import Autocomplete from '@material-ui/lab/Autocomplete'
 import FaceIcon from '@material-ui/icons/Face';
 import SaveIcon from '@material-ui/icons/Save';
 import DeleteIcon from '@material-ui/icons/Delete';
 import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import {useStyles} from './formStyle'

const initialSkills = [
    {
      value: 'html',
      label: 'HTML',
    },
    {
      value: 'Javascript',
      label: 'JAVASCRIPT',
    },
    {
      value: 'React js',
      label: 'REACAT JS',
    },
    {
      value: 'Express',
      label: 'EXPRESS',
    },
    {
      value: 'MongoDB',
      label: 'MONGODB',
    },
    {
      value: 'Node js',
      label: 'NODE JS',
    },
  ];

  const initialSocial = [
    {
      value: 'LinkedIn',
      label: 'LinkedIn',
    },
    {
      value: 'Twitter',
      label: 'Twitter',
    },
    {
      value: 'Facebook',
      label: 'Facebook',
    },
    {
      value: 'Instagram',
      label: 'Instagram',
    },

    {
      value: 'Facebook',
      label: 'Facebook',
    },
  ];

  const initialContents = [
    {
      value: 'Tv',
      label: 'Tv',
    },
    {
      value: 'Web',
      label: 'Web',
    },
    {
      value: 'Radio',
      label: 'Radio',
    },
    {
      value: 'People',
      label: 'People',
    },
  ];


export const NewProfile = () => {
    const classes = useStyles()
    const [active, setActive] = useState(false)
    const [update, setUpdate] = useState([])
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null)
    const [social, setSocial] = useState(initialSocial)
    const [skills, setSkills] = useState(initialSkills)
    const [contents, setContents] = useState(initialContents)


    const [values, setValues] = useState({
        fullName:"",
        userName:"",
        location:"",
        email:"",
        title:"",
        about:"",
        experience: "",
        phone: 0,
        contents:[],
        skills:[],
        social:[],
        photo:[]
    })

    const handleInfoChange = (event) => {
        const {name, value} = event.target
        
        setValues(prevValues => {
            return{
                ...prevValues,
                [name]: value
            }
        })
    }


    const handleInfoSubmit = async (event) => {
        event.preventDefault()
        console.log(values)
        const body = JSON.stringify({
          fullName: values.fullName,
          userName: values.userName,
          location: values.location,
          email:values.email,
          title: values.title,
          about: values.about,
          experience: values.experience,
          phone: values.phone,
          contents: values.contents,
          skills: values.skills,
          social: values.social,
          photo: values.photo

        })
        await axios.post('/api/NewProfile', body, {
          header:{
            'Content-Type': 'application/json'
          }
        })
        .then(response => console.log(response.data))
        window.location = '/UserProfile'
      }

      // const submitForm = (event) => {
      //   event.preventDefault()
      //   console.log(selectedFile)
      //   uploadPic(selectedFile)
      // }

      const handleclear = ()  => {
        console.log('Is thi clear?')
        const updatedValues = values.filter(value => !value.compleated)
        setUpdate(updatedValues)
      }

      useEffect(() => {
        if (submitting) {
          if (Object.keys(errors).length === 0) {
            setSubmitting(values);
          }
          setSubmitting(false);
        }
      }, [errors]);

  return (
    // <Paper elevation={3}>
       <Container component="main" maxWidth="100%" whiteSpace="normal">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <FaceIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Profile
      </Typography>
      {/* <form className={classes.form} onSubmit={handleClick} noValidate> */}
      <form className={classes.form} onSubmit={handleInfoSubmit} noValidate>
        <Grid container spacing={5}>
          <Grid item xs={6} >
            <TextField
              autoComplete="fname"
              name="fullName"
              type="text"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              value={values.fullName}
              autoFocus
              onChange={handleInfoChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="userName"
              label="User Name"
              type="text"
              name="userName"
              value={values.userName}
              autoComplete="uname"
              onChange={handleInfoChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              name="email"
              value={values.email}
              autoComplete="email"
              onChange={handleInfoChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoComplete="location"
              name="location"
              type="text"
              required
              fullWidth
              id="location"
              label="Location"
              value={values.location}
              autoFocus
              onChange={handleInfoChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="phone"
              type="number"
              label="Phone"
              name="phone"
              value={values.phone}
              onChange={handleInfoChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="title"
              type="text"
              label="Title"
              name="title"
              value={values.title}
              onChange={handleInfoChange}
            />
          </Grid>
        <Grid item xs={12}>
        <TextField
          id="standard-full-width"
          label="About Me"
          type='text'
          multiline
          rowMax={5}
          name="about"
          value={values.about}
          placeholder="Tell us about yourself!!"
          fullWidth
          margin="none"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleInfoChange}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="standard-full-width"
          label="Experience"
          type='text'
          multiline
          rowMax={5}
          name="experience"
          value={values.experience}
          placeholder="Any special experience??"
          fullWidth
          margin="none"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleInfoChange}
        />
        </Grid>
        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <FormHelperText>Social Network</FormHelperText>
        <FormControl className={classes.formControl}>
        <Autocomplete
            multiple
            id="tags-standard"
            options={social}
            disableCloseOnSelect
            getOptionLabel={(option) => option.value}
            defaultValue={[social[0]]}
            renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            name="social"
            value={values.social}
            placeholder="Favorites"
            onChange={handleInfoChange}
          />
        )}
      />
        </FormControl>
        </Grid>
    <Grid item xs={6}>
    <FormHelperText>My Skill</FormHelperText>
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="textbox "id="margin-none"></InputLabel>
        <Autocomplete
        multiple
        id="tags-standard"
        options={skills}
        getOptionLabel={(option) => option.value}
        defaultValue={[skills[0]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            name="skills"
            value={values.skills}
            placeholder="Skills"
            onChange={handleInfoChange}
          />
        )}
      />
       </FormControl>
       </Grid>
      <Grid item xs={6}>
      <FormHelperText>Contents</FormHelperText>
        <FormControl className={classes.formControl}>
        <InputLabel id="margin-none"></InputLabel>
      <Autocomplete
        multiple
        id="tags-standard"
        options={contents}
        getOptionLabel={(option) => option.value}
        defaultValue={[contents[0]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Contents"
            name="contents"
            value={values.contents}
            onChange={handleInfoChange}
          />
        )}
        />
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl className={classes.photo}>
        <FormHelperText>Profile Photo</FormHelperText>
        <InputLabel htmlFor='my-file'></InputLabel>
        <Input 
            id="photo_id" 
            name='photo'
            value={values.photo}
            accept='image/*'
            type="file" 
            onChange={handleInfoChange}
            aria-describedby="file" />
        <FormHelperText id="file">Please upload your photo here.</FormHelperText>
        <Button
        type="submit" 
        color="primary" 
        disabled={submitting}
        className={classes.submit}
        onSubmit={(e)=> setSelectedFile(e.target.files[0])}
        onChange={handleInfoChange}
        startIcon={<InsertPhotoIcon />}
        >Upload</Button>
        </FormControl>
       </Grid>
      </Grid>
        <Divider variant="large" />
    <Grid container spacing={2}>
        <Grid item xs={12} className={classes.submit}>
    <Button 
            onclick={handleInfoSubmit}
            type="submit" 
            size="small" 
            color="primary" 
            className={classes.submit}
            startIcon={<SaveIcon />}
            display="inline"
            disabled={submitting}
            >
          Save
        </Button>
        <Button 
            onclick={handleclear}
            type="submit" 
            size="small" 
            color="secondary" 
            className={classes.submit}
            startIcon={<DeleteIcon />}
            display='inline'
            >
          Delete
        </Button>
        </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} alignItems="center">
          {active ?
            <Typography variant="caption">Saving...</Typography>
            :
            <Link 
              href="UserProfile" 
              variant="caption" 
              onChange={() => setActive('./UserProfile')}>
              Check your profile? click here!!
            </Link> 
        }
    </Grid>
    </Grid>
    </form>
    </div>
  </Container> 
  // </Paper>
        )
}
