import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const Beer = (props) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={props.items.brands} description="www.instagram.com" />
  </Card>
);
export default Beer;