import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import ShareIcon from '@material-ui/icons/Share'
import samp from './assets/samp.png'

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		margin: 20
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
		backgroundSize: 'contain'
	},
	avatar: {
		backgroundColor: red[500],
	},
	link: {
		color: "#121212",
		textDecoration: "none",
		padding: 10
	},
	share: {
		textAlign: "right"
	}
}));

const PublicationCard = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						P
          			</Avatar>
				}
				action={
					<IconButton aria-label="share" className={classes.share}>
						<ShareIcon />
					</IconButton>
				}
				title="The World of Pawn"
				subheader="January 07, 2019"
			/>
			<CardMedia
				className={classes.media}
				image={samp}
				title="The World of Pawn"
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					Most of you probably have played or at least heard about the game ‘Grand Theft Auto: San Andreas’. Yes, I am talking about such an old game in 2019. We all have smashed many people and destroyed many things while driving an ambulance. This whole story, or at least, its internal parts were pre-scripted and the story is quite familiar to all of us.
        		</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<a href="https://link.medium.com/elyn4IaS38" className={classes.link} target="_blank" rel="noopener noreferrer">
					Read Full Article
				</a>
			</CardActions>
		</Card>
	);
}

export default PublicationCard
