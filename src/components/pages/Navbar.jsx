import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
// import { MenuIcon } from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div>
      <Box>
        <CssBaseline />
        <AppBar component="nav" sx={{backgroundColor: '#212529', position: 'sticky', paddingX: '55px'}}>
          <Toolbar>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              
              <MenuIcon />
            </IconButton> */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { sm: "flex" }, fontSize: '22pt', fontWeight: '600' }}
              title="Muhammad Hammad Aslam"
            >
              M H A
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Link to="/" style={{color: 'white', margin: '15px', textDecoration: 'none'}}>Home</Link>
              <Link to='/resume' style={{color: 'white', margin: '15px', textDecoration: 'none'}}>My Resume</Link>
              <Link to='/about' style={{color: 'white', margin: '15px', textDecoration: 'none'}}>About me</Link>
              <Link to='/portfolio' style={{color: 'white', margin: '15px', textDecoration: 'none'}}>My Portfolio</Link>
              <Link to='/contact' style={{color: 'white', margin: '15px', textDecoration: 'none'}}>Contact</Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
