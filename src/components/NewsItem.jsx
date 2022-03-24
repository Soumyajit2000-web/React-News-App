import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function NewsItem(props) {
    const { imageUrl, title, desc, link } = props

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={link}>Read More</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default NewsItem