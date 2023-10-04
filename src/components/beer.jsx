import React from 'react';
import { Card } from 'antd';
import  './card.css';
import Typography from '@mui/material/Typography';
import a1_2 from './../assets/a1_2.png'
import a1_3 from './../assets/a1_3.png';
import a1_1 from './../assets/a1_1.png';

import a2_1 from './../assets/a2_1.png';
import a2_2 from './../assets/a2_2.png';

import a3_1 from './../assets/a3_1.png';
import a3_2 from './../assets/a3_2.png';
import a3_3 from './../assets/a3_3.png';

import a4_1 from './../assets/a4_1.png';

import a5_1 from './../assets/a5_1.png';
import a5_2 from './../assets/a5_2.png';
import a5_3 from './../assets/a5_3.png';

import a6_1 from './../assets/a6_1.png';
import a6_2 from './../assets/a6_2.png';

import a7_1 from './../assets/a7_1.png';
import a7_2 from './../assets/a7_2.png';

import a8_1 from './../assets/a8_1.png';
import a8_2 from './../assets/a8_2.png';
import a8_3 from './../assets/a8_3.png';

import a9_1 from './../assets/a9_1.png';
import a9_2 from './../assets/a9_2.png';
import a9_3 from './../assets/a9_3.png';

import a10_1 from './../assets/a10_1.png';
import a10_2 from './../assets/a10_2.png';

import a11_1 from './../assets/a11_1.png';
import a11_2 from './../assets/a11_2.png';

import a12_1 from './../assets/a12_1.png';
import a12_2 from './../assets/a12_2.png';

import a13_1 from './../assets/a13_1.png';
import a13_2 from './../assets/a13_2.png';
import a13_3 from './../assets/a13_3.png';

const { Meta } = Card;

const imageMap = {
  'TENAS' : a1_1,
  'PASUTARA': a1_2,
  'TENA': a1_3,

  'BARISTO': a2_1,
  'RAINBOW': a2_2,

  'สุราข้าวหอมชัยภูมิ': a3_1,
  'อีสานรัม': a3_2,
  'WHITE_SHARK_SUMMER_BEACH': a3_3,

  'โคโยตี้_ลำก้า': a4_1,
  
  'PUR_SPIRIT_OF_THAILAND': a5_1,
  'ERAWAN': a5_2,
  'SIAM_GIN': a5_3,

  'FURANO': a6_1,
  'ตำนาน': a6_2,

  'COB': a7_1,
  'บรรเจิดเบียร์': a7_2,

  'บำเรอ': a8_1,
  'THAY': a8_2,
  'ลุงนิด': a8_3,

  'CHALONG_BAY': a9_1,
  'LANNA': a9_2,
  'SANEHA': a9_3,

  'SATO': a10_1,
  'CONNOLLY': a10_2,
  
  'TANODE': a11_1,
  'NASAN': a11_2,

  'สบายสบ๊าย': a12_1,
  'จตุชีวา': a12_2,

  'INTHONE_BREWING': a13_1,
  'HOPSTER': a13_2,
  'CHONG': a13_3,

};

const Beer = (props) => {
  const imageSrc = imageMap[props.items.brands.replace(/\s+/g, '_')];
  return (
    <div>
 <Card
  hoverable
  style={{ width: 240 }}
  cover={<img alt="example" src={imageSrc} className="card-image" />}
>
  <Meta title={`[${props.items.booth_id}] - ${props.items.brands}`} description={`[${props.items.booth_id}] - ${props.items.brands}`} />
</Card>
    </div>
  );
};
export default Beer;