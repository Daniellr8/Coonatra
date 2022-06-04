import { Grid, Container, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import fondo from '../src/Imagen/sky.jpg'
import { LockOutlined } from "@material-ui/icons";

const useStyle = makeStyles(theme =>({
  root:{
    backgroundImagen: `url(${fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    backgroundPosition: 'center',
    height: '100vh'
  },
  container: {
    height: '60%',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(400 + theme.spacing(2)+2)]: {
      marginTop: 0,
      width: '100%',
      height: '100%'
    }
  },
  div:{
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center '
  },
  
  avatar:{
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form:{
    width: '100%',
    marginTop: theme.spacing(1)
  }
}))

function App() {
  const classes = useStyle();
  
  return (
    <Grid container component='main' className={classes.root}>
      <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
        <div className={classes.div}>
          <Avatar className={classes.avatar}> 
            <LockOutlined/>
          </Avatar>
          <Typography component='h1' variant='h5'> Iniciar Sesion</Typography>
          <form className={classes.form}>
          <TextField 
            fullWidth 
            autoFocus 
            color='primary'
            margin='normal'
            variant='outlined'
            label='Usuario'
            name='User'
            />
            <TextField 
            fullWidth
            type='password' 
            color='primary'
            margin='normal'
            variant='outlined'
            label='constraseña'
            name='User'
            />
            <Button
            fullWidth
            variant='contained'
            color='primary'
            >
              Entrar
            </Button>
          </form>
        </div>

      </Container>

    </Grid>
  );
}

export default App;
