import { Card, Chip, Typography } from "@mui/material";
const Portfolio = () => {
  const createRows = (title, description, buttons, languages, link) => {
    return { title, description, buttons, languages, link };
  };
  const projectsRow = [
    createRows(
      "Smart FYPMS",
      "Web based Smart FYP Management System for University of Education, Lahore, Pakistan developed using MERN Stack with Material UI components",
      ["GitHub"],
      ["MongoDB", "Express.js", "React.js", "MUI"],
      [
        "https://github.com/ahsanisdeveloping/smart-fyp-project",
        // "https://hammad-resume.web.app/",
      ]
    ),
    createRows(
      "Hammad Aslam",
      "My Portfolio developed in React JS with custom styling using CSS",
      ["GitHub", "Live"],
      ["JavaScript", "React.js"],
      [
        "https://github.com/hammadaslam1/portfolio-practice",
        "https://hammad-resume.web.app/",
      ]
    ),
    createRows(
      "OpinioMine",
      "A system (for my BSIT Capstone Project) that analyzes the customer reviews and classify them on the basis of topics, sentiments and helpfulness",
      ["GitHub"],
      ["Python", "MongoDB", "Express.js", "React.js"],
      [
        "https://github.com/hammadaslam1/reviews-classifier",
        // "https://mha-dz-social-club.web.app/",
      ]
    ),
    createRows(
      "Score Pulse",
      "A simple Mobile App for managing scores of cricket matches developed using React Native",
      ["GitHub"],
      ["React Native", "JavaScript", "Native UI"],
      [
        "https://github.com/hammadaslam1/score-pulse",
        // "https://mha-dz-social-club.web.app/",
      ]
    ),
    createRows(
      "00 Social Club",
      "A simple Web based UI design using React JS for Double Zero Social Club.",
      ["GitHub", "Live"],
      ["React.js", "JavaScript", "MUI"],
      [
        "https://github.com/hammadaslam1/00-Social-Club-UI",
        "https://mha-dz-social-club.web.app/",
      ]
    ),
    createRows(
      "Blogs Website",
      "A simple Blog website on which you can publish your blogs.",
      ["GitHub", "Live"],
      ["React.js", "JavaScript", "MUI"],
      [
        "https://github.com/hammadaslam1/mha-blogs",
        "https://blogging-website-mha.web.app",
      ]
    ),
    createRows(
      "To-Do App",
      "A simple To-Do app developed using React JS.",
      ["GitHub", "Live"],
      ["React.js", "JavaScript"],
      [
        "https://github.com/hammadaslam1/to-do-React-js",
        "https://todo-app-reactjsx.web.app",
      ]
    ),
    createRows(
      "MHA's Swift Swap",
      "A simple online exchange website for online goods exchange.",
      ["GitHub", "Live"],
      ["HTML", "JavaScript", "Tailwind"],
      [
        "https://github.com/hammadaslam1/mha-s-swift-swap",
        "https://mha-s-swift-swap.web.app",
      ]
    ),
    createRows(
      "To-Do App",
      "A simple To-Do app that saves your tasks.",
      ["GitHub", "Live"],
      ["HTML", "JavaScript", "Tailwind"],
      [
        "https://github.com/hammadaslam1/to-do-firebase",
        "https://todo-hammad.web.app",
      ]
    ),
    createRows(
      "Simple Calculator",
      "A simple calculator that performs basic arithmatic operations.",
      ["GitHub", "Live"],
      ["HTML", "JavaScript", "Tailwind"],
      [
        "https://github.com/hammadaslam1/calculator",
        "https://mha-calculator.web.app",
      ]
    ),
  ];

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Typography sx={{ fontSize: "40pt", marginBottom: "20px" }}>
        My Projects
      </Typography>
      <div
        className="pojects"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,2fr)",
          gap: "45px 5px",
        }}
      >
        {projectsRow.map((row) => (
          <Card
            sx={{
              maxWidth: "320px",
              backgroundColor: "#212529",
              margin: "auto",
            }}
            elevation={5}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                borderBottom: "1px solid #777777",
                padding: "20px",
                fontWeight: "700",
              }}
            >
              {row.title}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{
                backgroundColor: "#121212",
                height: "130px",
                padding: "20px",
              }}
            >
              {row.description}
            </Typography>
            <div
              className="btn"
              style={{
                backgroundColor: "#121212",
                padding: "20px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <a href={row.link[0]} target="_blank" rel="noreferrer">
                {row.buttons[0]}
              </a>
              {row.buttons[1] ? (
                <a href={row.link[1]} target="_blank" rel="noreferrer">
                  {row.buttons[1]}
                </a>
              ) : (
                ""
              )}
            </div>
            <div style={{ borderTop: "1px solid #777777", height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              {row.languages.map((lang) => (
                <Chip label={lang} sx={{ backgroundColor: "#212529" }} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
