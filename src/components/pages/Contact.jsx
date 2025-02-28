import { IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FaDiscord } from "react-icons/fa6";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { TbBrandFiverr } from "react-icons/tb";
import { SiHackerrank } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";
import { BiLogoUpwork } from "react-icons/bi";
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
      <div
        style={{
          maxWidth: "750px",
          alignSelf: "center",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="https://www.fiverr.com/hammadaslam10"
          target="_blank"
          rel="noreferrer"
          title="Fiverr"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <TbBrandFiverr size={"35px"} />
          </IconButton>
        </a>
        <a
          href="https://upwork.com/freelancers/~01e0a51cb5c5d9544b"
          target="_blank"
          rel="noreferrer"
          title="Upwork"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <BiLogoUpwork size={"35px"} />
          </IconButton>
        </a>
        <a
          href="https://www.hackerrank.com/profile/hammadaslam10"
          target="_blank"
          rel="noreferrer"
          title="HackerRank"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <FaHackerrank size={"35px"} className="hackerrank" />
          </IconButton>
        </a>
        <a
          href="https://github.com/hammadaslam1"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <GitHubIcon fontSize="large" />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/hammadaslam10/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </a>
        <a
          href="mailto:hammadaslam308@gmail.com"
          target="_blank"
          rel="noreferrer"
          title="Mail"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <MailIcon fontSize="large" />
          </IconButton>
        </a>
        <a
          href="https://www.instagram.com/hammadaslam10/"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
        </a>
        <a
          href="https://web.facebook.com/hammadaslam101"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <FacebookIcon fontSize="large" />
          </IconButton>
        </a>
        <a
          href="https://twitter.com/hammadaslam_10"
          target="_blank"
          rel="noreferrer"
          title="Twitter"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <TwitterIcon fontSize="large" />
          </IconButton>
        </a>
        <a
          href="https://discordapp.com/users/1061504929681911879"
          target="_blank"
          rel="noreferrer"
          title="Discord"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <FaDiscord size={"35px"} />
          </IconButton>
        </a>
        <a
          href="https://wa.me/qr/7R7TGR2TSQAEE1"
          target="_blank"
          rel="noreferrer"
          title="Whatsapp"
        >
          <IconButton size="large" sx={{ boxShadow: "3px 4px 10px #090909" }}>
            <WhatsAppIcon fontSize="large" />
          </IconButton>
        </a>
      </div>
    </div>
  );
};

export default Contact;
