import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import imgCard from './../assets/event.png';
import imgPromotion from './../assets/promotion2.png';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Map() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
   <div>
 <br></br>
     <Card >
      <CardHeader
        avatar={      
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     <AirportShuttleIcon></AirportShuttleIcon>
          </Avatar>
        }

        title="บริการรถรับส่งฟรี MRT สิรินธร - ช่างชุ่ย"
        subheader="7-8 ตุลาคม 2566"
      />
      <CardMedia
        component="img"
        height="194"
        image={imgCard}
        alt="Paella dish"
      />
            <CardContent>
            <Typography variant="body2" color="text.secondary" align="center">
                บริการรถรับส่งฟรี MRT สิรินธร ทางออก 3A - ช่างชุ่ย ประตู 1
                
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                เวลารับ-ส่ง 13.30 - 22.30 น.
                
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                :
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
            บริการรถรับส่งฟรี ช่างชุ่ย ประตู 1 - MRT สิรินธร ทางออก 3A
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                เวลารับ-ส่ง 18.00 - 22.30 น.
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                :
            </Typography>

            <Typography variant="body2" color="text.secondary" align="center">
            หรือลงสถานีรถไฟฟ้า บางบำหรุ ต่อวินมอไซต์มาเลย(อันนี้ไม่ฟรีนะ)
            </Typography>
            </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
    <br></br>
    <Card >
      <CardHeader
        avatar={      
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                     <AirportShuttleIcon></AirportShuttleIcon>
          </Avatar>
        }

        title="โปรโมชั่น U drink I drive"
        subheader="7-8 ตุลาคม 2566"
      />
      <CardMedia
        component="img"
        height="194"
        image={imgPromotion}
        alt="Paella dish"
      />
            <CardContent>
            <Typography variant="body2" color="text.secondary" align="center">
            งานนี้รอทุกท่านมาลิ้มลองรสชาติของเบียร์ชนิดต่างๆมากมาย ชิมจนหนำใจไม่ต้องกังวลถ้าขับรถกลับไม่ไหว
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
            เรามี U drink I drive มาขับแทน พาทุกคนกลับบ้านอย่างปลอดภัย
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
            แค่ใส่โค้ด "BEERMARKET" ก็ลดทันทีไปเลย 10% 
            </Typography>           
            <Typography variant="body2" color="text.secondary" align="center">
            เรียกผ่านแอป U drink I drive หรือ โทรเรียกใช้บริการที่ 
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
            091-0809108 
            </Typography>

            </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    
    </Card>

   
   </div>

    
  );
}