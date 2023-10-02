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
import { DatePicker ,Button, Form, Space} from 'antd';
import './mainp.css'

import MapMode from './map';
import Beer from './beer';
import { Image } from 'antd';
import SpiritImg from './../assets/spirit.png';
import BeerImg from './../assets/beer.png';
import spiritBrand from './../data/spirit.json';



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
        const provinceSelectRef = useRef(null);
        const sortedProvinces = Province.sort((a, b) => a.label.localeCompare(b.label));
        const [menu, setMenu] = React.useState(1);
        const [brandDatas, setBrandDatas] = React.useState(null);

        const [txtBrand,setTxtBrand] = React.useState("");
        const [txtProvince,setTxtProvince] = React.useState("");
        const [expanded, setExpanded] = React.useState(false);

        const [selectSpirit,setSelectSpirit] = React.useState(null);
        const [selectBeer,setSelectBeer] = React.useState(null);

        const [spiritBrandDatas, setSpiritBrandDatas] = React.useState(null);
        const [beerBrandDatas, setBeerBrandDatas] = React.useState(null);

        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
        const handleChange = (event, newValue) => {
          //setTxtBrand("");
         // setTxtProvince("");
          setMenu(newValue);
        };

        useEffect(()=>{
              // อัปเดตข้อมูลใน spiritBrandDatas
              if (spiritBrand !== null) {
                const spiritBrands = spiritBrand.booths.map((item) => ({
                  value: item.brands,
                  label: item.brands,
                })).sort((a, b) => {
                  return a.label.localeCompare(b.label);
                });
                setSpiritBrandDatas(spiritBrands);
              }
            
        }
        ,[])

            return (
          <ThemeProvider theme={defaultTheme}>
             <CssBaseline />
            <Box  sx={{ position: '', top: 0, zIndex: 999 , }}>
              <Box >
                  <Tabs
                    value={menu}
                    onChange={handleChange}
                    centered
                    variant="standard"
                    TabIndicatorProps={{ style: { backgroundColor: 'black' } }}
                    sx={{
                      '& .MuiTab-root': {
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        fontFamily: 'Anuphan, sans-serif', 
                      },
                    }}
                  >
                  <Tab value={1} label="การเดินทาง" />
                  <Tab value={2} label="เบียร์ประชาชน" />
                  <Tab value={3} label="สุราประชาชน" />
                 

                </Tabs>
              </Box>
             
               
                </Box>
                
                <Container component="main"  sx={{ height: '80vh'   }}> {/* Set maxWidth to "xs" */}
                  <Box>
                    {menu === 1 ?
                              (
                                <Box sx={{ display: 'flex' ,flexDirection: 'column'   }}>
                                    <MapMode></MapMode>             
                              </Box>
                              ) : 
                    menu === 2 ? 
                                <div>
                                    <Box sx={{ display: 'flex' ,flexDirection: 'column'   }}>
                                            <Box sx={{ p: 1 }}>

                                          {/* ยังไม่เลือกให้แสดงภาพ */}
                                          

                                            {/* <Form ref={brandSelectRef}>         
                                            <Form.Item name="brand" label=""  >
                                            <Select
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
                                                              if (provinceSelectRef.current) {
                                                                provinceSelectRef.current.resetFields();
                                                              }
                                                            }
                                                          }}
                                                          style={{ width: '100%' }}
                                                          // filterOption={(input, option) =>
                                                          //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                          // }
                                                          options={brandDatas}
                                                        />
                                                    </Form.Item>   
                                                </Form> */}
                                            </Box>
                                          {/* <Beer></Beer>
                                          <Beer></Beer>
                                          <Beer></Beer> */}
                                          </Box>
                                          <Box sx={{ p: 1 }}>
                                              <Image                               
                                                src={BeerImg}
                                              />
                                            </Box>
                                </div>
                            : ( // menu === 3
                              <div>       

                                  <Box sx={{ p: 1 }}>
                                  <Form ref={brandSelectRef}>         
                                  <Form.Item name="brand" label=""  >
                                  <Select
                                                size={"large"}
                                                // showSearch
                                                // allowClear ={true}
                                                placeholder="เลือกตามแบรนด์"
                                                optionFilterProp="children"
                                                onChange={(value, option) => {
                                                  if (option === undefined) {
                                                    //setTxtBrand(""); // Set the state to null when the "Clear" button is clicked
                                                  } else {                                 
                                                    // setTxtProvince("");
                                                    // setTxtBrand(value);
                                                    // if (provinceSelectRef.current) {
                                                    //   provinceSelectRef.current.resetFields();
                                                    // }
                                                  }
                                                }}
                                                style={{ width: '100%' }}
                                                // filterOption={(input, option) =>
                                                //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                // }
                                                options={spiritBrandDatas}
                                              />
                                          </Form.Item>   
                                      </Form>
                                  </Box>

                                <Box sx={{ display: 'flex' ,flexDirection: 'column'   }}>
                                <Box sx={{ p: 1 }}>
                                              <Image                               
                                                src={SpiritImg}
                                              />
                                            </Box>
                   
                                  <Box sx={{ p: 1 }}>
                                  {/* <Form ref={provinceSelectRef}>         
                                  <Form.Item name="province" label=""  >
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
                                                    if (brandSelectRef.current) {
                                                      brandSelectRef.current.resetFields();
                                                    }
                                                  }
                                                }}
                                                style={{ width: '100%' }}
                                                filterOption={(input, option) =>
                                                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                }
                                                options={sortedProvinces}
                                              />
                                        </Form.Item>
                                        </Form> */}
                                  </Box>
                                  <Box sx={{ p: 2, flexGrow: 1, overflow: 'scroll', height : '80vh'  }}>
                                    {/* { Data.filter((data) => {
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
                                  )) } */}
                              
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
