/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
// import { MenuIcon } from "@mui/icons-material/Menu";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
    console.log(open);
  };
  const handleClose = () => {
    setAnchorEl(null);
    console.log(open);
    console.log(anchorEl);
  };
  return (
    <div>
      <>
        <Box>
          <CssBaseline />
          <AppBar
            component="nav"
            sx={{
              backgroundColor: "#212529",
              position: "sticky",
              paddingX: "55px",
              paddingX: { xs: "10px", sm: "40px" },
            }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex" },
                  fontSize: "22pt",
                  fontWeight: "600",
                }}
                title="Muhammad Hammad Aslam"
              >
                M H A
              </Typography>
              <Box sx={{ display: { xs: "block", sm: "block", md: "block" } }}>
                <Link
                  to="/"
                  style={{
                    color: "white",
                    margin: "15px",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/resume"
                  style={{
                    color: "white",
                    margin: "15px",
                    textDecoration: "none",
                  }}
                >
                  My Resume
                </Link>
                <Link
                  to="/about"
                  style={{
                    color: "white",
                    margin: "15px",
                    textDecoration: "none",
                  }}
                >
                  About me
                </Link>
                <Link
                  to="/portfolio"
                  style={{
                    color: "white",
                    margin: "15px",
                    textDecoration: "none",
                  }}
                >
                  My Projects
                </Link>
                <Link
                  to="/contact"
                  style={{
                    color: "white",
                    margin: "15px",
                    textDecoration: "none",
                  }}
                >
                  Contact
                </Link>
              </Box>
              {/* <IconButton
                color="inherit"
                onClick={handleClick}
                aria-controls={open ? "account-menu" : ""}
                aria-haspopup="true"
                aria-expanded={open ? "true" : ""}
                edge="end"
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton> */}
            </Toolbar>
          </AppBar>
        </Box>
        {/* <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
        >
          <MenuItem sx={{color: 'white', backgroundColor: '#121212'}} onClick={handleClose}>Home</MenuItem>
          <MenuItem sx={{color: 'white', backgroundColor: '#121212'}} onClick={handleClose}>My Resume</MenuItem>
          <MenuItem sx={{color: 'white', backgroundColor: '#121212'}} onClick={handleClose}>About Me</MenuItem>
          <MenuItem sx={{color: 'white', backgroundColor: '#121212'}} onClick={handleClose}>Portfolio</MenuItem>
          <MenuItem sx={{color: 'white', backgroundColor: '#121212'}} onClick={handleClose}>Contact</MenuItem>
        </Menu> */}
      </>
    </div>
  );
};

export default Navbar;
