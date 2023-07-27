import { Typography } from "@mui/material";

const Home = () => {
    return ( 
        <div className="home">
            <Typography sx={{fontSize: '32pt', marginY: '5px', width: 'fit-content', boxShadow: '6px 6px 5px #020202'}}>
                I'm
            </Typography>
            <Typography sx={{fontSize: '38pt', marginY: '5px', width: 'fit-content', boxShadow: '6px 6px 5px #020202'}}>
                a Student
            </Typography>
            <Typography sx={{fontSize: '48pt', marginY: '5px', width: 'fit-content', boxShadow: '6px 6px 5px #020202'}}>
                Software Developer
            </Typography>
            <Typography sx={{fontSize: '56pt', marginY: '5px', width: 'fit-content', boxShadow: '6px 6px 5px #020202'}}>
                Muhammad Hammad Aslam
            </Typography>
        </div>
     );
}
 
export default Home;