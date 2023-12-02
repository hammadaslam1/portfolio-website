import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <Typography
        sx={{
          fontSize: "30pt",
          letterSpacing: 10,
          wordSpacing: 10,
          marginY: "10px",
          width: "fit-content",
        //   boxShadow: "0 7px 5px #0f0f0f",
        fontWeight: 'bold'
        }}
      >
        I'm
      </Typography>
      <Typography
        sx={{
          fontSize: "36pt",
          letterSpacing: 10,
          wordSpacing: 10,
          marginY: "10px",
          width: "fit-content",
        //   boxShadow: "0 7px 5px #0f0f0f",
        fontWeight: 'bold'
        }}
      >
        a Student
      </Typography>
      <Typography
        sx={{
          fontSize: "45pt",
          letterSpacing: 10,
          wordSpacing: 10,
          marginY: "10px",
          width: "fit-content",
        //   boxShadow: "0 7px 5px #0f0f0f",
        fontWeight: 'bold'
        }}
      >
        a Developer
      </Typography>
      <Typography
        sx={{
          fontSize: "48pt",
          letterSpacing: 10,
          wordSpacing: 10,
          marginY: "10px",
          width: "fit-content",
        //   boxShadow: "0 7px 5px #0f0f0f",
        fontWeight: 'bold'
        }}
      >
        Hammad Aslam
      </Typography>
    </div>
  );
};

export default Home;
