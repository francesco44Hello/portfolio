import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Modal({ title, img, description, subheader, link, repo }) {

  return (
    
    <Card sx={{ maxWidth: 345 }}>
    <a href={link} alt='link to project' style={{textDecoration: 'none'}} target='_blank'>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="project snapshot"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color: 'black'
        }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{overflowY: 'scroll', maxWidth: 400, maxHeight: 100, }}>
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    </a>
    <CardActions>
      <Button size="small" color="primary">
        <a href={repo} alt='repo link' target='_blank' >
        <GitHubIcon style={{color: 'black'}}/>
        </a>
      </Button>
    </CardActions>
  </Card>

  );
}
