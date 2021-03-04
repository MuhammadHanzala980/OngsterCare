import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        boxShadow: "none"
    },
    media: {
        height: 190,
    },
});

export default function SimpleCard({ title, detail, img }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={process.env.PUBLIC_URL + `/assets/icons/Rectangle 15${img}.png`}
                    title="Contemplative Reptile"
                />
                <IconButton aria-label="add to favorites" style={{ position: "absolute", outline: "none", top: 0 }}>
                    <FavoriteIcon />
                </IconButton>
                <CardContent>
                    <Typography variant="body1" color="textPrimary" component="p">
                        {title} {detail}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions> */}
        </Card>
    );
}