import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form'

import { Input, Form, MyButton } from '../../components'
import { DispatchContext } from '../../store';
import { signin } from '../../api'

const theme = createTheme();

export default function SignUp() {
    const dispatch = useContext(DispatchContext)
    const { register, handleSubmit } = useForm({
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        signin(data.email, data.password, dispatch)
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input variant="outlined" label="Email" {...register('email')} required />
                        <Input variant="outlined" label="Password" {...register('password')} id="password" required type="password" />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <MyButton variant="contained" sx={{ mt: 3, mb: 2, width: '100%' }}>
                            Sign In
                        </MyButton>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/sign-up" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
