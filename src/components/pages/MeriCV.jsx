/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import hammad from "./hammad.jpg";
import {
  Card,
  ImageList,
  ImageListItem,
  Paper,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

const CV = () => {
  const createRows = (title, value, num = "") => {
    return { title, value, num };
  };

  const personalRow = [
    createRows("Name", "Muhammad Hammad Aslam"),
    createRows("Email Address", "hammadaslam308@gmail.com"),
    createRows("Phone Number", "0092 307 4304204"),
    createRows("DOB", "19-11-2000"),
    createRows(
      "Github",
      <a
        href="https://github.com/hammadaslam1"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        hammadaslam1
      </a>
    ),
    createRows(
      "LinkedIn",
      <a
        href="https://linkedin.com/in/hammadaslam10"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        hammadaslam10
      </a>
    ),
  ];
  const educationRow = [
    createRows(
      "Sep 2022 - 2024",
      "BSIT (Post ADP), University of Education, Lahore",
      "3.63 CGPA"
    ),
    createRows(
      "Sep 2018 - 2020",
      "Undergraduation with Computer Science, University of Sargodha, Sargodha",
      "52%"
    ),
    createRows("Sep 2016 - 2018", "ICS, BISE Sargodha", "65%"),
    createRows("Sep 2014 - 2016", "Matriculation, BISE Sargodha", "64%"),
  ];

  const sliderStyles = {
    height: 14,
    "& .MuiSlider-thumb": {
      width: 0,
      height: 0,
      transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
      "&:before": {
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
      },
      "&.Mui-active": {
        width: 40,
        height: 40,
      },
    },
    "& .MuiSlider-rail": {
      opacity: 0.2,
    },
  };
  const skillRow = [
    createRows(
      "JavaScript",
      <Slider
        sx={sliderStyles}
        size="small"
        defaultValue={90}
        valueLabelDisplay="auto"
        step={10}
        disabled
        min={10}
        max={110}
      />
    ),
    createRows(
      "MongoDB",
      <Slider
        sx={sliderStyles}
        size="small"
        defaultValue={90}
        valueLabelDisplay="auto"
        step={10}
        disabled
        min={10}
        max={110}
      />
    ),
    createRows(
      "Express JS",
      <Slider
        sx={sliderStyles}
        size="small"
        defaultValue={90}
        valueLabelDisplay="auto"
        step={10}
        disabled
        min={10}
        max={110}
      />
    ),
    createRows(
      "React JS",
      <Slider
        sx={sliderStyles}
        size="small"
        defaultValue={90}
        valueLabelDisplay="auto"
        step={10}
        disabled
        min={10}
        max={110}
      />
    ),
    createRows(
      "React Native",
      <Slider
        sx={sliderStyles}
        size="small"
        defaultValue={70}
        valueLabelDisplay="auto"
        step={10}
        disabled
        min={10}
        max={110}
      />
    ),
    createRows(
      "Node JS",
      <Slider
        sx={sliderStyles}
        size="small"
        defaultValue={70}
        valueLabelDisplay="auto"
        step={10}
        disabled
        min={10}
        max={110}
      />
    ),
    createRows(
      "Next JS",
      <Slider
        sx={sliderStyles}
        size="small"
        defaultValue={70}
        valueLabelDisplay="auto"
        step={10}
        disabled
        min={10}
        max={110}
      />
    ),
    createRows(
      "Python",
      <Slider
        sx={sliderStyles}
        size="small"
        defaultValue={80}
        valueLabelDisplay="auto"
        step={10}
        disabled
        min={10}
        max={110}
      />
    ),
    createRows(
      "Web Scraping / Automation",
      <Slider
        sx={sliderStyles}
        size="small"
        defaultValue={80}
        valueLabelDisplay="auto"
        step={10}
        disabled
        min={10}
        max={110}
      />
    ),
  ];

  return (
    <div className="main-resume" style={{ padding: "20px" }}>
      <Typography sx={{ fontSize: "40pt" }}>My Resume</Typography>
      <Card
        className="full-resume"
        sx={{
          width: "900px",
          margin: "auto",
          padding: "10px",
          backgroundColor: "#212529",
        }}
        elevation={5}
      >
        <div className="resume" style={{ margin: "15px" }}>
          <Typography sx={{ fontSize: "26pt", fontWeight: "600" }}>
            Muhammad Hammad Aslam
          </Typography>
        </div>
        <div className="resume" style={{ margin: "15px" }}>
          <Typography
            sx={{
              fontSize: "18pt",
              fontStyle: "italic",
              textAlign: "left",
              borderBottom: "1px solid #e6e6e6",
              fontWeight: "600",
              marginY: "20px",
            }}
          >
            Personal Details
          </Typography>
          <div className="personal-details" style={{ display: "flex" }}>
            <div className="details" style={{ flex: "5", textAlign: "left" }}>
              <TableContainer
                component={Paper}
                sx={{ backgroundColor: "inherit", boxShadow: "none" }}
              >
                <Table>
                  <TableBody>
                    {personalRow.map((row) => (
                      <TableRow sx={{ display: "flex", alignItems: "center" }}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ borderBottom: "none", flex: "3", padding: 1 }}
                        >
                          <Typography
                            sx={{ fontSize: "14pt", fontWeight: "600" }}
                          >
                            {row.title}
                          </Typography>
                        </TableCell>
                        <TableCell
                          scope="row"
                          sx={{ borderBottom: "none", flex: "5", padding: 1 }}
                        >
                          <Typography sx={{ fontSize: "12pt" }}>
                            {row.value}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="picture" style={{ flex: "2", textAlign: "left" }}>
              <ImageList>
                <ImageListItem>
                  <img
                    src={hammad}
                    style={{ width: "200px", borderRadius: "3px" }}
                  />
                </ImageListItem>
              </ImageList>
            </div>
          </div>
          <Typography
            sx={{
              fontSize: "18pt",
              fontStyle: "italic",
              textAlign: "left",
              borderBottom: "1px solid #e6e6e6",
              fontWeight: "600",
              marginY: "20px",
            }}
          >
            Education
          </Typography>
          <div className="education-details" style={{ display: "flex" }}>
            <div className="details" style={{ flex: "5", textAlign: "left" }}>
              <TableContainer
                component={Paper}
                sx={{ backgroundColor: "inherit", boxShadow: "none" }}
              >
                <Table>
                  <TableBody>
                    {educationRow.map((row) => (
                      <TableRow sx={{ display: "flex" }}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ borderBottom: "none", flex: "3", padding: 1 }}
                        >
                          <Typography
                            sx={{ fontSize: "14pt", fontWeight: "600" }}
                          >
                            {row.title}
                          </Typography>
                        </TableCell>
                        <TableCell
                          scope="row"
                          sx={{
                            borderBottom: "none",
                            flex: "5",
                            padding: 1,
                            paddingX: 2,
                          }}
                        >
                          <Typography sx={{ fontSize: "12pt" }}>
                            {row.value}
                          </Typography>
                        </TableCell>
                        <TableCell
                          scope="row"
                          sx={{ borderBottom: "none", flex: "3", padding: 1 }}
                        >
                          <Typography sx={{ fontSize: "12pt" }}>
                            {row.num}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <Typography
            sx={{
              fontSize: "18pt",
              fontStyle: "italic",
              textAlign: "left",
              borderBottom: "1px solid #e6e6e6",
              fontWeight: "600",
              marginY: "20px",
            }}
          >
            Skills
          </Typography>
          <div className="skill-details" style={{ display: "flex" }}>
            <div className="details" style={{ flex: "5", textAlign: "left" }}>
              <TableContainer
                component={Paper}
                sx={{ backgroundColor: "inherit", boxShadow: "none" }}
              >
                <Table>
                  <TableBody>
                    {skillRow.map((row) => (
                      <TableRow sx={{ display: "flex" }}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ borderBottom: "none", flex: "4", padding: 1 }}
                        >
                          <Typography
                            sx={{ fontSize: "14pt", fontWeight: "600" }}
                          >
                            {row.title}
                          </Typography>
                        </TableCell>
                        <TableCell
                          scope="row"
                          sx={{ borderBottom: "none", flex: "6", padding: 1 }}
                        >
                          <Typography sx={{ fontSize: "12pt" }}>
                            {row.value}
                          </Typography>
                        </TableCell>
                        <TableCell
                          scope="row"
                          sx={{ borderBottom: "none", flex: "1", padding: 1 }}
                        >
                          <Typography sx={{ fontSize: "12pt" }}></Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </Card>
      {/* <Button
        variant="contained"
        color="error"
        startIcon={<Download />}
        sx={{ margin: "10px" }}
        onClick={() => {
          window.print();
        }}
      >
        Download PDF
      </Button> */}
    </div>
  );
};

export default CV;
