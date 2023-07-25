import { IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
      }}
    >
      <Typography sx={{ fontSize: "40pt", marginBottom: "20px" }}>
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
    </div>
  );
};

export default Contact;
