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
import './mainp.css' 

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

export default function card(props) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card 
    sx={{
        maxWidth: '100vw',
        width: '100%',
        height : 'auto',
        padding: '5px',
        border: '1px solid #ccc',
        marginBottom: '10px',
      }}
      >
      <CardHeader 
        title={props.brand}
        subheader={props.province}
        titleTypographyProps={{
          style: {
            fontFamily: 'Anuphan, sans-serif', // Add your desired font family here
            fontSize: '1.4rem',
            fontWeight: 'bold',
          },
        }}
        subheaderTypographyProps={{
          style: {
            fontFamily: 'Anuphan, sans-serif', // Add your desired font family here
            fontSize: '1.0rem',
            fontWeight: 600,
          },
        }}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
      <Typography variant="body2" color="text.secondary"
      sx={{
        fontFamily: 'Anuphan, sans-serif', // Add your desired font family here
        fontSize: '0.8rem',
        fontWeight: 'bold',
      }}>
               โรงผลิต :  {props.spirit}
        </Typography>
        <Typography variant="body2" color="text.secondary" 
          sx={{
            fontFamily: 'Anuphan, sans-serif', // Add your desired font family here
            fontSize: '0.8rem',
            fontWeight: 'bold',
          }}>
               ประเภท :  {props.style}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
      <Typography variant="body2" color="text.secondary">
          
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent >
          <Typography paragraph color="text.primary"
            sx={{
              fontFamily: 'Anuphan, sans-serif', // Add your desired font family here
              fontSize: '0.8rem',
              fontWeight: 600,
            }}>
              รายละเอียด:
            </Typography>
          <Typography paragraph color="text.primary"
            sx={{
              fontFamily: 'Anuphan, sans-serif', // Add your desired font family here
              fontSize: '0.8rem',
              fontWeight: 500,
            }}>
                ความเป็นมา : {props.history}
          </Typography>
          <Typography paragraph color="text.primary"
            sx={{
              fontFamily: 'Anuphan, sans-serif', // Add your desired font family here
              fontSize: '0.8rem',
              fontWeight: 500,
            }}>
                แนะนำแบรนด์ : {props.history}
          </Typography>
          <Typography paragraph>

          </Typography>
          <Typography paragraph color="text.primary"
            sx={{
              fontFamily: 'Anuphan, sans-serif', // Add your desired font family here
              fontSize: '0.8rem',
              fontWeight: 500,
            }}>
            ติดต่อ</Typography>
            <Typography paragraph color="text.primary"
            sx={{
              fontFamily: 'Anuphan, sans-serif', // Add your desired font family here
              fontSize: '0.8rem',
              fontWeight: 500,
            }}>
                Page : <a href={props.page}>{props.page}</a>
          </Typography>
          <Typography paragraph color="text.primary"
            sx={{
              fontFamily: 'Anuphan, sans-serif', // Add your desired font family here
              fontSize: '0.8rem',
              fontWeight: 500,
            }}>
                ติดต่อ : {props.tel} {props.contact}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}