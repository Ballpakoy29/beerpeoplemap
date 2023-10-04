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
import drew from './../assets/drew.jpg';

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
import beerBrand from './../data/beer.json';
import { Tooltip } from 'antd';

import mapAll from './../assets/map_all.png';


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
        
        const [menu, setMenu] = React.useState(1);
        const [brandDatas, setBrandDatas] = React.useState(null);

        const [txtBrand,setTxtBrand] = React.useState("");
        const [expanded, setExpanded] = React.useState(false);

        const [selectSpirit,setSelectSpirit] = React.useState(null);
        const [selectBeer,setSelectBeer] = React.useState(null);

        const [spiritBrandDatas, setSpiritBrandDatas] = React.useState(null);
        const [beerBrandDatas, setBeerBrandDatas] = React.useState(null);

        const [refreshKey, setRefreshKey] = useState(Date.now() + Math.random());
        const [refreshKey2, setRefreshKey2] = useState(Date.now() + Math.random());

        const handleChange = (event, newValue) => {
          //setTxtBrand("");
         // setTxtProvince("");
         
          setSelectBeer(null);
          setSelectSpirit(null);
          setMenu(newValue);
          brandSelectRef.current.resetFields();
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

              if (beerBrand !== null) {
                const beerBrands = beerBrand.booths.map((item) => ({
                  value: item.brands,
                  label: item.brands,
                })).sort((a, b) => {
                  return a.label.localeCompare(b.label);
                });
                setBeerBrandDatas(beerBrands);
              }
            
        }
        ,[])

        useEffect(() => {
          setRefreshKey(Date.now() + Math.random());
        }, [selectBeer]);
        
        useEffect(() => {
          setRefreshKey2(Date.now() + Math.random());
        }, [selectSpirit]);


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
                        fontSize: '0.8rem',
                        fontFamily: 'Anuphan, sans-serif', 
                      },
                    }}
                  >
                  <Tab value={1} label="การเดินทาง" />
                  <Tab value={2} label="เบียร์ประชาชน" />
                  <Tab value={3} label="สุราประชาชน" />
                  <Tab value={4} label="ยืนเดี่ยว" />

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
                                  <Box sx={{ p: 1 } }>  
                                  <Form ref={brandSelectRef}>         
                                  <Form.Item name="brand" label=""  >
                                  <Select
                                                size={"large"}
                                                // showSearch
                                                allowClear ={true}
                                                placeholder="เลือกตามแบรนด์"
                                                optionFilterProp="children"
                                                onChange={(value, option) => { 
                                                  if (option === undefined) {
                                                    setSelectBeer(null);
                                                  } else {     
                                                    //เอาเลข ID มาเช็คกับข้อมูลที่มีอยู่ใน beerBrand
                                                    const filteredBrands = beerBrand.booths.filter((item) => {
                                                      return item.brands === value;

                                                    });

                                                     // Assuming you have an array called allBooths
                                                  const furtherFiltered = beerBrand.booths.filter(booth => {
                                                    return filteredBrands.some(filteredBrand => filteredBrand.booth_id === booth.booth_id);
                                                  });
       
                                                    console.log(furtherFiltered) ;         
                                                    setSelectBeer(furtherFiltered);         
                                                                       
                                                  }
                                                }}
                                                style={{ width: '100%' }}
                                                // filterOption={(input, option) =>
                                                //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                // }
                                                options={beerBrandDatas}
                                              />
                                              
                                          </Form.Item>                                            
                                      </Form>
                                      {/* <Button type="primary" danger shape="circle" onClick={()=>setSelectBeer(null)} >
                                        X
                                      </Button> */}
                                  </Box>

                                    {selectBeer  === null ?   <Box sx={{ p: 1 }}><Image  src={BeerImg} /> </Box> 
                                    :
                                    <Box sx={{ display: 'flex' ,flexDirection: 'column' , gap:5  }}>
                                    <div key={refreshKey} >
                                    <Box sx={{ display: 'flex', flexDirection: 'row', overflow: 'auto',  gap: 2 }}>                                 
                                            {selectBeer.map((item) => (
                                                <Beer key={item.booth_id} items={item} />
                                            ))}
                                    </Box>
                                    </div>
                                    <Image  src={mapAll} /> 
                                    </Box>
                                     }
                                
                                </div>
                                
                            : 
                            menu === 3 ? 
                              <div>       

                                  <Box sx={{ p: 1 }}>
                                  <Form ref={brandSelectRef}>         
                                  <Form.Item name="brand" label=""  >
                                  <Select
                                                size={"large"}
                                                // showSearch
                                                 allowClear ={true}
                                                placeholder="เลือกตามแบรนด์"
                                                optionFilterProp="children"
                                                onChange={(value, option) => {
                                                  if (option === undefined) {
                                                    setSelectSpirit(null);
                                                  } else {     
                                                       //เอาเลข ID มาเช็คกับข้อมูลที่มีอยู่ใน beerBrand
                                                       const filteredBrands = spiritBrand.booths.filter((item) => {
                                                        return item.brands === value;
                                                      });
                                                       // Assuming you have an array called allBooths
                                                    const furtherFiltered = spiritBrand.booths.filter(booth => {
                                                      return filteredBrands.some(filteredBrand => filteredBrand.booth_id === booth.booth_id);
                                                    });
          
                                                    console.log(filteredBrands) ;                       
                                                    setSelectSpirit(furtherFiltered);                            
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
                                      {/* <Button type="primary" danger shape="circle" onClick={()=>setSelectSpirit(null)} >
                                        X
                                      </Button> */}
                                  </Box>

                               
                                  {selectSpirit  === null ?   <Box sx={{ p: 1 }}><Image  src={SpiritImg} /> </Box> 
                                    :
                                    <Box sx={{ display: 'flex' ,flexDirection: 'column' , gap:5 }}>
                                      <div key={refreshKey2} >
                                    <Box sx={{ display: 'flex', flexDirection: 'row', overflow: 'auto' ,  gap: 2 } }>                                       
                                            {selectSpirit.map((item) => (
                                                <Beer key={item.booth_id} items={item} />
                                            ))}
                                        
                                    </Box>
                                    </div>
                                    <Image  src={mapAll} /> 
                                    </Box>
                                     }
                              </div>
            
                              : <div>
                                    <Box sx={{ display: 'flex' ,flexDirection: 'column' , gap:5 }}>
                                             <Image  src={drew} /> 
                                    </Box>
                                </div>}
                        <Box sx={{ p: 2 }}>
                      <Copyright></Copyright>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            );
        
}
