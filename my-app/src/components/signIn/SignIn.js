import React, { useState, useEffect } from "react";
import axios from "axios";
import base64 from "base-64";
import { Link as RouterLink } from "react-router-dom";

// Material UI stuff
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
//
import { Copyright, UseStyles_SignIn } from "./MaterialUI-SignIn";

const SignIn = () => {
  const classes = UseStyles_SignIn();
  const [loginUserInfo, setLogInUserInfo] = useState({
    username: "",
    password: "",
  });
  console.log(loginUserInfo);

  const signIn = async (e) => {
    e.preventDefault();

    try {
      // axios.put() ... first parameter: URL, second: HTTP request body, third: config (設定)
      const res = await axios.put(
        "http://localhost:5000/signin",
        loginUserInfo,
        {
          headers: {
            // syntax: Authorization: <type> <credentials>
            Authorization:
              "Basic " +
              base64.encode(
                loginUserInfo.username + ":" + loginUserInfo.password
              ),
            "Content-Type": "application/json",
          },
          // credentials: "same-origin" : ユーザーのログイン情報をバックエンドに送信したい時につける
          // （バックエンドとフロントエンドのドメインが同じ時のみ）
          credentials: "same-origin",
        }
      );
      console.log(
        base64.encode(loginUserInfo.username + ":" + loginUserInfo.password)
      );
      if (res.statusText !== "OK") {
        throw res.statusText;
      } else {
        console.log(res.data);
        return res.data;
      }
    } catch (err) {
      console.log(err);
    }

    // fetch("http://localhost:5000/signin", {
    //   method: "PUT",
    //   headers: new Headers({
    //     Authorization:
    //       "Basic " +
    //       base64.encode(loginUserInfo.username + ":" + loginUserInfo.password),
    //     "Content-type": "application/json",
    //   }),
    //   body: JSON.stringify({
    //     loginUserInfo,
    //   }),
    //   credentials: "same-origin",
    // })
    //   .then((res) => {
    //     console.log(res);
    //     if (!res.ok) {
    //       throw res.statusText;
    //     } else {
    //       return res.json();
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(`Login failed with the error: ${error}`);
    //     return error;
    //   });
  };

  // useEffect(() => {
  //   // fetch API
  //   (async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/signin");
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(e) =>
              setLogInUserInfo({ ...loginUserInfo, username: e.target.value })
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) =>
              setLogInUserInfo({ ...loginUserInfo, password: e.target.value })
            }
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => signIn(e)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignIn;
