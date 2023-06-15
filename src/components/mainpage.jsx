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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Autocomplete } from '@mui/material';
import Data from '../data/map_01';
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

export default function MainPage() {
        const [mapMode, setMapMode] = React.useState(2);
        const [brand,setBrand] = React.useState("");
        const [province,setProvince] = React.useState("");
        const uniqueOptions = Data.filter((value, index, self) => {
          return self.findIndex((o) => o.Origin === value.Origin) === index;
        });

        const handleChange = (event, newValue) => {
          setMapMode(newValue);
        };

  return (
    <ThemeProvider theme={defaultTheme}>
 <Box >
       <Tabs
        value={mapMode}
        onChange={handleChange}
        centered
        variant="large"
      //  TabIndicatorProps={{ style: { backgroundColor: 'black' } }}
        sx={{
          '& .MuiTab-root': {
            fontWeight: 'bold',
            fontSize: '1.2rem',
          },
        }}
      >
        <Tab value={1} label="คราฟต์เบียร์" />
        <Tab value={2} label="สุราชุมชน" />
      </Tabs>
    </Box>
      <CssBaseline />
      <Container component="main" maxWidth="xs"> {/* Set maxWidth to "xs" */}
        <Box sx={{ mt: 2 }}>
          {mapMode === 1 ? (
                  <iframe src="https://www.google.com/maps/d/embed?mid=1tacrqkq-ij7HY4ROd9ZBvhuPvgSY0jk&ehbc=2E312F" width="300" height="600"></iframe>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 1 }}>
                <Autocomplete
                  options={Data}
                  getOptionLabel={(option) => option.Brand}
                  onChange={(event, newValue) => {
                    setBrand(newValue?.Brand || ""); // Update the brand state
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="แบรนด์"
                      variant="outlined"
                      size="Large"
                    />
                  )}
                  disableInput  
                />
              </Box>
              <Box sx={{ p: 1 }}>
                <Autocomplete
                      options={uniqueOptions}
                      getOptionLabel={(option) => option.Origin}
                      onChange={(event, newValue) => {
                        setProvince(newValue?.Origin || ""); // Update the province state
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="จังหวัด"
                          variant="outlined"
                          size="Large"
                        />
                      )}
                      disableInput  
                />
              </Box>
              <Box sx={{ p: 2, flexGrow: 1, overflow: 'auto' }}>
                { Data.filter((data) => {
                    if (brand === "" && province === "") {
                      return true; // Show all data if brand and province are empty
                    } else if (brand === "") {
                      return data.Origin === (province); // Filter by partial match for province if brand is empty
                    } else if (province === "") {
                      return data.Brand === (brand); // Filter by partial match for brand if province is empty
                    } else {
                      return (
                        data.Brand === (brand) && data.Origin === province
                      ); // Filter by partial match for both brand and province
                    }
                  }).map((data, index) => (
                    <CardBrand
                      key={index}
                      Brand={data.Brand}
                      Origin={data.Origin}
                      Products={data.Products}
                      ContactNumber={data.ContactNumber}
                      Page={data.Page}
                      // sx={{
                      //   width: '100%',
                      //   marginBottom: '10px',
                      //   '& .MuiTypography-root': {
                      //     fontSize: '14px',
                      //   },
                      // }}
                    />
              )) }
           
              </Box>
            </Box>
          )}
          <Box sx={{ p: 2 }}>
            <Copyright></Copyright>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
