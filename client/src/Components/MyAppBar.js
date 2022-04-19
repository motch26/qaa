import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { Context } from "./../Context";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuItem,
  FormControl,
  Select,
  Button,
  InputLabel,
} from "@mui/material";

import AreaDrawers from "./AreaDrawers";
function MyAppBar({ openList, openRating }) {
  const { actions, program } = useContext(Context);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLoggedOut, setLogOut] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const logout = () => {
    removeCookie("userID", { path: "/" });
    setLogOut(true);
  };
  const handleProgramChange = (e) => {
    actions.setProgram(e.target.value);
    actions.setProgramData(e.target.value);
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
              <AreaDrawers
                toggleDrawer={toggleDrawer}
                openList={openList}
                openRating={openRating}
              />
            </Drawer>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CHMSC Accreditation Management System
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FormControl
                variant="standard"
                sx={{ minWidth: 150, borderRadius: 2, bgcolor: "white" }}
              >
                <Select
                  value={program}
                  label="college"
                  onChange={handleProgramChange}
                  sx={{ p: 1, borderRadius: 5 }}
                >
                  <MenuItem value="BSIT">BSIT</MenuItem>
                  <MenuItem value="BSED">BSED</MenuItem>
                  <MenuItem value="BEED">BEED</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="info"
                size="small"
                sx={{ ml: 3 }}
                startIcon={<LogoutIcon />}
                onClick={logout}
              >
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isLoggedOut ? <Navigate to="/" /> : null};
    </React.Fragment>
  );
}

export default MyAppBar;
