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
        <Typography variant="body2" color="text.secondary">
            บริการรถรับส่งฟรี MRT สิรินธร ทางออก 3A  เวลารับ-ส่ง 13.30 - 22.30 น.
        </Typography>
        <Typography variant="body2" color="text.secondary">
            เมาไม่ขับ  ให้ U Drink I Drive มาขับแทน ลดทันที 10% เพียงใส่โค้ด " BEERMARKET "
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
    
    </Card>
  );
}