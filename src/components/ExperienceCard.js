import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import noticeapp from "./assets/noticeapp.png"

const useStyles = makeStyles({
	media: {
		height: 140,
	},
});

const ExperienceCard = (props) => {
	const classes = useStyles()

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={noticeapp}
					title="Notice App"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.place}
					</Typography>
					<Typography gutterBottom variant="h6" component="h2">
						{props.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Duties
			</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Learn More
		  		</Button>
			</CardActions>
		</Card>
	);
}

export default ExperienceCard
