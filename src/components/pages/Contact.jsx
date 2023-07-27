import { IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Typography sx={{ fontSize: "40pt", marginBottom: "60px" }}>
        Contact
      </Typography>
      <a href="https://github.com/hammadaslam1" target="_blank">
        <IconButton size="large">
          <GitHubIcon fontSize="large" />
        </IconButton>
      </a>
      <a href="https://www.linkedin.com/in/hammadaslam10/" target="_blank">
        <IconButton size="large">
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </a>
      <a href="mailto:hammadaslam308@gmail.com" target="_blank">
        <IconButton size="large">
          <MailIcon fontSize="large" />
        </IconButton>
      </a>
      <a href="https://www.instagram.com/hammadaslam10/" target="_blank">
        <IconButton size="large">
          <InstagramIcon fontSize="large" />
        </IconButton>
      </a>
      <a href="https://web.facebook.com/hammadaslam.308" target="_blank">
        <IconButton size="large">
          <FacebookIcon fontSize="large" />
        </IconButton>
      </a>
      <a href="https://twitter.com/HammadAslam_308" target="_blank">
        <IconButton size="large">
          <TwitterIcon fontSize="large" />
        </IconButton>
      </a>
    </div>
  );
};

export default Contact;
