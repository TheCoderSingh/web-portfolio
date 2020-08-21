import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
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
		marginBottom: 20,
		backgroundColor: "#2fa52f"
	}
}))

const Contact = () => {
	const classes = useStyles()

	return (
		<section id="contact">
			<Grid container>
				<Grid item xs={12}>
					<NavDrawer />
				</Grid>
				<Grid item xs={12}>
					<SectionHeader sectionTitle="Interested?" />
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
						<form className={classes.form} action="https://formkeep.com/f/891f223c08c4" acceptCharset="UTF-8"
							encType="multipart/form-data" method="POST" target="_blank">
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
