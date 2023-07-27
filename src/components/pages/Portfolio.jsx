import { Typography } from "@mui/material";
const Portfolio = () => {

    const createRows = (title, description, buttons, languages, link) => {
        return { title, description, buttons, languages, link };
      };
      const projectsRow = [
        createRows("Simple Calculator", "A simple calculator that performs basic arithmatic operations.", ['GitHub'], ['HTML', 'JavaScript', 'CSS'], ['https://github.com/hammadaslam1/calculator']),
        createRows("To-Do App", "A simple To-Do app that saves your tasks.", ['GitHub', 'Live'], ['HTML', 'JavaScript', 'Tailwind'], ['https://github.com/hammadaslam1/to-do-firebase', 'https://todo-hammad.web.app']),
        createRows("To-Do App", "A simple To-Do app developed using React JS.", ['GitHub', 'Live'], ['React JS', 'JavaScript'], ['https://github.com/hammadaslam1/to-do-React-js', 'https://todo-app-reactjsx.web.app']),
        createRows("MHA's Swift Swap", "A simple online exchange website for online goods exchange.", ['GitHub', 'Live'], ['HTML', 'JavaScript', 'CSS'], ['https://github.com/hammadaslam1/mha-s-swift-swap', 'https://mha-s-swift-swap.web.app']),
        createRows("Blogs Website", "A simple Blog website on which you can publish your blogs.", ['GitHub', 'Live'], ['React JS', 'JavaScript'], ['https://github.com/hammadaslam1/mha-blogs', 'https://blogging-website-mha.web.app'])
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
    </div>
  );
};

export default Portfolio;
