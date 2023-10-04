import React from 'react';
import { Card } from 'antd';
import  './card.css';
import Typography from '@mui/material/Typography';
import a1_2 from './../assets/a1_2.png'
import a1_3 from './../assets/a1_3.png';
import a1_1 from './../assets/a1_1.png';

import a2_1 from './../assets/a2_1.png';
import a2_2 from './../assets/a2_2.png';

// import สุราข้าวหอมชัยภูมิ from './../assets/สุราข้าวหอมชัยภูมิ.jpg';
// import อีสานรัม from './../assets/อีสานรัม.jpg';
// import WHITE_SHARK_SUMMER_BEACH from './../assets/WHITE_SHARK_SUMMER_BEACH.jpg';
// import โคโยตี้_ลำก้า from './../assets/โคโยตี้_ลำก้า.jpg';
// import PUR_SPIRIT_OF_THAILAND from './../assets/PUR_SPIRIT_OF_THAILAND.jpg';
// import SIAM_GIN from './../assets/SIAM_GIN.jpg';
// import ERAWAN from './../assets/ERAWAN.jpg';

const { Meta } = Card;

const imageMap = {
  'TENAS' : a1_1,
  'PASUTARA': a1_2,
  'TENA': a1_3,
  'BARISTO': a2_1,
  'RAINBOW': a2_2,


  // 'สุราข้าวหอมชัยภูมิ' : สุราข้าวหอมชัยภูมิ,
  // 'อีสานรัม' : อีสานรัม,
  // 'WHITE_SHARK_SUMMER_BEACH' : WHITE_SHARK_SUMMER_BEACH,
  // 'โคโยตี้_ลำก้า' : โคโยตี้_ลำก้า,
  // 'PUR_SPIRIT_OF_THAILAND' : PUR_SPIRIT_OF_THAILAND,
  // 'SIAM_GIN' : SIAM_GIN,
  // 'ERAWAN' : ERAWAN
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