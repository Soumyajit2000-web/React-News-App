import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlaceHolderImage from '../images/SM-placeholder.png'

function NewsItem(props) {
    const { imageUrl, title, desc, link } = props;

    const trimTitle = (str) => {
        let length = 50;
        if(str!==null){
            return str.length > length ? str.substring(0, length - 3) + "..." : str;
        }
    }

    const trimDesc = (str) => {
        let length = 100;
        if(str!==null){
            return str.length > length ? str.substring(0, length - 3) + "..." : str;
        }
    }

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl !== null ? imageUrl : PlaceHolderImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {trimTitle(title)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {trimDesc(desc)}
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