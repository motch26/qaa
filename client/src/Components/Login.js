import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Box,
  TextField,
  Stack,
  Button,
  Grid,
  Alert,
  Avatar,
} from "@mui/material";
import { Lock } from "@mui/icons-material";
import { blue, grey } from "@mui/material/colors";

import { loginTitle, loginForm, loginButton } from "../Theme/Login";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["userID"]);
  const [userID, setUserID] = useState(null);
  const [isWarningVisble, setWarningVisible] = useState(false);
  const [isServerError, setServerError] = useState(false);

  const changeUsername = (e) => setUsername(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const checkLogin = () => {
    axios
      .post("http://localhost:5000/login", {
        username,
        password,
      })
      .then((res) => {
        if (res.data.length > 0) {
          const resUserID = res.data[0].id;
          setUserID(resUserID);
          setCookie("userID", resUserID, {
            path: "/", // TODO: Add cookie expiry
          });
          setWarningVisible(false);
        } else setWarningVisible(true);
      })
      .catch(() => setServerError(true));
  };

  useEffect(() => {
    if (cookies.userID) setUserID(cookies.userID);
  }, [cookies.userID]);

  return (
    <Grid container bgcolor={grey[50]}>
      <Grid item xs={4}>
        <Box sx={loginTitle}> CHMSC Accreditation Management System</Box>
      </Grid>
      <Grid item xs={8}>
        <Container fixed>
          <Box component="form" sx={loginForm}>
            <Stack
              sx={{
                width: "100%",
              }}
            >
              <Avatar
                sx={{ width: 70, height: 70, bgcolor: blue[500], mx: "auto" }}
              >
                <Lock fontSize="large" />
              </Avatar>
              <h3>Username:</h3>
              <TextField
                label="Enter your username"
                variant="outlined"
                onChange={changeUsername}
              />
              <h3>Password:</h3>
              <TextField
                type="password"
                label="Enter your password"
                variant="outlined"
                onChange={changePassword}
              />
              <Button
                onClick={checkLogin}
                variant="contained"
                sx={loginButton}
                size="large"
              >
                Signin
              </Button>
              {isWarningVisble ? (
                <Alert
                  severity="error"
                  sx={{
                    marginTop: 2,
                  }}
                >
                  User not found! Please try again.
                </Alert>
              ) : null}
              {isServerError ? (
                <Alert
                  severity="error"
                  sx={{
                    marginTop: 2,
                  }}
                >
                  Network Error!
                </Alert>
              ) : null}
              {userID ? <Navigate to="/user" /> : null}
            </Stack>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Login;
