import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NavIcon from '../common/NavIcon'
import NavDrawer from '../common/NavDrawer'
import SectionHeader from '../common/SectionHeader'
import { TextField, Button, Typography, Avatar, TextareaAutosize } from '@material-ui/core'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'

const useStyles = makeStyles(() => ({
	form: {
		padding: 20
	},
	avatar: {
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 20
	}
}))

const Contact = () => {
	const classes = useStyles()

	return (
		<section id="contact">
			<Grid container>
				<Grid item xs={10}>
					<SectionHeader sectionTitle="Let's Talk!" sectionDescription="I eat computers for breakfast!" />
				</Grid>
				<Grid item xs={2}>
					<NavIcon open={false} />
					<NavDrawer />
				</Grid>
			</Grid>
			<div id="contact-form">
				<Avatar className={classes.avatar}>
					<QuestionAnswerIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Let's Talk
        		</Typography>
				<Grid container direction="column" spacing={2}>
					<Grid item xs={12}>
						<form className={classes.form}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										autoComplete="name"
										name="name"
										variant="outlined"
										required
										fullWidth
										id="name"
										label="Your Name"
										autoFocus
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										autoComplete="email"
										name="email"
										variant="outlined"
										required
										fullWidth
										id="email"
										type="email"
										label="Email Address"
										autoFocus
									/>
								</Grid>
								<Grid item xs={12}>
									<TextareaAutosize
										autoComplete="message"
										variant="outlined"
										required
										name="message"
										label="Message"
										id="message"
										rowsMin={6}
										placeholder="Message *"
									/>
								</Grid>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
								>
									Send Message
          						</Button>
							</Grid>
						</form>
					</Grid>
				</Grid>
			</div>
		</section>
	)
}

export default Contact
