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
	},
	title: {
		fontSize: 16,
	},
	pos: {
		marginBottom: 12,
	},
})

const ExperienceCard = (props) => {
	const classes = useStyles()

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant="h5" component="h2">
					{props.place}
				</Typography>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					{props.title}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					Duties
					</Typography>
				<Typography variant="body2" component="p">
					Date
        			</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" className={classes.link}>Learn More</Button>
			</CardActions>
		</Card>
	)
}

export default ExperienceCard
