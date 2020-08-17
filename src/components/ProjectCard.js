import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import aura from './assets/aura.png'

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		margin: 20
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
	link: {
		color: "#121212",
		textDecoration: "none",
		padding: 10
	},
	description: {
		textAlign: "justify"
	}
}))

const ProjectCard = () => {
	const classes = useStyles()
	const [expanded, setExpanded] = React.useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						A
        			</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title="Aura"
				subheader="ReactJS, MySQL"
			/>
			<CardMedia
				className={classes.media}
				image={aura}
				title="Aura"
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
					Get to know about the air quality of your destination ahead of time.
					Know about the precautions you can follow, carry ons and best travel time to your destination.
        		</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<a href="https://aura.thecodersingh.com" className={classes.link} target="_blank">Visit Project</a>
			</CardActions>
		</Card>
	)
}

export default ProjectCard
