import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { List } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		background: "none",
		boxShadow: "none",
		borderLeft: "solid 4px #2fa52f",
		marginTop: "20px",
		marginBottom: "20px"
	},
	date: {
		fontSize: 14,
		color: "#000"
	},
	pos: {
		marginBottom: 12,
		color: "#2fa52f",
		fontWeight: "bold"
	},
	title: {
		color: "#000",
		fontWeight: "bold",
		fontSize: "1.4em"
	},
	description: {
		textAlign: "justify"
	}
})

const ExperienceCard = (props) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography color="textSecondary" className={classes.date} gutterBottom>
					{props.date}
				</Typography>
				<Typography variant="h5" component="h2" className={classes.title}>
					{props.title}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					{props.place}
				</Typography>
				<Typography variant="body2" component="p" className={classes.description}>
					{props.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	)
}

export default ExperienceCard
