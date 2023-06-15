import React, { useState, useEffect,useRef } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Autocomplete } from '@mui/material';
import Data from '../data/map_01';
import Province from '../data/province.json'
import CardBrand from './card';
// import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from 'antd';



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
        const brandSelectRef = useRef(null);
        const sortedProvinces = Province.sort((a, b) => a.label.localeCompare(b.label));
        const [mapMode, setMapMode] = React.useState(2);
        const [brandDatas, setBrandDatas] = React.useState(null);

        const [txtBrand,setTxtBrand] = React.useState("");
        const [txtProvince,setTxtProvince] = React.useState("");


        const handleChange = (event, newValue) => {
          setTxtBrand("");
          setTxtProvince("");
          setMapMode(newValue);
        };

        useEffect(()=>{
                if(Data !== null){
                  setBrandDatas(Data.map((item) => ({
                    value: item.brand,
                    label: item.brand,
                  })).sort((a, b) => a.label.localeCompare(b.label)))
                }
            
        }
        ,[])

            return (
              <ThemeProvider theme={defaultTheme}>
            <Box  sx={{ position: 'sticky', top: 0, zIndex: 999 }}>
              <Box >
                <Tabs
                  value={mapMode}
                  onChange={handleChange}
                  centered
                  variant="large"
                  TabIndicatorProps={{ style: { backgroundColor: 'black' } }}
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
              </Box>
                <CssBaseline />
                <Container component="main" maxWidth="xs"> {/* Set maxWidth to "xs" */}
                  <Box sx={{ mt: 2 }}>
                    {mapMode === 1 ? (
                            <iframe src="https://www.google.com/maps/d/embed?mid=1tacrqkq-ij7HY4ROd9ZBvhuPvgSY0jk&ehbc=2E312F" width="100%" height="100vh"></iframe>
                    ) : (<div>
                      <Box sx={{ display: 'flex', flexDirection: 'column'  }}>
                        <Box sx={{ p: 1 }}>
                        <Select
                                      ref={brandSelectRef}
                                      size={"large"}
                                  //   showSearch
                                      allowClear ={true}
                                      placeholder="เลือกตามแบรนด์"
                                      optionFilterProp="children"
                                      onChange={(value, option) => {
                                        if (option === undefined) {
                                          setTxtBrand(""); // Set the state to null when the "Clear" button is clicked
                                        } else {
                                          
                                          setTxtProvince("");
                                          setTxtBrand(value);
                                        }
                                      }}
                                      style={{ width: '100%' }}
                                      // filterOption={(input, option) =>
                                      //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                      // }
                                      options={brandDatas}
                                    />
                        </Box>
                        <Box sx={{ p: 1 }}>
                        <Select
                                      size={"large"}
                                    // showSearch
                                      allowClear ={true}
                                      placeholder="เลือกตามจังหวัด"
                                      optionFilterProp="children"
                                      onChange={(value, option) => {
                                        if (option === undefined) {
                                          setTxtProvince(""); // Set the state to null when the "Clear" button is clicked
                                        } else {
                                          setTxtBrand("");
                                          setTxtProvince(value);

                                          console.log(brandSelectRef.current)
                                          if (brandSelectRef.current) {
                                            debugger
                                            brandSelectRef.current.reset();
                                          }
                                        }
                                      }}
                                      style={{ width: '100%' }}
                                      filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                      }
                                      options={sortedProvinces}
                                    />
                        </Box>
                        <Box sx={{ p: 2, flexGrow: 1, overflow: 'scroll', height : '80vh'  }}>
                           { Data.filter((data) => {
                              if (txtBrand === "" && txtProvince === "") {
                                return true; // Show all data if brand and province are empty
                              } else if (txtBrand === "") {
                                return data.province === (txtProvince); // Filter by partial match for province if brand is empty
                              } else if (txtProvince === "") {
                                return data.brand === (txtBrand); // Filter by partial match for brand if province is empty
                              } else {
                                return (
                                  data.Brand === (txtBrand) && data.province === (txtProvince)
                                ); // Filter by partial match for both brand and province
                              }
                            }).map((element, index) => (
                              <CardBrand
                              {...element} 
                              key={index}
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
                    </div>
                      
                    )}
                    <Box sx={{ p: 2 }}>
                      <Copyright></Copyright>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            );
        
}
