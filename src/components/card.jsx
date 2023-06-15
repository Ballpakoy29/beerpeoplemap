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
        fontFamily:  ['Anuphan', 'sans-serif'] .join(','),
      }}
      >
      <CardHeader 
        title={props.brand}
        subheader={props.province}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
      <Typography variant="body2" color="text.secondary">
               โรงผลิต :  {props.spirit}
        </Typography>
        <Typography variant="body2" color="text.secondary">
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
        <CardContent>
          <Typography paragraph color="text.primary">รายละเอียด:</Typography>
          <Typography paragraph>
                ความเป็นมา : {props.history}
          </Typography>
          <Typography paragraph>
                แนะนำแบรนด์ : {props.history}
          </Typography>
          <Typography paragraph>

          </Typography>
          <Typography paragraph color="text.primary">ติดต่อ</Typography>
          <Typography paragraph>
                Page : <a href={props.page}>{props.page}</a>
          </Typography>
          <Typography paragraph>
                ติดต่อ : {props.tel} {props.contact}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}