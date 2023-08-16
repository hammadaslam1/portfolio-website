import { Typography } from "@mui/material";

const Home = () => {
    return ( 
        <div className="home">
            <Typography sx={{fontSize: '28pt', marginY: '10px', width: 'fit-content', boxShadow: '7px 7px 8px #090909'}}>
                I'm
            </Typography>
            <Typography sx={{fontSize: '34pt', marginY: '10px', width: 'fit-content', boxShadow: '7px 7px 8px #090909'}}>
                a Student
            </Typography>
            <Typography sx={{fontSize: '40pt', marginY: '10px', width: 'fit-content', boxShadow: '7px 7px 8px #090909'}}>
                Web Developer
            </Typography>
            <Typography sx={{fontSize: '46pt', marginY: '10px', width: 'fit-content', boxShadow: '7px 7px 8px #090909'}}>
                Muhammad Hammad Aslam
            </Typography>
        </div>
     );
}
 
export default Home;