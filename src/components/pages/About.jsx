import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
      <Typography sx={{ fontSize: "40pt" }}>About me</Typography>
      <Box
        sx={{
          textAlign: "justify",
          padding: "20px",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <Typography sx={{ fontSize: "16pt", marginY: "35px" }}>
          I'm Hammad Aslam, an Information Technology student from Jauharabad,
          Pakistan.
        </Typography>
        <Typography sx={{ fontSize: "16pt", marginY: "35px" }}>
          I have done my Matriculation from Govt. Jauhar Memorial High School,
          Jauharabad in the session 2014-16 under BISE Sargodha securing 64%
          marks.
        </Typography>
        <Typography sx={{ fontSize: "16pt", marginY: "35px" }}>
          I have done my Intermediate with Computer Science from Govt. Post
          Graduate College, Jauharabad in the session 2016-18 under BISE
          Sargodha securing 65% marks.
        </Typography>
        <Typography sx={{ fontSize: "16pt", marginY: "35px" }}>
          I have done my undergraduation with Computer Science from Govt. Post
          Graduate College, Jauharabad under the affiliation of University of
          Sargodha in the session 2018-2020 securing 52% marks.
        </Typography>
        <Typography sx={{ fontSize: "16pt", marginY: "35px" }}>
          I have done a Diploma of Information Technology from Information
          Technology Centre, Jauharabad under Punjab Board of Technical
          Education in the session 2020-2021 securing 78% marks.
        </Typography>
        <Typography sx={{ fontSize: "16pt", marginY: "35px" }}>
          Now I'm a student of BS Information Technology Post ADP 3rd sem (7th
          sem BS(hons)) University of Education, Lahore for the session
          2022-2024. My <strong>CGPA</strong> is <strong>3.62</strong>.
        </Typography>
        <Typography sx={{ fontSize: "16pt", marginY: "35px" }}>
          I have interests in programming and web development.
        </Typography>
        <Typography sx={{ fontSize: "16pt", marginY: "35px" }}>
          I have developed some projects for Web.
        </Typography>
        <Typography sx={{ fontSize: "16pt", marginY: "35px" }}>
          I'm looking for the opportunities to enhance my skills.
        </Typography>
        <Typography sx={{ fontSize: "16pt", marginY: "35px" }}>
          I enjoy working on side projects to upskill myself and learn new
          stuff.
        </Typography>
      </Box>
    </div>
  );
};

export default About;
