import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

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
				<Grid container className="experience">
					<Grid item className="experience-head" xs={12}>
						<Typography variant="h5" component="h2" className={classes.title}>
							{props.title}
						</Typography>
						<Typography className={classes.pos} color="textSecondary">
							{props.place}
						</Typography>
						<Typography color="textSecondary" className={classes.date} gutterBottom>
							{props.date}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body2" component="p" className={classes.description}>
							{props.description}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	)
}

export default ExperienceCard
