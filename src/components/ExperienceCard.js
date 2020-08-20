import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		background: "none",
		boxShadow: "none",
		marginTop: "20px",
		marginBottom: "20px",
		textAlign: "center",
	},
	date: {
		fontSize: 14,
		color: "#000",
		marginBottom: 12,
		fontFamily: "Lato, sans-serif"
	},
	pos: {
		color: "#2fa52f",
		fontWeight: "bold",
		fontFamily: "Lato, sans-serif"
	},
	title: {
		color: "#000",
		fontWeight: "bold",
		fontSize: "1.4em",
		fontFamily: "Lato, sans-serif"
	},
	description: {
		fontFamily: "Lato, sans-serif"
	},
	button: {
		justifyContent: "center"
	}
})

const ExperienceCard = (props) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant="h5" component="h2" className={classes.title}>
					{props.title}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					{props.place}
				</Typography>
				<Typography color="textSecondary" className={classes.date} gutterBottom>
					{props.date}
				</Typography>
				<Typography variant="body2" component="p" className={classes.description}>
					{props.description}
				</Typography>
			</CardContent>
			<CardActions className={classes.button}>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	)
}

export default ExperienceCard
