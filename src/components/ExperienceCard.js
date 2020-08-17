import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import noticeapp from './assets/noticeapp.png'
import statusbrew from './assets/statusbrew.png'
import geekers from './assets/geekers.png'
import netscrew from './assets/netscrew.png'

const useStyles = makeStyles({
	media: {
		height: 140,
		backgroundSize: "contain"
	},
});

const ExperienceCard = (props) => {
	const classes = useStyles()

	const titleID = props.titleID

	return (
		<Card className={classes.root}>
			<CardActionArea>
				{titleID == "noticeapp" &&
					<CardMedia className={classes.media} image={noticeapp} title="Notice App" />
				}
				{titleID == "statusbrew" &&
					<CardMedia className={classes.media} image={statusbrew} title="Statusbrew" />
				}
				{titleID == "geekers" &&
					<CardMedia className={classes.media} image={geekers} title="Geekers Technologies" />
				}
				{titleID == "netscrew" &&
					<CardMedia className={classes.media} image={netscrew} title="Netscrew Technologies" />
				}
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
	)
}

export default ExperienceCard
