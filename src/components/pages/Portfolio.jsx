import { Button, Card, Typography } from "@mui/material";
const Portfolio = () => {
  const createRows = (title, description, buttons, languages, link) => {
    return { title, description, buttons, languages, link };
  };
  const projectsRow = [
    createRows(
      "Blogs Website",
      "A simple Blog website on which you can publish your blogs.",
      ["GitHub", "Live"],
      ["React JS", "JavaScript"],
      [
        "https://github.com/hammadaslam1/mha-blogs",
        "https://blogging-website-mha.web.app",
      ]
    ),
    createRows(
      "To-Do App",
      "A simple To-Do app developed using React JS.",
      ["GitHub", "Live"],
      ["React JS", "JavaScript"],
      [
        "https://github.com/hammadaslam1/to-do-React-js",
        "https://todo-app-reactjsx.web.app",
      ]
    ),
    createRows(
      "MHA's Swift Swap",
      "A simple online exchange website for online goods exchange.",
      ["GitHub", "Live"],
      ["HTML", "JavaScript", "CSS"],
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
      ["GitHub"],
      ["HTML", "JavaScript", "CSS"],
      ["https://github.com/hammadaslam1/calculator"]
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
            sx={{ width: "320px", backgroundColor: "#212529", margin: "auto" }}
            elevation={5}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ borderBottom: "1px solid ", padding: "20px" }}
            >
              {row.title}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{ backgroundColor: "#121212", padding: "20px" }}
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
              <a href={row.link[0]} target="_blank">
                {row.buttons[0]}
              </a>
              {row.buttons[1] ? (
                <a href={row.link[1]} target="_blank">
                  {row.buttons[1]}
                </a>
              ) : (
                ""
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
