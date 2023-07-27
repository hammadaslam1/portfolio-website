import { Download, WindowSharp } from "@mui/icons-material";
import hammad from "./hammad.jpg";
import {
  Box,
  Button,
  Card,
  ImageList,
  ImageListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

const Resume = () => {
  const createRows = (title, value, num = "") => {
    return { title, value, num };
  };

  const personalRow = [
    createRows("Name", "Muhammad Hammad Aslam"),
    createRows("Email Address", "hammadaslam308@gmail.com"),
    createRows("Phone Number", "0092 307 4304204"),
    createRows("DOB", "19-11-2000"),
    createRows("Github", "hammadaslam1"),
    createRows("LinkedIn", "hammadaslam10"),
  ];
  const educationRow = [
    createRows(
      "Sep 2022 - present",
      "BSIT (Post ADP), University of Education, Lahore",
      "3.62 CGPA"
    ),
    createRows(
      "Sep 2018 - 2020",
      "Undergraduation with Computer Science, University of Sargodha, Sargodha",
      "52%"
    ),
    createRows("Sep 2016 - 2018", "ICS, BISE Sargodha", "65%"),
    createRows("Sep 2014 - 2016", "Matriculation, BISE Sargodha", "64%"),
  ];
  const skillRow = [
    createRows("HTML", "Very Good"),
    createRows("CSS", "Very Good"),
    createRows("JavaScript", "Good"),
    createRows("Front-End Development", "Good"),
    createRows("React JS", "Beginner"),
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
                      <TableRow sx={{ display: "flex" }}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ borderBottom: "none", flex: "3" }}
                        >
                          <Typography
                            sx={{ fontSize: "14pt", fontWeight: "600" }}
                          >
                            {row.title}
                          </Typography>
                        </TableCell>
                        <TableCell
                          scope="row"
                          sx={{ borderBottom: "none", flex: "5" }}
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
                          sx={{ borderBottom: "none", flex: "3" }}
                        >
                          <Typography
                            sx={{ fontSize: "14pt", fontWeight: "600" }}
                          >
                            {row.title}
                          </Typography>
                        </TableCell>
                        <TableCell
                          scope="row"
                          sx={{ borderBottom: "none", flex: "5" }}
                        >
                          <Typography sx={{ fontSize: "12pt" }}>
                            {row.value}
                          </Typography>
                        </TableCell>
                        <TableCell
                          scope="row"
                          sx={{ borderBottom: "none", flex: "3" }}
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
                          sx={{ borderBottom: "none", flex: "3" }}
                        >
                          <Typography
                            sx={{ fontSize: "14pt", fontWeight: "600" }}
                          >
                            {row.title}
                          </Typography>
                        </TableCell>
                        <TableCell
                          scope="row"
                          sx={{ borderBottom: "none", flex: "5" }}
                        >
                          <Typography sx={{ fontSize: "12pt" }}>
                            {row.value}
                          </Typography>
                        </TableCell>
                        <TableCell
                          scope="row"
                          sx={{ borderBottom: "none", flex: "3" }}
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
      <Button
        variant="contained"
        color="error"
        startIcon={<Download />}
        sx={{ margin: "10px" }}
        onClick={() => {
          window.print()
        }}
      >
        Download PDF
      </Button>
    </div>
  );
};

export default Resume;
