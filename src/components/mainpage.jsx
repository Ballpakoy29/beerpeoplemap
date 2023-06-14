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
import Data from '../data/map_01';
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
import CardBrand from './card';

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

const defaultTheme = createTheme();

export default function mainpage() {
  const [mapMode, setMapMode] = React.useState(2);
  const [province, setProvince] = React.useState('');

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
        src="https://www.google.com/maps/d/u/0/edit?hl=th&mid=1va9XuQoSySb6ldSAw9pc4vgVLu342Zk&ll=13.078651172041047%2C101.5831765&z=6"
        width="100vw"
        height="100vh"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ bgcolor: 'background.paper' }}>
        <Tabs onChange={handleChange} centered>
          <Tab value={1} label="คราฟเบียร์" />
          <Tab value={2} label="สุราชุมชน" />
        </Tabs>
      </Box>
      {/* <Container
        component="main"
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'gray',
        }}
      > */}
        <CssBaseline />
        {/* <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 5,
            borderRadius: 2,
            height: '100%',
            overflow: 'scroll',
            bgcolor: 'white',
          }}
        > */}
          {mapMode === 1 ? (
            <MapMode1 />
          ) : (
            <div>
              <Box sx={{ px: 2 }}>
                <Autocomplete
                  options={Data}
                  getOptionLabel={(option) => option.Brand}
                  renderInput={(params) => (
                    <TextField {...params} label="แบรนด์" variant="outlined" />
                  )}
                />
              </Box>
              <Box sx={{ px: 2, mb: 2 }}>
                <Autocomplete
                  options={uniqueOptions}
                  getOptionLabel={(option) => option.Origin}
                  renderInput={(params) => (
                    <TextField {...params} label="จังหวัด" variant="outlined" />
                  )}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                {Data.map((data, index) => (
                  <CardBrand
                    key={index}
                    Brand={data.Brand}
                    Origin={data.Origin}
                    Products={data.Products}
                    ContactNumber={data.ContactNumber}
                    Page={data.Page}
                    sx={{ width: '100%', marginBottom: '10px' }}
                  />
                ))}
              </Box>
            </div>
          )}
 
        <Box sx={{ mt: 8, mb: 4 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Powered by '}
            <Link color="inherit" href="https://mui.com/">
              ประชาชนเบียร์
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      {/* </Container> */}
    </ThemeProvider>
  );
}
