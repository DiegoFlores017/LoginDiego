import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Router, useNavigate } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';
import { useEffect } from 'react';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();
 



export default function SignInSide() {
  const navigate = useNavigate();
  const clientID = "88427881055-nfa39pm7ov21j9tk1m8k6375rlattlbd.apps.googleusercontent.com"
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ingrese un mail valido")
        .required("Debes ingresar un email"),
      password: Yup.string()
       .min(6, "Ingrese una contraseña con 6 caracteres o mas")
       .required("Debes ingresar una contraseña"),

    }),
    onSubmit: (data) => {
      console.log(data)
      navigate("/Holamundo")
    },
  });
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  const onSuccess = (response) => {
    console.log(response)
  }
  const onFailure = () => {
    console.log("algo salio mal..")
  }

  return (

    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={values.email}
                error={!!errors.email}
                helperText={errors.email}
              //autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                onChange={handleChange}
                value={values.password}
                error={!!errors.password}
                helperText={errors.password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <a href="#" className='SignIn'></a>
              <Button
                className="SignIn"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In

              </Button>

              <Button
                type="reset"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Borrar
              </Button>
              <div className='btn'>
                <GoogleLogin
                  clientId={clientID}
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_policy"}
                />
              </div>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
