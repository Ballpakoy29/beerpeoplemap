import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Autocomplete } from '@mui/material';
import Data from '../data/map_01'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardBrand from './card'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        ประชาชนเบียร์
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function mainpage() {

const [mapMode,setMapMode] = React.useState(2);
const [province,setProvince] = React.useState("")

const uniqueOptions = Data.filter((value, index, self) => {
  return self.findIndex((o) => o.Origin === value.Origin) === index;
});

const handleChange = (event, newValue) => {
  setMapMode(newValue);
};


function MapMode1() {
  return (
    <iframe
      title="Google Maps"
      src="https://mui.com/material-ui/react-tabs/"
      width="100%"
      height="100%"
    //  frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
    ></iframe>
  );
}



// React.useEffect(()=>{
//     setProvince(Data.map((option) => option));
// },[])
  return (
    
    <ThemeProvider theme={defaultTheme}>
              {/* <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
              >
               <Button onClick={() => handleButtonClick(1)}>คราฟท์เบียร์</Button>
              <Button onClick={() => handleButtonClick(2)}>สุราชุมชน</Button>
        </ButtonGroup> */}

<Box sx={{ bgcolor: 'background.paper' }}>
            <Tabs  onChange={handleChange} centered>
              <Tab value={1} label="คราฟเบียร์" />
              <Tab value={2} label="สุราชุมชน" />
            </Tabs>
          </Box>
      <Container component="main"
          sx={{
           width: '100vw', // Set width to 100% of the viewport width
           height: '100vh', // Set height to 100% of the viewport height
            backgroundColor: 'gray', // Set the background color to gray
          }} >

        <CssBaseline />
        
        <Box
          sx={{
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'white', // Set the background color to white
            padding: 5, 
            borderRadius: 2, // Add corner radius of 5
            width: '100%', // Set width to 100% of the viewport width
            height: '100%', // Set height to 100% of the viewport height
          }}
        >
          <div 
          >         
             {mapMode === 1 ? <MapMode1 /> :
               <div>
               <Autocomplete
               //  value={value}
               //  onChange={handleSelectChange}
                 options={Data}
                // sx={{ width: '100%' }}
                 getOptionLabel={(option) => option.Brand}
                 renderInput={(params) => (
                   <TextField {...params} label="แบรนด์" variant="outlined" />
                 )}
               />
                <Autocomplete
               //  value={value}
               //  onChange={handleSelectChange}
                 options={uniqueOptions}
                // sx={{ width: '100%' }}
                 getOptionLabel={(option) => option.Origin}
                 renderInput={(params) => (
                   <TextField {...params} label="จังหวัด" variant="outlined" />
                 )}
               />
           
                 
           <div>
             {Data.map((data, index) => (
               <CardBrand
                 key={index}
                 Brand={data.Brand}
                 Origin={data.Origin}
                 Products={data.Products}
                 ContactNumber={data.ContactNumber}
                 Page={data.Page}
                 sx={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}
               />
             ))}
           </div>
           
             </div>
              }
          </div>
        
          </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}