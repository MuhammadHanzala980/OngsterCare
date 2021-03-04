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

export default function MediaCard({ user, onClick }) {
    const classes = useStyles();
    const hourlyRt = JSON.parse(user.hourlyRate);
    console.log(hourlyRt, 'hr')
    return (
        <Card className={classes.root}
        // onClick={onClick}
        >
            <CardActionArea >
                <CardMedia
                    className={classes.media}
                    image={!!user.image ? `https://api.ongstercare.com${user.image}` : `${process.env.PUBLIC_URL}/assets/icons/no-img.png`}
                    title="Contemplative Reptile"
                />
                <IconButton aria-label="add to favorites" style={{ position: "absolute", outline: "none", top: 0 }}>
                    <FavoriteIcon />
                </IconButton>
                <CardContent>
                    <Typography gutterBottom variant="h6" className="mb-0">
                        ${hourlyRt.min} - ${hourlyRt.max}
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p">
                        {user.firstname} {user.middlename} {user.lastname}
                    </Typography>
                    <div className="d-flex align-items-center">
                        <Typography variant="body1" display="inline" color="textSecondary" component="p" className="pr-2 border border-top-0 border-left-0 border-bottom-0 border-silver">
                            {user.experience} exp
          </Typography>
                        <span className="ml-2 pink-text"> <img alt="" src={process.env.PUBLIC_URL + "/assets/icons/star.png"} /> 3.4</span>
                    </div>
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