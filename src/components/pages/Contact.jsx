import { IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FaDiscord } from "react-icons/fa6";

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
      <div style={{maxWidth:'750px', alignSelf: 'center', margin: 'auto', display: 'flex', flexWrap:'wrap', justifyContent: 'center'}}>
        <a
          href="https://github.com/hammadaslam1"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <GitHubIcon fontSize="large" />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/hammadaslam10/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </a>
        <a
          href="mailto:hammadaslam308@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <MailIcon fontSize="large" />
          </IconButton>
        </a>
        <a
          href="https://www.instagram.com/hammadaslam10/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
        </a>
        <a
          href="https://web.facebook.com/hammadaslam.308"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <FacebookIcon fontSize="large" />
          </IconButton>
        </a>
        <a
          href="https://twitter.com/HammadAslam_308"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <TwitterIcon fontSize="large" />
          </IconButton>
        </a>
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <FaDiscord size={"35px"} />
          </IconButton>
        </a>
      </div>
    </div>
  );
};

export default Contact;
