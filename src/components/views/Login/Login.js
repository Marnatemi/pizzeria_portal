import React from 'react';
import styles from './Login.module.scss';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';


const Login = () => (
  <Paper className={styles.component}>
    <h1>Log in</h1>
    <Container maxWidth="xs">
      <form className={styles.form}>
        <TextField className={styles.input} label='Login' variant='outlined' color='primary'/>
        <TextField className={styles.input} label='Password' type="password" variant='outlined' color='primary'/>
        <Button component={Link} to={process.env.PUBLIC_URL + '/'} variant='outlined' color='primary' size='large'>LOG IN</Button>
      </form>
    </Container>
  </Paper>
);

export default Login;
